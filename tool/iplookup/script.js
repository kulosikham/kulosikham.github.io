document.getElementById('ipForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var ipAddress = document.getElementById('ipAddress').value;
    fetch('https://ipapi.co/' + ipAddress + '/json/')
        .then(response => response.json())
        .then(data => {
            // Menentukan warna teks
            var textColor = ''; // default: hitam
            if (data.ip === undefined || data.country_name === undefined || data.region === undefined || data.city === undefined || data.postal === undefined || data.latitude === undefined || data.longitude === undefined || data.timezone === undefined || data.org === undefined || data.asn === undefined) {
                textColor = 'red'; // Jika ada nilai yang tidak terdefinisi, ubah warna teks menjadi merah
            }

            // Menampilkan hasil
            document.getElementById('result').innerHTML = `
                <p><strong style="color: ${textColor};">IP Address:</strong> ${data.ip}</p>
                <p><strong style="color: ${textColor};">Country:</strong> ${data.country_name}</p>
                <p><strong style="color: ${textColor};">Region:</strong> ${data.region}</p>
                <p><strong style="color: ${textColor};">City:</strong> ${data.city}</p>
                <p><strong style="color: ${textColor};">Postal Code:</strong> ${data.postal}</p>
                <p><strong style="color: ${textColor};">Latitude:</strong> ${data.latitude}</p>
                <p><strong style="color: ${textColor};">Longitude:</strong> ${data.longitude}</p>
                <p><strong style="color: ${textColor};">Timezone:</strong> ${data.timezone}</p>
                <p><strong style="color: ${textColor};">ISP:</strong> ${data.org}</p>
                <p><strong style="color: ${textColor};">ASN:</strong> ${data.asn}</p>
                <p><strong style="color: ${textColor};">Organization:</strong> ${data.org}</p>
                <p><strong style="color: ${textColor};">Language:</strong> ${navigator.language}</p>
                <p><strong style="color: ${textColor};">Browser:</strong> ${navigator.userAgent}</p>
                <p><strong style="color: ${textColor};">Platform:</strong> ${navigator.platform}</p>
                <p><strong style="color: ${textColor};">Screen Resolution:</strong> ${window.screen.width}x${window.screen.height}</p>
                <p><strong style="color: ${textColor};">Color Depth:</strong> ${window.screen.colorDepth}-bit</p>
                <p><strong style="color: ${textColor};">Cookie Enabled:</strong> ${navigator.cookieEnabled ? 'Yes' : 'No'}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
});
