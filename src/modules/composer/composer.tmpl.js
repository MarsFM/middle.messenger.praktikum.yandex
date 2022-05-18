import tmpl from './composer.hbs';
import {registerPartials} from '../../../utils';

export const composer = ({components}) => {
    registerPartials(components)
    return tmpl();
};
