import { registerPartials, registerPartialsArray } from '../../../utils';
import tmpl from './chat-items.hbs';

import './chat-items.css';

export const chatItems = ({components}) => {
    registerPartials(components)

    return tmpl();
}
