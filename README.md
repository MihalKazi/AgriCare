# 🌱 AgriCare: Smart Agriculture Management System

![AgriCare Banner](https://via.placeholder.com/1000x300?text=AgriCare+Smart+Farming+System)
<div align="center">

  **A Full-Stack IoT-Based Solution for Modern Farming**

  ![PHP](https://img.shields.io/badge/Backend-PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
  ![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
  ![Python](https://img.shields.io/badge/Simulator-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/Frontend-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![Chart.js](https://img.shields.io/badge/Viz-Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

  [Features](#-key-features) • [Installation](#-installation-guide) • [Usage](#-how-to-run) • [Screenshots](#-screenshots)

</div>

---

## 📖 About The Project

**AgriCare** is a web-based agricultural management platform designed to bridge the gap between traditional farming and modern technology. It empowers farmers with real-time data visualization, financial planning tools, and a direct-to-consumer marketplace.

This project demonstrates a complete **IoT-to-Web pipeline**, simulating sensor nodes (using Python) that feed data into a central server (PHP/MySQL) for real-time monitoring.

## 🚀 Key Features

### 📡 1. Real-Time IoT Dashboard
* **Live Monitoring:** Tracks Temperature, Humidity, and Soil Moisture.
* **Visual Analytics:** Interactive line graphs using **Chart.js** showing trends over time.
* **Auto-Update:** Dashboard refreshes automatically every 2 seconds without page reload.

### 💰 2. Crop Budget Calculator
* **Financial Planning:** Calculate production costs (Seeds, Fertilizer, Labor) vs. Expected Revenue.
* **Profit/Loss Analysis:** Instant calculation of profit per acre.
* **History Log:** Saves all calculations to the database for future reference.

### 🌤️ 3. Smart Weather System
* **Live API Integration:** Fetches real-time weather data using **OpenWeatherMap API**.
* **Search Functionality:** Check weather conditions for any city globally to plan irrigation.

### 🛒 4. Digital Marketplace
* **Live Price Ticker:** Simulated stock-market style ticker for crop prices.
* **Farmer Exchange:** Farmers can post crops for sale; buyers can view listings in real-time.

---

## 🛠️ Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript | Responsive UI & Live Dashboard Logic |
| **Backend** | PHP (Native) | REST API endpoints & Data Processing |
| **Database** | MySQL | Stores sensor history, budgets, and listings |
| **IoT Sim** | Python (`requests` lib) | Simulates hardware sending sensor data |
| **Visualization**| Chart.js | Renders live dynamic graphs |
| **External API** | OpenWeatherMap | Real-time weather data |

---

## 📥 Installation Guide

Follow these steps to set up the project locally.

### Prerequisites
* **XAMPP** (or any PHP/MySQL Server)
* **Python 3.x** (for the simulator)

### Step 1: Clone the Repo
Navigate to your XAMPP `htdocs` folder and clone the project:
```bash
cd C:\xampp\htdocs\
git clone [https://github.com/MihalKazi/AgriCare.git](https://github.com/MihalKazi/AgriCare.git)
Step 2: Configure the Database
Open XAMPP Control Panel and start Apache and MySQL.

Go to http://localhost/phpmyadmin.

Create a new database named: agricare_db.

Click Import and upload the database.sql file located in this repository.

Step 3: Install Python Dependencies
Open your terminal and install the requests library:

Bash

pip install requests
🖥️ How to Run
1. Start the Server
Ensure Apache and MySQL are running in XAMPP.

2. Start the IoT Simulator
Open a terminal in the project folder and run:

Bash

python simulator.py
You will see logs indicating data is being sent to the server every few seconds.

3. Open the Web App
Open your browser and visit: http://localhost/agricare/index.html

📸 Screenshots
1. Live IoT Dashboard
Real-time sensor readings and historical graph. (Add screenshot here)

2. Crop Calculator & History
Calculate profit margins and save records. (Add screenshot here)

3. Marketplace
Live price ticker and buying/selling platform. (Add screenshot here)

📂 Project Structure
Plaintext

/AgriCare
│
├── 📄 index.html            # Main Dashboard (IoT & Graphs)
├── 📄 crop-management.html  # Budget Calculator
├── 📄 weather-updates.html  # Weather API Page
├── 📄 market-insights.html  # Marketplace & Ticker
│
├── 📂 api/                  # Backend PHP Files
│   ├── db.php               # Database Connection
│   ├── insert.php           # IoT Data Ingestion
│   ├── read.php             # Dashboard Data Fetch
│   ├── get_sensor_history.php # Graph Data
│   └── reset_data.php       # System Reset Tool
│
├── 📄 simulator.py          # Python IoT Simulator
├── 📄 script.js             # Frontend Logic
├── 📄 style.css             # Global Styles
└── 📄 database.sql          # Database Structure
🤝 Contributing
Contributions are welcome! Please fork this repository and submit a pull request.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

<div align="center"> <p>Made with ❤️ by <b>Mihal Kazi</b></p> <p><i>Empowering Farmers with Technology</i></p> </div>
