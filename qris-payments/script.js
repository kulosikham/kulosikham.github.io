document.getElementById('paymentButton').addEventListener('click', function() {
    document.getElementById('loading').classList.remove('hidden');
    setTimeout(function() {
        window.location.href = "/";
    }, 3000); // 3 seconds
});
