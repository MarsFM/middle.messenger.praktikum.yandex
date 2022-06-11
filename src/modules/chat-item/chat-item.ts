import Block from '../../view/block';
import {chatItem} from './chat-item.tmpl';

export class ChatItem extends Block {
    constructor(props = {}) {
        super(props);
    }

    render() {
        return this.compile(chatItem, {
            data: this.props.data
        });
    };
}
