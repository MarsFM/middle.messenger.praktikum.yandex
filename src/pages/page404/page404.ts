import Block from '../../view/block';
import {renderPage404} from './page404.tmpl';

export class Page404 extends Block {

    render() {
        return this.compile(renderPage404, {});
    }
}
