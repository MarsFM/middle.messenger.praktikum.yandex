import {chat} from './chat.tmpl';
import ChatItems from '../../modules/chat-items';
import Composer from '../../modules/composer';
import Block from '../../view/block';
import LeftHeader from '../../components/left-header';
import Messages from '../../modules/messages';

export default class Chat extends Block {

    render() {
        return this.compile(chat, {
            components: {
                'leftHeder': new LeftHeader(),
                'composer': new Composer(),
                'chatItems': new ChatItems(),
                'messages': new Messages()
            }
        });
    }
}
