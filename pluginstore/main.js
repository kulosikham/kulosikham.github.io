document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const productGrid = document.getElementById('productGrid');
  const products = document.querySelectorAll('.product-item');

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    products.forEach(product => {
      const productName = product.querySelector('h2').textContent.toLowerCase();
      if (productName.includes(query)) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  });

  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      searchButton.click();
    }
  });
});
