import renderChat from './src/pages/chat';
import navigation from './src/modules/navigation';
import {rootNavigation} from './src/modules/navigation/navigation';

const renderDOM = () => {
    const root = document.getElementById('root');
    const nav = document.getElementById('navigation');

    root.innerHTML = renderChat();
    nav.innerHTML = navigation();
};

renderDOM();
rootNavigation();
