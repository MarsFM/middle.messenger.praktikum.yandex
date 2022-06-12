import Block from '../../view/block';
import {composer} from './composer.tmpl';
import Field from '../../components/field/field';
import {connect} from '../../utils/store/connect';
import store from '../../utils/store/store';


class ComposerContainer extends Block {
    constructor(props) {
        super(props);
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
        }
    };

    render() {
        return this.compile(composer, {
            components: {
                'field': new Field({
                    name: 'message',
                    type: 'text',
                    placeholder: 'Введите сообщение',
                    mix_class: 'composer',
                    events: {
                        'keyup': (e) => {
                            if (e.key === 'Enter') {
                                store.set('users.0.messages.4', {
                                    text: 'Hello',
                                    time: '12:11',
                                    my: 'false'
                                });
                            }
                        }
                    }
                })
            }
        });
    }
}

const mapStateToProps = (state) => ({
    user: state.users[0]
});

export const Composer = connect(mapStateToProps)(ComposerContainer);
