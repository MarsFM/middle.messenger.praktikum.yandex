import {button} from './button.tmpl';
import Block from '../../view/block';

export default class Button extends Block {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('props', this.props);
        return this.compile(button, this.props);
    }
};
