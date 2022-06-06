import Block from '../../view/block';
import {composer} from './composer.tmpl';
import Field from '../../components/field/field';

const data = {
    message: ''
};

export class Composer extends Block {
    constructor(props = {}) {
        super(props);
    }

    handleChange(e) {
        data.message = e.target.value;
    }

    handleEnter(e) {
        if (e.key === 'Enter') {
            console.log(data);
        }
    }

    render() {
        return this.compile(composer, {
            components: {
                'field': new Field({
                    name: 'message',
                    type: 'text',
                    placeholder: 'Введите сообщение',
                    mix_class: 'composer',
                    events: {
                        'input': this.handleChange,
                        'keyup': this.handleEnter
                    }
                })
            }
        });
    }
}
