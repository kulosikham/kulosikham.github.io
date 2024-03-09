document.getElementById('ipForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var ipAddress = document.getElementById('ipAddress').value;
    fetch('https://ipapi.co/' + ipAddress + '/json/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `
                <p><strong>IP Address:</strong> ${data.ip}</p>
                <p><strong>Hostname:</strong> ${data.hostname}</p>
                <p><strong>City:</strong> ${data.city}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>Country:</strong> ${data.country_name}</p>
                <p><strong>Postal Code:</strong> ${data.postal}</p>
                <p><strong>Latitude:</strong> ${data.latitude}</p>
                <p><strong>Longitude:</strong> ${data.longitude}</p>
                <p><strong>Timezone:</strong> ${data.timezone}</p>
                <p><strong>ISP:</strong> ${data.org}</p>
                <p><strong>ASN:</strong> ${data.asn}</p>
                <p><strong>Organization:</strong> ${data.org}</p>
                <p><strong>Language:</strong> ${navigator.language}</p>
                <p><strong>Browser:</strong> ${navigator.userAgent}</p>
                <p><strong>Platform:</strong> ${navigator.platform}</p>
                <p><strong>Screen Resolution:</strong> ${window.screen.width}x${window.screen.height}</p>
                <p><strong>Color Depth:</strong> ${window.screen.colorDepth}-bit</p>
                <p><strong>Cookie Enabled:</strong> ${navigator.cookieEnabled ? 'Yes' : 'No'}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
});
