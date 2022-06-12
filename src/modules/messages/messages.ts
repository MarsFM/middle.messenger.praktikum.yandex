import Message from '../../components/message';
import Block from '../../view/block';
import {tmplMessages} from './messages.tmpl';
import {connect} from '../../utils/store/connect';

class MessagesContainer extends Block {
    constructor(props = {}) {
        super(props);
    }

    renderMessages() {
        const {messages} = this.props;
        return messages.map((data: any) => {
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

const mapStateToProps = (state) => ({
    messages: state.users[0].messages
});

export const Messages = connect(mapStateToProps)(MessagesContainer);
