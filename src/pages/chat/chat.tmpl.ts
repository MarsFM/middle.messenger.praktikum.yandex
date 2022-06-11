import tmpl from './chat.hbs';
import {registerPartials} from '../../utils/hbs';

import './chat.css';

export const chat = ({components}) => {
    registerPartials(components);

    return tmpl();
};
