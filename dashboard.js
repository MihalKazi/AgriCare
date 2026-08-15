// Live sensor dashboard on index.html — simulated data

function generateReading() {
    return {
        temperature: (20 + Math.random() * 15).toFixed(1),
        humidity: (40 + Math.random() * 40).toFixed(1),
        soil_moisture: Math.round(30 + Math.random() * 50)
    };
}

function updateDashboard() {
    const reading = generateReading();

    if (document.getElementById('temp-display')) {
        document.getElementById('temp-display').innerText = reading.temperature;
        document.getElementById('hum-display').innerText = reading.humidity;
        document.getElementById('soil-display').innerText = reading.soil_moisture;
    }
}

setInterval(updateDashboard, 2000);
updateDashboard();

function sendMessage() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    const responseText = document.getElementById('form-response');

    if (name === "" || email === "" || message === "") {
        responseText.className = "error";
        responseText.innerText = "Please fill in all fields.";
        return;
    }

    responseText.className = "success";
    responseText.innerText = "✅ Thanks for reaching out, we'll get back to you soon!";
    document.getElementById('contact-name').value = "";
    document.getElementById('contact-email').value = "";
    document.getElementById('contact-message').value = "";
}
