import {BaseAPI} from './base';
import {SignUpType} from '../types/signup';

export class AuthApi extends BaseAPI {
    constructor() {
        super('/auth');
    }

    create = (data: SignUpType) => {
        return this.http.post('/sign-up', {data});
    };
}
