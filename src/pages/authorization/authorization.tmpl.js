import Handlebars from 'handlebars';
import field from '../../components/field';
import button from '../../components/button';
import tmpl from './authorization.hbs';

import './authorization.css';

const fields = {
    login: {
        name: 'login',
        placeholder: 'логин',
        clazz: 'authorization__login'
    },
    password: {
        name: 'password',
        placeholder: 'пароль',
        clazz: 'authorization__password'
    },
    button: {
        name: 'Авторизация',
        clazz:'authorization__button'
    }
};

export const authorization = () => {
    Handlebars.registerPartial('loginField', field(fields.login));
    Handlebars.registerPartial('passwordField', field(fields.password));
    Handlebars.registerPartial('button', button(fields.button));

    return tmpl();
};
