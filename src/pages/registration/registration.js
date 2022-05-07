export const listenerRegistration = () => {
    const login = document.querySelector('.registration__login');

    login.addEventListener('input', (event) => {
        console.log(event.target.value);
    });
};
