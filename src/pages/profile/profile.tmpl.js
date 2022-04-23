import Handlebars from 'handlebars';
import field from '../../components/field';
import button from '../../components/button';
import tmpl from './profile.hbs';

import './profile.css';

const fields = {
    firstName: {
        name: 'firstName',
        placeholder: 'Имя',
        mix_class: 'profile__first-name'
    },
    lastName: {
        name: 'lastName',
        placeholder: 'Фамилия',
        mix_class: 'profile__last-name'
    },
    nickname: {
        name: 'nickname',
        placeholder: 'Ник',
        mix_class: 'profile__nickname'
    },
    login: {
        name: 'login',
        placeholder: 'Логин',
        mix_class: 'profile__login'
    },
    email: {
        name: 'email',
        placeholder: 'Почта',
        mix_class: 'profile__email'
    },
    phone: {
        name: 'phone',
        placeholder: 'Телефон',
        mix_class: 'profile__phone'
    },
    password: {
        name: 'password',
        placeholder: 'Пароль',
        mix_class: 'profile__password'
    },
    confirmPassword: {
        name: 'confirmPassword',
        placeholder: 'Подтвердить пароль',
        mix_class: 'profile__confirm-password'
    },
    buttonChangePassword: {
        name: 'Изменить пароль',
        mix_class:'profile__button-change-password',
        type: 'submit',
        variant: 'change-password'
    },
    buttonChangeData: {
        name: 'Изменть данные',
        type: 'submit',
        mix_class:'profile__button-change-data',
        variant: 'change-data',
    }
};

export const profile = () => {
    Handlebars.registerPartial('firstNameField', field(fields.firstName));
    Handlebars.registerPartial('lastNamedField', field(fields.lastName));
    Handlebars.registerPartial('nicknameField', field(fields.nickname));
    Handlebars.registerPartial('loginField', field(fields.login));
    Handlebars.registerPartial('emailField', field(fields.email));
    Handlebars.registerPartial('phoneField', field(fields.phone));
    Handlebars.registerPartial('passwordField', field(fields.password));
    Handlebars.registerPartial('confirmPasswordField', field(fields.confirmPassword));
    Handlebars.registerPartial('buttonChangePasswordField', button(fields.buttonChangePassword));
    Handlebars.registerPartial('buttonChangheDataField', button(fields.buttonChangeData));

    return tmpl();
};
