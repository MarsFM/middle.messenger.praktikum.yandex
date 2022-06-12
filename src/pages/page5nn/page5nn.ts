import Block from '../../view/block';
import {renderPage5nn} from './page5nn.tmpl';

export class Page5nn extends Block {
    constructor(props) {
        super(props);
    }

    render() {
        return this.compile(renderPage5nn, {
            number_error: this.props.error
        });
    }
}
