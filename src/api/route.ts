import {isEqualString} from '../utils/isEqual';
import {renderDom} from '../utils/render-dom';
import Block from '../view/block';

class Route {
    _pathname: string;
    _blockClass: Block;
    _block: Block | null = null;
    _porps: Record<any, any>;

    constructor(pathname: string, block: Block, props: Record<any, any>) {
        this._pathname = pathname;
        this._blockClass = block;
        this._block = null;
        this._porps = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return isEqualString(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = this._blockClass;
            renderDom(this._porps.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}

export default Route;
