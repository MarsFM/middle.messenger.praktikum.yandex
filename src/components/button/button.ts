import {button} from './button.tmpl';
import Block from '../../view/block';

export default class Button extends Block {
    constructor(props) {
        super(props);
    }

    render() {
        return this.compile(button, this.props);
    }
};
