import {registerPartialsForArray} from '../../utils/hbs';
import tmpl from './chat-items.hbs';

import './chat-items.css';

export const chatItems = ({components}) => {
    registerPartialsForArray(components, 'chatItems');

    return tmpl();
};
