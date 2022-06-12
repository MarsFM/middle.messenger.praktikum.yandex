import Block from '../../view/block';
import {isEqual} from '../lodash';
import store, {StoreEvents} from './store';

export const connect = (mapStateToProps: (state: any) => Record<string, unknown>) => {
    return (Component: typeof Block) => {
        return class extends Component {
            constructor(...props) {
                let state = mapStateToProps(store.getState());
                super({...props, ...state});

                store.on(StoreEvents.Updated, () => {
                    const newState = mapStateToProps(store.getState());
                    if (isEqual(state, newState)) {
                        this.setProps({...mapStateToProps(store.getState())});
                    }

                    state = newState;
                });
            };
        };
    };
};
