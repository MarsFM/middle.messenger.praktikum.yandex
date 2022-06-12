import {EventBus} from './event-bus';
import uuid4 from 'uuid4';

export default class Block {
    eventBus;
    props;
    meta;
    _element;
    _childrens;
    _id;

    static EVENTS = {
        INIT:        'init',
        FLOW_CDM:    'flow:component-did-mount',
        FLOW_CDU:    'flow:component-did-update',
        FLOW_RENDER: 'flow:render'
    };

    constructor(props = {} as any) {
        const eventBus = new EventBus();

        this.meta = {
            props
        };

        this._id = uuid4();

        this.props = this.makeProxy(props);

        this.eventBus = () => eventBus;

        this.registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    };

    private registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    };

    private _componentDidMount() {
        this.componentDidMount();
    };

    private _componentDidUpdate(oldProps, newProps) {
        const isReRender = this.componentDidUpdate(oldProps, newProps);
        if (isReRender) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    };

    private addEvents() {
        const {events = {}} = this.props;
        for (const eventName of Object.keys(events)) {
            this._element.addEventListener(eventName, events[eventName]);
        }
    };

    private removeEvents() {
        const {events = {}} = this.props;
        for (const eventName of Object.keys(events)) {
            this._element.removeEventListener(eventName, events[eventName]);
        }
    };

    init() {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    };

    componentDidMount() {};

    componentDidUpdate(oldProps, newProps) {
        return true;
    };

    private _render() {
        const block = this.render() as any; // вызывает compile

        if (this._element) {
            this.removeEvents();
            this._element.replaceWith(block.firstElementChild);
        } else {
            this._element = this.createDocumentElement('div');

            this._element.innerHTML = '';
            this._element.appendChild(block);
        }

        this._element.firstElementChild.setAttribute('data-id', this._id);
        this.addEvents();
    };

    render() {};

    createDocumentElement(tag) {
        return document.createElement(tag);
    };

    compile(template, props) {
        const {components = {}} = props;

        this._childrens = this.makeProxy(components);

        const propsAndStubs = {...props};

        const fragment = this.createDocumentElement('template');

        fragment.innerHTML = template(propsAndStubs);

        for (const child of Object.values(this._childrens) as any) {
            if (Array.isArray(child)) {
                for (const component of child) {
                    this.setComponent(component, fragment);
                }
            } else {
                this.setComponent(child, fragment);
            }
        }

        return fragment.content;
    }

    setComponent(child, fragment) {
        const stub = fragment.content.querySelector(`[data-id='${child._id}']`);
        if (stub) {
            stub.replaceWith(child.getContent());
        }
    };

    makeProxy(props) {
        const self = this;
        return new Proxy(props, {
            get: (props, prop) => {
                const value = props[prop];
                return typeof value === 'function' ? value.bind(props) : value;
            },
            set: (props, prop, value) => {
                const oldProps = {...props};
                props[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, props);
                return true;
            },
            deleteProperty(props, prop) {
                throw new Error('нет доступа');
            },
        });
    };

    setProps(newProps) {
        if (!newProps) {
          return;
        }

        if (Object.values(newProps).length) {
            Object.assign(this.props, newProps);
        }
    };

    getContent() {
        return this._element;
    };

    show() {
        this.getContent().style.display = 'block';
    };

    hide() {
        this.getContent().style.display = 'none';
    };
}
