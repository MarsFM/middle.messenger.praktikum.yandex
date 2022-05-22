import {field} from './field.tmpl';
import Block from '../../view/block';

export default class Field extends Block {
    element: HTMLInputElement;

    constructor(props) {
        super(props);

        this.element = this._element.firstElementChild;

        const nameElement = this.element.getAttribute('name');
        this.checkField(nameElement);
    }

    private checkField(name) {
        switch(name) {
            case 'login':
                this.addEvent(['focusin', 'focusout'], this.onChangeLogin);
                break;
            case 'password':
                this.addEvent(['focusin', 'focusout'], this.onChangePassword);
                break;
            case 'email':
                this.addEvent(['focusin', 'focusout'], this.onChangeEmail);
                break;
            case 'phone':
                this.addEvent(['focusin', 'focusout'], this.onChangePhone);
                break;
            case 'firstName':
            case 'lastName':
            case 'nickName':
                this.addEvent(['focusin', 'focusout'], this.onChangeName);
                break;
            case 'message':
                this.addEvent(['input'], this.onChangeMessage);
                break;
            default: null;
        }
    }

    private onChangeLogin(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;
        const isMatchString = text.match(/^[a-zA-Z0-9_-]+$/)?.length;
        const isNumber =  Number.isInteger(Number(text));
        const isMatch = Boolean((text.length >= 3 && text.length <= 20) && isMatchString && !isNumber);

        if (isMatch) {
            input.style.background = 'white';
        } else {
            input.style.background = 'pink';
        }
    }

    private onChangePassword(e) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;
        const isMatchFirstLetter = text.match(/([A-Z])+(\d)+/g)?.length;
        const isMatchFirstNumber = text.match(/(\d)+([A-Z])+/g)?.length;

        const isMatch = Boolean((text.length >= 8 && text.length <= 40) && text && (isMatchFirstLetter || isMatchFirstNumber));

        if (isMatch) {
            input.style.background = 'white';
        } else {
            input.style.background = 'pink';
        }
    }

    private onChangeEmail(e) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;
        const isMatch = Boolean(text.match(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]([a-z])+)\.([a-z\.]{2,})$/)?.length);

        if (isMatch) {
            input.style.background = 'white';
        } else {
            input.style.background = 'pink';
        }
    }

    private onChangePhone(e) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;
        const isMatch = Boolean(text.match(/^(\+)?(\d)+$/)?.length);

        if (isMatch) {
            input.style.background = 'white';
        } else {
            input.style.background = 'pink';
        }
    }

    private onChangeName(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;
        const isMatch = Boolean(text.match(/^([A-ZА-ЯЁ])+([A-zА-яЁё-])+$/)?.length);

        if (isMatch) {
            input.style.background = 'white';
        } else {
            input.style.background = 'pink';
        }
    }

    private onChangeMessage(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;
        const isMatch = Boolean(text.match(/^([A-zА-яёЁ/)/():])+$/)?.length);

        if (isMatch) {
            input.style.background = 'white';
        } else {
            input.style.background = 'pink';
        }
    }

    private addEvent(eventNames, callback) {
        const obj = eventNames.reduceRight((acc, eventName) => ({
            ...acc,
            [eventName]: callback
        }), {});

        this.setProps({
            ...this.props,
            events: {
                ...this.props.events,
                ...obj
            }
        });
    }

    render() {
        return this.compile(field, this.props);
    }
}
