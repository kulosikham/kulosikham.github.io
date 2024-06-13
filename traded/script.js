document.getElementById('predictForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const commodity = document.getElementById('commodity').value;
    const initialPrice = parseFloat(document.getElementById('initialPrice').value);
    const days = parseInt(document.getElementById('days').value);
    const resultDiv = document.getElementById('result');
    const resultTableBody = document.getElementById('resultTableBody');

    // Reset result table
    resultTableBody.innerHTML = '';

    let currentPrice = initialPrice;

    for (let day = 1; day <= days; day++) {
        // Simulate price change (here we use a random fluctuation for demonstration)
        const priceChange = (Math.random() - 0.5) * 10; // Random change between -5 and +5
        currentPrice += priceChange;
        currentPrice = Math.max(currentPrice, 0); // Price cannot be negative

        const row = document.createElement('tr');
        const dayCell = document.createElement('td');
        const priceCell = document.createElement('td');

        dayCell.textContent = day;
        priceCell.textContent = currentPrice.toFixed(2);

        row.appendChild(dayCell);
        row.appendChild(priceCell);
        resultTableBody.appendChild(row);
    }

    resultDiv.classList.remove('hidden');
});
