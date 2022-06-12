import tmpl from './button.hbs';

import './button.css';

export const button = ({name, variant, type, mix_class, isDisable}) => tmpl({name, mix_class, variant, type, isDisable});
