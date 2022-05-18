import Handlebars from 'handlebars';

export const registerPartials = (components) => {
    Object.keys(components).forEach((name, index) => {
        const tmpNode = document.createElement("div");
        const ele = getElement(components, name, index);
        tmpNode.appendChild(ele.firstElementChild);
        const str = tmpNode.innerHTML;
        
        if (Array.isArray(components[name])) {
            Handlebars.registerPartial(`${name}${index}`, str); 
        } else {
            Handlebars.registerPartial(name, str); 
        }
    });
};

const getElement = (components, name, index) => {
    if (Array.isArray(components[name])) {
        return components[name][index].render()
    }

    return components[name].render();
}

export const registerPartialsArray = (components, name) => {
    components.forEach(component => {
        const tmpNode = document.createElement("div");
        const ele = component.render()
        tmpNode.appendChild(ele.firstElementChild);
        const str = tmpNode.innerHTML;
        Handlebars.registerPartial(name, str); 
    });
};
