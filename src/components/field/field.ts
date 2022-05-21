import {field} from "./field.tmpl";
import Block from "../../view/block";

export default class Field extends Block {
    element: HTMLInputElement;
    onInput: (e: Event) => void;

    constructor(props) {
        super(props);

        this.element = this._element.firstElementChild;

        const nameElement = this.element.getAttribute('name');
        this.checkField(nameElement);

        this.onInput = props.onInput;
    }

    private checkField(name) {
        switch(name) {
            case 'login':
                this.addEvent('input', this.onChangeLogin);
                break;
            case 'password':
                this.addEvent('input', this.onChangePassword);
                break
            case 'email':
                this.addEvent('input', this.onChangeEmail);
                break
            case 'phone':
                this.addEvent('input', this.onChangePhone);
                break
            default: null
        }
    }

    private onChangeLogin(e: Event) {
        const input = (e.target as HTMLInputElement)
        const text = input.value;
        const isMatch = text.match(/^[a-zA-Z0-9_-]+$/)?.length;
        const isNumber =  Number.isInteger(Number(text));
        if ((text.length >= 3 && text.length <= 20) && isMatch && !isNumber) {
            input.style.background = 'white';
        } else {
            input.style.background = 'pink';
        }

        console.log(this);
    }
    
    private onChangePassword(e) {
        const input = (e.target as HTMLInputElement)
        const text = input.value;
        const isMatchFirstLetter = text.match(/([A-Z])+(\d)+/g)?.length;
        const isMatchFirstNumber = text.match(/(\d)+([A-Z])+/g)?.length;
        console.log(isMatchFirstLetter, isMatchFirstLetter, isMatchFirstNumber);

        if ((text.length >= 8 && text.length <= 40) && text && (isMatchFirstLetter || isMatchFirstNumber)) {
            input.style.background = 'white'
        } else {
            input.style.background = 'pink'
        }

        if (typeof this.onInput === 'function') {
            this.onInput(e);
        }
    }

    private onChangeEmail(e) {
        const input = (e.target as HTMLInputElement)
        const text = input.value;
        const isMatch = text.match(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]([a-z])+)\.([a-z\.])$/)?.length;

        if (isMatch) {
            input.style.background = 'white';
        } else {
            input.style.background = 'pink';
        }

        if (typeof this.onInput === 'function') {
            this.onInput(e);
        }
    }

    private onChangePhone(e) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;
        const isMatch = text.match(/^(\+)?(\d)+$/)?.length;

        if ((text.length >= 8 && text.length <= 40) && isMatch) {
            input.style.background = 'white';
        } else {
            input.style.background = 'pink';
        }

        if (typeof this.onInput === 'function') {
            this.onInput(e);
        }
    }

    private addEvent(eventName, callback) {
        this.setProps({
            ...this.props,
            events: {
                ...this.props.events,
                [eventName]: callback
            }
        })
    }


    render() {
        return this.compile(field, this.props);
    }
}
