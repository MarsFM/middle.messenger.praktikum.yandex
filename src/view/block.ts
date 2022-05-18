import Handlebars from "handlebars"
import { EventBus } from "./event-bus"

export default class Block {
    eventBus
    props
    _meta
    _element
    _childrens

    static EVENTS = {
        INIT:        "init",
        FLOW_CDM:    "flow:component-did-mount",
        FLOW_CDU:    "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    }

    static countDidMount = 1;

    constructor(props = {} as any) {
        const eventBus = new EventBus();
        
        this._meta = {
            props,
        };

        this.props = this.makeProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));   
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    _componentDidUpdate(oldProps, newProps) {
        const isReRender = this.componentDidUpdate(oldProps, newProps);
        if (isReRender) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    _addEvents() {
        const {events = {}} = this.props;
        for (const eventName of Object.keys(events)) {
            this._element.addEventListener(eventName, events[eventName]);
        }
    }

    init() {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidMount() {}

    componentDidUpdate(oldProps, newProps) {
        return true;
    }

    _render() {
        this._element = document.createElement('div');
        const block = this.render() as any;
        this._element.innerHTML = '';

        this._element.appendChild(block);

        this._addEvents();
    }

    render() {}

    createDocumentElement(tag) {
        return document.createElement(tag);
    }

    compile(template, props) {
        const {components = {}} = props;
        const fragment = this.createDocumentElement('template');

        fragment.innerHTML = template(props);
        
        this._childrens = this.makeProxy(components)

        for (const child of Object.values(this._childrens) as any) {
            if (Array.isArray(child)) {
                for (const component of child) {
                    this.setComponent(component, fragment)
                }
            } else {
                this.setComponent(child, fragment)
            }
        }

        return fragment.content;
    }

    setComponent(child, fragment) {
        const childElement = child.getContent().firstElementChild;
        const clazz = childElement.getAttribute('class');
        const stub = fragment.content.firstElementChild.getElementsByClassName(clazz)[0];
        stub.replaceWith(child.getContent());
    }

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
                return true
            },
            deleteProperty(props, prop) {
                throw new Error("нет доступа");
            },
        });
    }

    setProps(newProps) {
        if (!newProps) {
          return;
        }
        
        if (Object.values(newProps).length) {
            Object.assign(this.props, newProps)
        }
    };

    getContent() {
        return this._element;
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }
}
