document.getElementById('ipForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var ipAddress = document.getElementById('ipAddress').value;
    fetch('https://ipapi.co/' + ipAddress + '/json/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `
                <p><strong>IP Address:</strong> ${data.ip}</p>
                <p><strong>Country:</strong> ${data.country_name}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>City:</strong> ${data.city}</p>
                <p><strong>Postal Code:</strong> ${data.postal}</p>
                <p><strong>Latitude:</strong> ${data.latitude}</p>
                <p><strong>Longitude:</strong> ${data.longitude}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
});
