import Handlebars from 'handlebars';
import Block from '../view/block';

export const registerPartials = (components: Block) => {
    Object.keys(components).forEach((name, index) => {
        const tmpNode = document.createElement('div');
        const element = getElement(components, name, index);
        element.firstElementChild.setAttribute('data-id', components[name]._id);
        tmpNode.appendChild(element.firstElementChild);
        const str = tmpNode.innerHTML;
        if (Array.isArray(components[name])) {
            Handlebars.registerPartial(`${name}${index}`, str);
        } else {
            Handlebars.registerPartial(name, str);
        }
    });
};

export const registerPartialsForArray = (components: Block[], name: string) => {
    let newStr = '';

    if (Array.isArray(components[name])) {
        components[name].forEach((component) => {
            const tmpNode = document.createElement('div');
            const element = component.render();
            element.firstElementChild.setAttribute('data-id', component._id);
            tmpNode.appendChild(element.firstElementChild);
            const str = tmpNode.innerHTML;

            newStr += `${str}`;
        });
    }

    Handlebars.registerPartial(name, newStr);
};

const getElement = (components, name, index) => {
    if (Array.isArray(components[name])) {
        return components[name][index].render();
    }

    return components[name].render();
};
