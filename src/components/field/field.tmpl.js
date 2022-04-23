import fieldTmpl from './field.hbs';

import './field.css';

export const field = ({name, placeholder, clazz}) => fieldTmpl({
    name,
    placeholder,
    clazz
});
