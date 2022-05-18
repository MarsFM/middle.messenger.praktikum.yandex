import registration from '../../pages/registration';
import Chat from '../../pages/chat/chat'
import profile from '../../pages/profile';
import renderPage5nn from '../../pages/page5nn';
import renderPage404 from '../../pages/page404';
import Authorization from '../../pages/authorization/authorization';


export const rootNavigation = () => {
    const root = document.getElementById('root') as HTMLElement;

    const chatLink = document.querySelector('.navigation__chat') as HTMLElement;
    const authLink = document.querySelector('.navigation__auth') as HTMLElement;
    const regLink = document.querySelector('.navigation__reg') as HTMLElement;
    const profileLink = document.querySelector('.navigation__profile') as HTMLElement;
    const error5nnLink = document.querySelector('.navigation__5nn') as HTMLElement;
    const notFound404Link = document.querySelector('.navigation__404') as HTMLElement;

    chatLink.addEventListener('click', () => {
        const chat = new Chat();
        root.innerHTML = '';
        root.appendChild(chat.getContent());
        return root;
    });

    authLink.addEventListener('click', () => {
        const authorization = new Authorization({
            name: 'Ilya'
        });
        root.innerHTML = '';
        root.appendChild(authorization.getContent());
        return root;
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
