document.getElementById('ipForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var ipAddress = document.getElementById('ipAddress').value;
    fetch('https://ipapi.co/' + ipAddress + '/json/')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = ''; // Clear previous content
            const text = `
                IP Address: ${data.ip}\n
                Hostname: ${data.hostname || 'N/A'}\n
                City: ${data.city || 'N/A'}\n
                Region: ${data.region || 'N/A'}\n
                Country: ${data.country_name || 'N/A'}\n
                Postal Code: ${data.postal || 'N/A'}\n
                Latitude: ${data.latitude || 'N/A'}\n
                Longitude: ${data.longitude || 'N/A'}\n
                Timezone: ${data.timezone || 'N/A'}\n
                ISP: ${data.org || 'N/A'}\n
                ASN: ${data.asn || 'N/A'}\n
                Organization: ${data.org || 'N/A'}\n
                Language: ${navigator.language || 'N/A'}\n
                Browser: ${navigator.userAgent || 'N/A'}\n
                Platform: ${navigator.platform || 'N/A'}\n
                Screen Resolution: ${window.screen.width}x${window.screen.height} pixels\n
                Color Depth: ${window.screen.colorDepth}-bit\n
                Cookie Enabled: ${navigator.cookieEnabled ? 'Yes' : 'No'}\n
            `;
            typeText(resultDiv, text, 0);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerHTML = 'Error fetching data. Please try again later.';
        });
});

function typeText(element, text, index) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(function() {
            typeText(element, text, index);
        }, Math.floor(Math.random() * 50) + 50); // Random delay for typing effect
    }
}
