import Field from '../components/field/field';

export const checkValidate = (children: Field[]) => {
    for(const key in children) {
        if (children[key] instanceof Field) {
            children[key]._element.firstElementChild.focus();
        }
    }
};
