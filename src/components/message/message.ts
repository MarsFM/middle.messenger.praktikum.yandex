import messageTmpl from '.';
import Block from '../../view/block';

type MessageProps = {
    my: boolean;
    text: string;
};

export class Message extends Block {
    constructor(props: MessageProps) {
        super(props);
    }

    render() {
        return this.compile(messageTmpl, {
            my: this.props.my,
            text: this.props.text
        });
    }
}
