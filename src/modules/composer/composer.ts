import Block from "../../view/block";
import {composer} from './composer.tmpl';
import Field from "../../components/field/field";

export class Composer extends Block {
    constructor(props = {}) {
        super(props);
    }

    handleChange(e) {
        console.log(e.target.value)
    }

    handleEnter(e) {
        if (e.key === "Enter") {
            console.log('enter');
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
        })
    }
}
