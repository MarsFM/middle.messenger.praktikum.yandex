import {registerPartials} from '../../../utils';
import tmpl from './profile.hbs';

import './profile.css';

export const profile = ({components = {}}) => {
    registerPartials(components);
    return tmpl();
};
