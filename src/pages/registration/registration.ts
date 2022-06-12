import Block from '../../view/block';
import Button from '../../components/button/button';
import Field from '../../components/field/field';
import {registration} from './registration.tmpl';
import {checkValidate} from '../../utils/validate';

const data = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
};

export class Registration extends Block {
    isDisable = true;

    constructor(props = {}) {
        super(props);
    }

    handleSubmit(e: Event) {
        checkValidate(this._childrens);
    };

    handleFirstName(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.firstName = text;
    };

    handleLastName(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.lastName = text;
    }

    handleLogin(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.login = text;
    }

    handlePhone(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.phone = text;
    }

    handleEmail(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.email = text;
    }

    handlePassword(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.password = text;
    }

    handleConfirmPassword(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.confirmPassword = text;
    }

    render() {
        console.log('This->isDisable', this);
        console.log('isDisable', this.isDisable);
        return this.compile(registration, {
            components: {
                'firstNameField': new Field({
                    name: 'firstName',
                    type: 'text',
                    placeholder: 'Имя',
                    mix_class: 'registration__first-name',
                    events: {
                        'change': this.handleFirstName
                    },
                }),
                'lastNameField': new Field({
                    name: 'lastName',
                    type: 'text',
                    placeholder: 'Фамилия',
                    mix_class: 'registration__last-name',
                    events: {
                        'change': this.handleLastName
                    },
                }),
                'loginField': new Field({
                    name: 'login',
                    type: 'text',
                    placeholder: 'Логин',
                    mix_class: 'registration__login',
                    events: {
                        'change': this.handleLogin
                    },
                }),
                'emailField': new Field({
                    name: 'email',
                    type: 'text',
                    placeholder: 'Почта',
                    mix_class: 'registration__email',
                    events: {
                        'change': this.handleEmail
                    },
                }),
                'phoneField': new Field({
                    name: 'phone',
                    type: 'text',
                    placeholder: 'Телефон',
                    mix_class: 'registration__phone',
                    events: {
                        'change': this.handlePhone
                    },
                }),
                'passwordField': new Field({
                    name: 'password',
                    type: 'password',
                    placeholder: 'Пароль',
                    mix_class: 'registration__password',
                    events: {
                        'change': this.handlePassword
                    },
                }),
                'confirmPasswordField': new Field({
                    name: 'confirmPassword',
                    type: 'password',
                    placeholder: 'Подтвердить пароль',
                    mix_class: 'registration__confirm-password',
                    events: {
                        'change': this.handleConfirmPassword
                    },
                }),
                'button': new Button({
                    name: 'Регистрация',
                    type: 'submit',
                    isDisable: this.isDisable,
                    mix_class:'registration__button',
                    variant: 'registration',
                    events: {
                        'click': this.handleSubmit.bind(this)
                    }
                })
            }
        });
    }
}
