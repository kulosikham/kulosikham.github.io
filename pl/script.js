document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate input
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Handle form submission (e.g., send data to server)
    console.log('Form submitted!', { name, email, message });

    // Reset the form
    document.getElementById('contact-form').reset();
});
