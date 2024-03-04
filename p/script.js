// Menyaring produk saat pengguna mengetik di kotak pencarian
document.getElementById('searchInput').addEventListener('input', function() {
    var input = this.value.toLowerCase(); // Mengonversi input menjadi lowercase
    var productList = document.getElementById('productList').getElementsByClassName('produk-box');

    for (var i = 0; i < productList.length; i++) {
        var productName = productList[i].getElementsByTagName('h3')[0].innerText.toLowerCase(); // Mengambil nama produk dan mengonversi menjadi lowercase
        if (productName.indexOf(input) > -1) {
            productList[i].style.display = ''; // Menampilkan produk jika nama sesuai
        } else {
            productList[i].style.display = 'none'; // Menyembunyikan produk jika nama tidak sesuai
        }
    }
});
