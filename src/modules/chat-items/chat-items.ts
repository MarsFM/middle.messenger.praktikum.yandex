import Block from '../../view/block';
import ChatItem from '../chat-item';
import {chatItems} from './chat-items.tmpl';

const users = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
        name: 'Вася',
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
export class ChatItems extends Block {
    constructor(props = {}) {
        super(props);
    }

    renderChatItems() {
        return users.map(user => new ChatItem({
            data: user,
            events: {
                'click': () => console.log('hello'),
            },
        }));
    }

    render() {
        return this.compile(chatItems, {
            components: {
                'chatItems': this.renderChatItems()
            }
        });
    }
}
