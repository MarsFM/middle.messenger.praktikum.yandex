import {EventBus} from '../../view/event-bus';
import {set} from '../lodash';

export enum StoreEvents {
    Updated = 'updated',
}

class Store extends EventBus {
    static __instance: Store;

    constructor() {
        super();

        if (Store.__instance) {
            return Store.__instance;
        }

        Store.__instance = this;
    }

    private state = {
        users: [
            {
                id: 1,
                name: 'Кирилл',
                messages: [
                    {
                        text: 'Привет Кирилл',
                        time: '12:13',
                        my: 'true'
                    },
                    {
                        text: 'Привет Илья',
                        time: '12:13',
                        my: 'false'
                    },
                    {
                        text: 'Как дела?',
                        time: '12:13',
                        my: 'true'
                    },
                    {
                        text: 'нормально!',
                        time: '12:13',
                        my: 'false'
                    },
                ],
            },
            {
                id: 2,
                name: 'Иван',
                messages: [
                    {
                        text: 'Привет Иван',
                        time: '12:14',
                        my: 'true'
                    },
                    {
                        text: 'Привет Иван2',
                        time: '12:13',
                        my: 'true'
                    },
                    {
                        text: 'Привет Илья',
                        time: '12:13',
                        my: 'false'
                    },
                ],
            },
            {
                id: 3,
                name: 'Виталя',
                messages: [
                    {
                        text: 'Привет Виталя',
                        time: '12:15',
                        my: 'true'
                    },
                    {
                        text: 'Привет Виталя2',
                        time: '12:13',
                        my: 'true'
                    },
                    {
                        text: 'Привет Илья',
                        time: '12:13',
                        my: 'false'
                    },
                ],
            },
            {
                id: 4,
                name: 'Вася',
                messages: [
                    {
                        text: 'Привет Женя',
                        time: '12:20',
                        my: true
                    },
                    {
                        text: 'Привет Иван2',
                        time: '12:13',
                        my: true
                    },
                    {
                        text: 'Привет Илья',
                        time: '12:13',
                        my: false
                    },
                ],
            },
        ],
    };

    public getState() {
        return this.state;
    }

    public set(path: string, value: unknown) {
        set(this.state, path, value);

        this.emit(StoreEvents.Updated);
    }
}

export default new Store();
