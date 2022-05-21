import { registerPartials, registerPartialsTest } from '../../../utils';
import tmpl from './chat-items.hbs';

import './chat-items.css';

export const chatItems = ({components}) => {
    registerPartialsTest(components, 'chatItems')

    return tmpl();
}
