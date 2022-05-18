import Block from "../../view/block";
import {chatItem} from './chat-item.tmpl';

export class ChatItem extends Block {
    constructor(props = {}) {
        super(props)

        console.log('his.props.data', this.props.data)
    }

    handleClick(e) {
        console.log(e)
    }

    render() {
        return this.compile(chatItem, {
            data: this.props.data,
            events: {
                'click': this.handleClick
            }
        })
    }
}
