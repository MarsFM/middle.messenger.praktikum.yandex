import Button from "../../components/button/button";
import Field from "../../components/field/field";
import Block from "../../view/block";
import {profile} from './profile.tmpl';

const data = {
    firstName: '',
    lastName: '',
    nickname: '',
    login: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
};
export class Profile extends Block {
    constructor(props = {}) {
        super(props);
    }

    handleFirstName(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.firstName = text;
    }

    handleLastName(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.lastName = text;
    }

    handleNickName(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.nickname = text;
    }

    handleLogin(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.login = text;
    }

    handleEmail(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.email = text;
    }

    handlePhone(e: Event) {
        const input = (e.target as HTMLInputElement);
        const text = input.value;

        data.phone = text;
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

    changePassword(e: Event) {
        console.log(data);
    }

    changeData(e: Event) {
        console.log(data);
    }

    render() {
        return this.compile(profile, {
            components: {
                'firstNameField': new Field({
                    name: 'firstName',
                    type: 'text',
                    placeholder: 'Имя',
                    mix_class: 'profile__first-name',
                    events: {
                        'change': this.handleFirstName
                    },
                }),
                'lastNameField': new Field({
                    name: 'lastName',
                    type: 'text',
                    placeholder: 'Фамилия',
                    mix_class: 'profile__last-name',
                    events: {
                        'change': this.handleLastName
                    },
                }),
                'nickNameField': new Field({
                    name: 'nickname',
                    type: 'text',
                    placeholder: 'Ник',
                    mix_class: 'profile__nickname',
                    events: {
                        'change': this.handleNickName
                    },
                }),
                'loginField': new Field({
                    name: 'login',
                    type: 'text',
                    placeholder: 'Логин',
                    mix_class: 'profile__login',
                    events: {
                        'change': this.handleLogin
                    },
                }),
                'emailField': new Field({
                    name: 'email',
                    type: 'text',
                    placeholder: 'Почта',
                    mix_class: 'profile__email',
                    events: {
                        'change': this.handleEmail
                    },
                }),
                'phoneField': new Field({
                    name: 'phone',
                    type: 'text',
                    placeholder: 'Телефон',
                    mix_class: 'profile__phone',
                    events: {
                        'change': this.handlePhone
                    },
                }),
                'passwordField': new Field({
                    name: 'password',
                    type: 'password',
                    placeholder: 'Пароль',
                    mix_class: 'profile__password',
                    events: {
                        'change': this.handlePassword
                    },
                }),
                'confirmPasswordField': new Field({
                    name: 'confirmPassword',
                    type: 'password',
                    placeholder: 'Подтвердить пароль',
                    mix_class: 'profile__confirm-password',
                    events: {
                        'change': this.handleConfirmPassword
                    },
                }),
                'buttonChangePassword': new Button({
                    name: 'button_password',
                    mix_class:'profile__button-change-password',
                    type: 'submit',
                    variant: 'change-password',
                    events: {
                        'click': this.changePassword
                    },
                }),
                'buttonChangheData': new Button({
                    name: 'button_change_password',
                    type: 'submit',
                    mix_class:'profile__button-change-data',
                    variant: 'change-data',
                    events: {
                        'click': this.changeData
                    },
                }),
            }
        })
    }
}
