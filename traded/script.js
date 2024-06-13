document.getElementById('generateButton').addEventListener('click', generateSimulation);

function generateSimulation() {
    // Generate random buy and sell prices
    let buyPrice = (Math.random() * (100 - 50) + 50).toFixed(2); // Random price between 50 and 100
    let sellPrice = (Math.random() * (150 - 100) + 100).toFixed(2); // Random price between 100 and 150

    // Calculate profit
    let profit = (sellPrice - buyPrice).toFixed(2);

    // Calculate percentage for the progress bar
    let total = parseFloat(buyPrice) + parseFloat(sellPrice);
    let buyPercentage = (parseFloat(buyPrice) / total) * 100;
    let sellPercentage = (parseFloat(sellPrice) / total) * 100;

    // Display the results
    document.getElementById('buyPrice').textContent = buyPrice;
    document.getElementById('sellPrice').textContent = sellPrice;
    document.getElementById('profit').textContent = profit;

    // Update progress bar
    document.getElementById('buyBar').style.width = buyPercentage + '%';
    document.getElementById('sellBar').style.width = sellPercentage + '%';
}
