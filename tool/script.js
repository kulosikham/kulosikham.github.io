document.getElementById('removeBackgroundBtn').addEventListener('click', function() {
    const input = document.getElementById('inputImage');
    const output = document.getElementById('outputImage');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            output.src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
});
