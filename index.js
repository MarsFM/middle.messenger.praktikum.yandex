import authorization from "./src/pages/authorization";
import registration from './src/pages/registration';
import profile from "./src/pages/profile";
import page5nn from './src/pages/page5nn'
import page404 from './src/pages/page404'
import renderChat from './src/pages/chat';


const renderDOM = () => {
    const root = document.getElementById('root');
    // root.innerHTML = authorization(); // Авторизация
    // root.innerHTML = registration(); // Регистрация 
    root.innerHTML = profile(); // Профайл 
    // root.innerHTML = page5nn(500); // 5nn 
    // root.innerHTML = page404(); // 404 
    // root.innerHTML = renderChat() // chat
}

renderDOM();
