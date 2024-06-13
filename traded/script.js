document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('tradingChart').getContext('2d');

    // Example data
    const data = [
        { t: '2024-06-01', o: 100, h: 110, l: 90, c: 105 },
        { t: '2024-06-02', o: 105, h: 115, l: 95, c: 110 },
        { t: '2024-06-03', o: 110, h: 120, l: 100, c: 115 },
        { t: '2024-06-04', o: 115, h: 125, l: 105, c: 120 },
        { t: '2024-06-05', o: 120, h: 130, l: 110, c: 125 },
    ];

    // Convert data format
    const formattedData = data.map(item => ({
        x: new Date(item.t),
        o: item.o,
        h: item.h,
        l: item.l,
        c: item.c
    }));

    const tradingChart = new Chart(ctx, {
        type: 'candlestick',
        data: {
            datasets: [{
                label: 'Stock Prices',
                data: formattedData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)'
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                },
                y: {
                    beginAtZero: false
                }
            }
        }
    });
});
