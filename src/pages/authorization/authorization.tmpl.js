import tmpl from './authorization.hbs';
import {registerPartials} from '../../../utils';

import './authorization.css';

// const fields = {
//     loginField: {
//         name: 'login',
//         placeholder: 'логин',
//         mix_class: 'authorization__login'
//     },
//     passwordField: {
//         name: 'password',
//         placeholder: 'пароль',
//         mix_class: 'authorization__password'
//     },
//     button: {
//         name: 'Авторизация',
//         type: 'submit',
//         mix_class:'authorization__button',
//         variant: 'authorization',
//     },
// };

export const authorization = ({name, components = {}}) => {
    registerPartials(components);
    return tmpl({name});
};
