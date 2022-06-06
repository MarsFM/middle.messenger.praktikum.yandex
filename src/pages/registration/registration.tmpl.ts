import tmpl from './registration.hbs';

import './registration.css';
import {registerPartials} from '../../utils/hbs';

export const registration = ({components}) => {
    registerPartials(components);

    return tmpl();
};
