import ChatItem from "../../modules/chat-item";
import ChatItems from "../../modules/chat-items";
import Composer from "../../modules/composer";
import Block from "../../view/block";
import {chat} from './chat.tmpl';;

export default class Chat extends Block {

    render() {
        return this.compile(chat, {
            components: {
                'composer': new Composer(),
                'chatItems': new ChatItems(),
            }
        })
    }
}
