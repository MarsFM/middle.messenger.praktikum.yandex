import {authorization} from './authorization.tmpl';
import Block from '../../view/block';
import Button from '../../components/button/button';
import Field from '../../components/field/field';
import {checkValidate} from '../../utils/validate';

const data = {
    login: '',
    password: ''
};
export default class Authorization extends Block {
    constructor(props: Record<string, any>) {
        super(props);
    }

    handlerSubmit() {
        console.log(data);
        checkValidate(this._childrens);
    }

    handleChangeLogin(event: Event) {
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
                        'click' : this.handlerSubmit.bind(this)
                    },
                    name: 'Авторизация',
                    type: 'submit',
                    mix_class:'authorization__button',
                    variant: 'authorization',
                }),
                'loginField': new Field({
                    name: 'login',
                    events: {
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
