import Block from '../../view/block';
import {renderLeftHeader} from './left-header.tmpl';

export class LeftHeader extends Block {

    render() {
        return this.compile(renderLeftHeader, {});
    }
}
