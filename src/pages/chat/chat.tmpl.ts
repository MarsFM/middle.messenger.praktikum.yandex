import Handlebars from 'handlebars';
import tmpl from './chat.hbs';
import chatItem from '../../modules/chat-item';
import messages from '../../components/message';
import composer from '../../modules/composer';

import './chat.css';
import {registerPartials} from '../../utils/hbs';

const users = [
    {
        name: 'Кирилл',
        messages: [
            {
                text: 'Привет Кирилл',
                time: '12:13',
                my: 'true'
            },
            {
                text: 'Привет Илья',
                time: '12:13',
                my: 'false'
            },
            {
                text: 'Как дела?',
                time: '12:13',
                my: 'true'
            },
            {
                text: 'нормально!',
                time: '12:13',
                my: 'false'
            },
        ],
    },
    {
        name: 'Иван',
        messages: [
            {
                text: 'Привет Иван',
                time: '12:14',
                my: 'true'
            },
            {
                text: 'Привет Иван2',
                time: '12:13',
                my: 'true'
            },
            {
                text: 'Привет Илья',
                time: '12:13',
                my: 'false'
            },
        ],
    },
    {
        name: 'Виталя',
        messages: [
            {
                text: 'Привет Виталя',
                time: '12:15',
                my: 'true'
            },
            {
                text: 'Привет Виталя2',
                time: '12:13',
                my: 'true'
            },
            {
                text: 'Привет Илья',
                time: '12:13',
                my: 'false'
            },
        ],
    },
    {
        name: 'Женя',
        messages: [
            {
                text: 'Привет Женя',
                time: '12:20',
                my: true
            },
            {
                text: 'Привет Иван2',
                time: '12:13',
                my: true
            },
            {
                text: 'Привет Илья',
                time: '12:13',
                my: false
            },
        ],
    },
];

export const chat = ({components}) => {
    registerPartials(components);

    Handlebars.registerPartial('messages', messages({data: users[0].messages}));

    return tmpl();
};
