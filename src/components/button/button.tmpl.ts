import tmpl from './button.hbs';

import './button.css';

export const button = ({name, variant, type, mix_class}) => tmpl({name, mix_class, variant, type});
