document.getElementById('menu-button').addEventListener('click', function() {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    menuButton.classList.toggle('active');
    menu.classList.toggle('active');
});
