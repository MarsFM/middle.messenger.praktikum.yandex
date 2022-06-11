import Router from './src/api/routers';
import Chat from './src/pages/chat';
import Profile from './src/pages/profile';
import Authorization from './src/pages/authorization/authorization';
import Registration from './src/pages/registration';
import Page5nn from './src/pages/page5nn';
import Page404 from './src/pages/page404';

const renderDOM = () => {
    const router = new Router('#root');

    router
        .use('/', new Chat())
        .use('/profile', new Profile())
        .use('/sign-in', new Authorization({name: 'ilya'}))
        .use('/sign-up', new Registration())
        .use('/5nn', new Page5nn({error: 500}))
        .use('/404', new Page404())
        .start();
};

renderDOM();
