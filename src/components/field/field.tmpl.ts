import fieldTmpl from './field.hbs';

import './field.css';

export const field = ({name, placeholder, type, mix_class}) => fieldTmpl({
    name,
    type,
    placeholder,
    mix_class
});
