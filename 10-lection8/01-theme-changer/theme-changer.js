const changer = document.getElementById('theme-changer');
const html = document.documentElement;
changer.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
});
// не работает переключателью несколько элементов с одинаковым id - неопределенность поведения листенера
const burgerChanger = document.getElementById('burger-theme-changer');
burgerChanger.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
});
