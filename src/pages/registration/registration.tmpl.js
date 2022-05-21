import tmpl from './registration.hbs';

import './registration.css';
import { registerPartials } from '../../../utils';

export const registration = ({components} = {}) => {
    registerPartials(components);

    return tmpl();
};
