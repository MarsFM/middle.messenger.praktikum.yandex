export const listenerAuthorazation = () => {
    const login = document.querySelector('.authorization__login');

    login.addEventListener('input', (event) => {
        console.log(event.target.value);
    });
};
