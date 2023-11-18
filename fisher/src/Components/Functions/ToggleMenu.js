export default function ToggleMenu() {
    const ExpeditionMenu = document.querySelector('.ExpeditionMenu');
    const ExpeditionButton = document.querySelector('.G');
    const BackButton = document.querySelector('.BackButton');
    
    ExpeditionButton.addEventListener('click', () => {
        ExpeditionMenu.style.display = 'absolute';
    });
    BackButton.addEventListener('click', () => {
        ExpeditionMenu.style.display = 'none';
    });
}