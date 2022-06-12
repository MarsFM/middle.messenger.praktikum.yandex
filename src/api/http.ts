import {queryStringify} from '../utils/api';

enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
};

type Options = {
    headers: Record<any, any>;
    method: string;
    timeout: number;
    data: Document | XMLHttpRequestBodyInit | null | undefined;
}

export class HTTPTransport {
    get = (url, options: Options) => {
        return this.request(url, { ...options, method: Method.GET }, options.timeout);
    };

    post = (url, options: Options) => {
        return this.request(url, { ...options, method: Method.POST }, options.timeout);
    };

    put = (url, options: Options) => {
        return this.request(url, { ...options, method: Method.PUT }, options.timeout);
    };

    delete = (url, options: Options) => {
        return this.request(url, { ...options, method: Method.DELETE }, options.timeout);
    };

    request = (url, options: Options, timeout = 5000) => {
        const {headers = {}, method, data} = options;

        return new Promise(function (resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === Method.GET;

            xhr.open(
                method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            );

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}
