import Handlebars from 'handlebars';
import field from '../../components/field';
import button from '../../components/button';
import tmpl from './profile.hbs';

import './profile.css';

const fields = {
    firstName: {
        name: 'firstName',
        placeholder: 'Имя',
        clazz: 'profile__first-name'
    },
    lastName: {
        name: 'lastName',
        placeholder: 'Фамилия',
        clazz: 'profile__last-name'
    },
    nickname: {
        name: 'nickname',
        placeholder: 'Ник',
        clazz: 'profile__nickname'
    },
    login: {
        name: 'login',
        placeholder: 'Логин',
        clazz: 'profile__login'
    },
    email: {
        name: 'email',
        placeholder: 'Почта',
        clazz: 'profile__email'
    },
    phone: {
        name: 'phone',
        placeholder: 'Телефон',
        clazz: 'profile__phone'
    },
    password: {
        name: 'password',
        placeholder: 'Пароль',
        clazz: 'profile__password'
    },
    confirmPassword: {
        name: 'confirmPassword',
        placeholder: 'Подтвердить пароль',
        clazz: 'profile__confirm-password'
    },
    buttonChangePassword: {
        name: 'Изменить пароль',
        clazz:'profile__button-change-password'
    },
    buttonChangeData: {
        name: 'Изменть данные',
        clazz:'profile__button-change-password'
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
