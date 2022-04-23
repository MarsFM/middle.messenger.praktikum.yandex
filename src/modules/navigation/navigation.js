import authorization from '../../pages/authorization';
import registration from '../../pages/registration';
import profile from '../../pages/profile';
import renderPage5nn from '../../pages/page5nn';
import renderPage404 from '../../pages/page404';
import renderChat from '../../pages/chat';

export const rootNavigation = () => {
    const root = document.getElementById('root');

    const chatLink = document.querySelector('.navigation__chat');
    const authLink = document.querySelector('.navigation__auth');
    const regLink = document.querySelector('.navigation__reg');
    const profileLink = document.querySelector('.navigation__profile');
    const error5nnLink = document.querySelector('.navigation__5nn');
    const notFound404Link = document.querySelector('.navigation__404');

    chatLink.addEventListener('click', () => {
        root.innerHTML = renderChat();
    });

    authLink.addEventListener('click', () => {
        root.innerHTML = authorization();
    });

    regLink.addEventListener('click', () => {
        root.innerHTML = registration();
    });

    profileLink.addEventListener('click', () => {
        root.innerHTML = profile();
    });

    error5nnLink.addEventListener('click', () => {
        root.innerHTML = renderPage5nn(500);
    });

    notFound404Link.addEventListener('click', () => {
        root.innerHTML = renderPage404();
    });
};
