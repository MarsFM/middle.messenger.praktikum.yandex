import {registerPartialsForArray} from '../../utils/hbs';
import tmpl from './messages.hbs';

import './messages.css';

export const tmplMessages = ({components}) => {
    registerPartialsForArray(components, 'messages');

    return tmpl();
};
