import Button from '../../components/button/button';
import Field from '../../components/field/field';
import {checkValidate} from '../../utils/validate';
import Block from '../../view/block';
import {registration} from './registration.tmpl';

const data = {
    firstName: '',
    lastName: '',
    nickName: '',
    login: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
};

export class Registration extends Block {
    constructor(props = {}) {
        super(props);
    }

    handleSubmit(e: Event) {
        console.log(data);
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

    handleNickName(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.nickName = text;
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
        return this.compile(registration, {
            components: {
                'firstNameField': new Field({
                    name: 'firstName',
                    type: 'text',
                    placeholder: '??????',
                    mix_class: 'registration__first-name',
                    events: {
                        'change': this.handleFirstName
                    },
                }),
                'lastNameField': new Field({
                    name: 'lastName',
                    type: 'text',
                    placeholder: '??????????????',
                    mix_class: 'registration__last-name',
                    events: {
                        'change': this.handleLastName
                    },
                }),
                'nicknameField': new Field({
                    name: 'nickname',
                    type: 'text',
                    placeholder: '??????',
                    mix_class: 'registration__nickname',
                    events: {
                        'change': this.handleNickName
                    },
                }),
                'loginField': new Field({
                    name: 'login',
                    type: 'text',
                    placeholder: '??????????',
                    mix_class: 'registration__login',
                    events: {
                        'change': this.handleLogin
                    },
                }),
                'emailField': new Field({
                    name: 'email',
                    type: 'text',
                    placeholder: '??????????',
                    mix_class: 'registration__email',
                    events: {
                        'change': this.handleEmail
                    },
                }),
                'phoneField': new Field({
                    name: 'phone',
                    type: 'text',
                    placeholder: '??????????????',
                    mix_class: 'registration__phone',
                    events: {
                        'change': this.handlePhone
                    },
                }),
                'passwordField': new Field({
                    name: 'password',
                    type: 'password',
                    placeholder: '????????????',
                    mix_class: 'registration__password',
                    events: {
                        'change': this.handlePassword
                    },
                }),
                'confirmPasswordField': new Field({
                    name: 'confirmPassword',
                    type: 'password',
                    placeholder: '?????????????????????? ????????????',
                    mix_class: 'registration__confirm-password',
                    events: {
                        'change': this.handleConfirmPassword
                    },
                }),
                'button': new Button({
                    name: 'registration',
                    type: 'submit',
                    mix_class:'registration__button',
                    variant: 'registration',
                    events: {
                        'click': this.handleSubmit
                    }
                })
            }
        });
    }
}
