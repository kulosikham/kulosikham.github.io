document.addEventListener('DOMContentLoaded', () => {
  // Add your JavaScript code here
  const searchButton = document.querySelector('button');
  searchButton.addEventListener('click', () => {
    const searchText = document.querySelector('input[type="text"]').value;
    alert(`Anda mencari: ${searchText}`);
  });
});
