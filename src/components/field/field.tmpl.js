import fieldTmpl from './field.hbs';

import './field.css';

export const field = ({name, placeholder, mix_class}) => fieldTmpl({
    name,
    placeholder,
    mix_class
});
