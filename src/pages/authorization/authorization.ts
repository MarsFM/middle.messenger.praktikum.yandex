import {authorization} from "./authorization.tmpl";
import Block from "../../view/block";
import Button from "../../components/button/button";
import Field from "../../components/field/field";

export default class Authorization extends Block {
    components
    constructor(props) {
        super(props);
    }

    handlerButton = (e: Event) => {
        console.log('Button1');
    }

    render() {
        return this.compile(authorization, {
            name: this.props.name, 
            components: {
                'button': new Button({
                    events: {
                        'click' : (e) => {
                            console.log(e, 'hello');
                        }
                    },
                    name: 'Авторизация',
                    type: 'submit',
                    mix_class:'authorization__button',
                    variant: 'authorization',
                }),
                'loginField': new Field({
                    name: 'login',
                    events: {
                        'focusin': (e) => {
                            e.target.style.background = 'pink';
                        },
                        'focusout': (e) => {
                            e.target.style.background = 'white';
                        },
                        'input': (e) => {
                            console.log('e', e.target.value);
                        }
                    },
                    placeholder: 'логин',
                    mix_class: 'authorization__login'
                }),
                'passwordField': new Field({
                    name: 'password',
                    placeholder: 'пароль',
                    mix_class: 'authorization__password'
                }),
            }
        });
    }
}
