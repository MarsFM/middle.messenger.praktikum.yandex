import tmpl from './composer.hbs';
import {registerPartials} from '../../utils/hbs';

export const composer = ({components}) => {
    registerPartials(components);
    return tmpl();
};
