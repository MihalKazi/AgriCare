// ==========================================
// 1. LOGIN MODAL LOGIC
// ==========================================
var modal = document.getElementById("login-modal");
var loginBtn = document.getElementById("login-btn");
var closeModal = document.getElementById("close-modal");

// Check if elements exist before adding listeners (prevents errors on other pages)
if(loginBtn) {
    loginBtn.onclick = function() { modal.style.display = "block"; }
    closeModal.onclick = function() { modal.style.display = "none"; }
    window.onclick = function(event) { 
        if (event.target == modal) { modal.style.display = "none"; }
    }
}

// ==========================================
// 2. LIVE DASHBOARD & CHART LOGIC
// ==========================================

let myChart = null; // Variable to store the chart

function updateDashboard() {
    // PART A: Update the Number Cards
    fetch('read.php')
        .then(response => response.json())
        .then(data => {
            if (data) {
                if(document.getElementById('temp-display')) 
                    document.getElementById('temp-display').innerText = data.temperature;
                
                if(document.getElementById('hum-display')) 
                    document.getElementById('hum-display').innerText = data.humidity;
                
                if(document.getElementById('soil-display')) 
                    document.getElementById('soil-display').innerText = data.soil_moisture;
            }
        })
        .catch(err => console.log("Waiting for data..."));

    // PART B: Update the Graph
    // Only run this if the chart canvas exists on this page
    if(document.getElementById('sensorChart')) {
        fetch('get_sensor_history.php')
            .then(response => response.json())
            .then(historyData => {
                updateChart(historyData);
            });
    }
}

function updateChart(data) {
    const ctx = document.getElementById('sensorChart').getContext('2d');
    
    // Extract data for the graph
    // We split the time to just show HH:MM:SS
    const labels = data.map(item => item.reading_time.split(" ")[1]); 
    const temps = data.map(item => item.temperature);
    const hums = data.map(item => item.humidity);

    // If a chart already exists, destroy it so we can draw the new one cleanly
    if (myChart) {
        myChart.destroy();
    }

    // Draw the new chart
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: temps,
                    borderColor: '#e74c3c', // Red Color
                    backgroundColor: 'rgba(231, 76, 60, 0.2)',
                    borderWidth: 3,
                    tension: 0.3, // Makes lines smooth/curvy
                    fill: true
                },
                {
                    label: 'Humidity (%)',
                    data: hums,
                    borderColor: '#3498db', // Blue Color
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            animation: false, // Turn off animation so it doesn't "bounce" every 2 seconds
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Run the update every 2000 milliseconds (2 seconds)
setInterval(updateDashboard, 2000);

// Run it once immediately so we don't wait 2 seconds for the first load
updateDashboard();