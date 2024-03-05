// JavaScript code to handle product search
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.form-control');
    const products = document.querySelectorAll('.produk-box');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        products.forEach(function (product) {
            const productName = product.querySelector('p:first-child').textContent.toLowerCase();

            if (productName.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
