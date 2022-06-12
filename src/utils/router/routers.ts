import Block from '../../view/block';
import Route from './route';

interface IRouter {
    use: (path: string, block: Block) => Router;
    start: () => void;
    go: (path: string) => void;
    back: () => void;
    forward: () => void;

    routes: Route[];
    history: History;
    _currentRoute: any;
}

export class Router implements IRouter {
    static __instance: Router;

    routes: any[];
    _currentRoute: any;
    _rootQuery: string;
    history: History;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    };

    use(pathname: string, block: Block) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);

        return this;
    };

    start() {
        window.onpopstate = (event: any) => {
            this._onRoute(event?.currentTarget?.location.pathname);
        };

        this._onRoute(window.location.pathname);
    };

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (!route) {
            return;
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render(route, pathname);
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    };

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }

    back() {
        history.back();
    };

    forward() {
        history.forward();
    };
}

export default Router;
