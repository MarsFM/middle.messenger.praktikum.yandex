import tmpl from './authorization.hbs';
import {registerPartials} from '../../utils/hbs';

import './authorization.css';

export const authorization = ({name, components}) => {
    registerPartials(components);
    return tmpl({name});
};
