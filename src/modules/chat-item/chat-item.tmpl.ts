
import tmpl from './chat-item.hbs';

import './chat-item.css';

export const chatItem = ({data}) => {
    const {name, messages} = data;
    const lastMessage = messages[messages.length - 1].text;
    return tmpl({name, lastMessage});
};
