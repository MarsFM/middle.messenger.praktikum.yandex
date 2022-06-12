import {HTTPTransport} from './http';

export class BaseAPI {
    protected http: HTTPTransport;

    constructor(url: string) {
        this.http = new HTTPTransport(url);
    }

    create = (data: unknown): Promise<unknown> => {
        throw new Error('Not implemented');
    };

    request = () => {
        throw new Error('Not implemented');
    };

    update = () => {
        throw new Error('Not implemented');
    };

    delete = () => {
        throw new Error('Not implemented');
    };
}
