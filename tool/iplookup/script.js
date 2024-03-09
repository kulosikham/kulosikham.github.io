document.getElementById('ipForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var ipAddress = document.getElementById('ipAddress').value;
    fetch('https://ipapi.co/' + ipAddress + '/json/')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = ''; // Clear previous content
            const text = `
                IP Address: ${data.ip}
                Hostname: ${data.hostname}
                City: ${data.city}
                Region: ${data.region}
                Country: ${data.country_name}
                Postal Code: ${data.postal}
                Latitude: ${data.latitude}
                Longitude: ${data.longitude}
                Timezone: ${data.timezone}
                ISP: ${data.org}
                ASN: ${data.asn}
                Organization: ${data.org}
                Language: ${navigator.language}
                Browser: ${navigator.userAgent}
                Platform: ${navigator.platform}
                Screen Resolution: ${window.screen.width}x${window.screen.height}
                Color Depth: ${window.screen.colorDepth}-bit
                Cookie Enabled: ${navigator.cookieEnabled ? 'Yes' : 'No'}
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
