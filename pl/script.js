document.getElementById('menu-button').addEventListener('click', function() {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    menuButton.classList.toggle('active');
    menu.classList.toggle('active');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Validate input
    if (!name || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Handle form submission (e.g., send data to server)
    console.log('Form submitted!', { name, message });

    // Reset the form
    document.getElementById('contact-form').reset();
});
