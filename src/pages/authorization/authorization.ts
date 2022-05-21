import {authorization} from "./authorization.tmpl";
import Block from "../../view/block";
import Button from "../../components/button/button";
import Field from "../../components/field/field";

const data = {
    login: '',
    password: ''
}

export default class Authorization extends Block {
    components
    constructor(props) {
        super(props);
    }

    handlerSubmit () {
        console.log(data);
    }

    handleChangeLogin(event: Event) {
        console.log(111);
        data.login = (event.target as HTMLInputElement).value;
    }

    handleChangePassword(event: Event) {
        data.password = (event.target as HTMLInputElement).value;
    }

    render() {
        return this.compile(authorization, {
            name: this.props.name, 
            components: {
                'button': new Button({
                    events: {
                        'click' : this.handlerSubmit
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
                            // e.target.style.background = 'pink';
                        },
                        'focusout': (e) => {
                            // e.target.style.background = 'white';
                        },
                        'change': this.handleChangeLogin
                    },
                    placeholder: 'логин',
                    mix_class: 'authorization__login',
                }),
                'passwordField': new Field({
                    name: 'password',
                    type: 'password',
                    placeholder: 'пароль',
                    mix_class: 'authorization__password',
                    events: {
                        'change': this.handleChangePassword
                    }
                }),
            },
        });
    }
}
