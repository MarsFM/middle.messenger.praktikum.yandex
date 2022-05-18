import {field} from "./field.tmpl";
import Block from "../../view/block";

export default class Field extends Block {
    constructor(props) {
        super(props);

        // this.setProps({
        //     events: {
        //         'input': this.onChange
        //     }
        // })
    }
    
    onChange(e) {
        console.log(e.target.value);
    }

    render() {
        return this.compile(field, this.props);
    }
}
