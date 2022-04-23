import Handlebars from 'handlebars';
import field from '../../components/field';
import button from '../../components/button';
import tmpl from './registration.hbs';

import './registration.css';

const fields = {
    firstName: {
        name: 'firstName',
        placeholder: 'Имя',
        clazz: 'registration__first-name'
    },
    lastName: {
        name: 'lastName',
        placeholder: 'Фамилия',
        clazz: 'registration__last-name'
    },
    nickname: {
        name: 'nickname',
        placeholder: 'Ник',
        clazz: 'registration__nickname'
    },
    login: {
        name: 'login',
        placeholder: 'Логин',
        clazz: 'registration__login'
    },
    email: {
        name: 'email',
        placeholder: 'Почта',
        clazz: 'registration__email'
    },
    phone: {
        name: 'phone',
        placeholder: 'Телефон',
        clazz: 'registration__phone'
    },
    password: {
        name: 'password',
        placeholder: 'Пароль',
        clazz: 'registration__password'
    },
    confirmPassword: {
        name: 'confirmPassword',
        placeholder: 'Подтвердить пароль',
        clazz: 'registration__confirm-password'
    },
    button: {
        name: 'Регистрация',
        clazz:'registration__button'
    }
};

export const registration = () => {
    Handlebars.registerPartial('firstNameField', field(fields.firstName));
    Handlebars.registerPartial('lastNamedField', field(fields.lastName));
    Handlebars.registerPartial('nicknameField', field(fields.nickname));
    Handlebars.registerPartial('loginField', field(fields.login));
    Handlebars.registerPartial('emailField', field(fields.email));
    Handlebars.registerPartial('phoneField', field(fields.phone));
    Handlebars.registerPartial('passwordField', field(fields.password));
    Handlebars.registerPartial('confirmPasswordField', field(fields.confirmPassword));
    Handlebars.registerPartial('button', button(fields.button));

    return tmpl();
};
