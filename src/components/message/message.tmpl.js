import tmpl from './message.hbs';

import './message.css';

export const messageTmpl = ({my, text}) => {
    return tmpl({my, text});
};
