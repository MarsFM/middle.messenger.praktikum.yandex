import {AuthApi} from '../api';
import {SignUpType} from '../types/signup';

export class AuthController {
    private api: AuthApi;

    constructor() {
        this.api = new AuthApi();
    }

    async signUp(data: SignUpType) {
        try {
            return await this.api.create(data);
        } catch(error) {
            throw new Error(`Error: ${error}`);
        }
    }
}
