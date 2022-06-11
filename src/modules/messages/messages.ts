import Message from '../../components/message';
import Block from '../../view/block';
import { tmplMessages } from './messages.tmpl';

export class Messages extends Block {
    renderMessages() {
        return [].map((data: any) => {
            return new Message({
                my: data.my,
                text: data.text
            });
        });
    }

    render() {
        return this.compile(tmplMessages, {
            components: {
                'messages': this.renderMessages()
            }
        });
    }
}
