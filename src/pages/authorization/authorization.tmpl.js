import tmpl from './authorization.hbs';
import {registerPartials} from '../../../utils';

import './authorization.css';

export const authorization = ({name, components = {}}) => {
    registerPartials(components);
    return tmpl({name});
};
