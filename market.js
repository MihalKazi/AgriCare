// market-insights.html — simulated live price ticker

const crops = [
    { name: "Wheat", base: 320 },
    { name: "Corn", base: 240 },
    { name: "Rice", base: 450 },
    { name: "Soybean", base: 500 },
    { name: "Potato", base: 180 }
];

function updateTicker() {
    const box = document.getElementById('ticker-box');
    box.innerHTML = "";

    crops.forEach(crop => {
        const change = Math.floor(Math.random() * 11) - 5;
        const currentPrice = crop.base + change;

        let icon = "➖";
        let style = "";

        if (change > 0) { icon = "⬆"; style = "up"; }
        if (change < 0) { icon = "⬇"; style = "down"; }

        box.innerHTML += `
            <div class="ticker-item">
                <span>${crop.name}</span>
                <span class="${style}">$${currentPrice} ${icon}</span>
            </div>
        `;
    });
}

setInterval(updateTicker, 3000);
updateTicker();
