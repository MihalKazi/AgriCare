# 🌱 **AgriCare: Smart Agriculture Management System**

![AgriCare Banner](https://via.placeholder.com/1000x300?text=AgriCare+Smart+Farming+System)

<div align="center">

**A Full-Stack IoT-Based Solution for Modern Farming**

![PHP](https://img.shields.io/badge/Backend-PHP-777BB4?style=for-the-badge\&logo=php\&logoColor=white)
![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?style=for-the-badge\&logo=mysql\&logoColor=white)
![Python](https://img.shields.io/badge/Simulator-Python-3776AB?style=for-the-badge\&logo=python\&logoColor=white)
![JavaScript](https://img.shields.io/badge/Frontend-JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Chart.js](https://img.shields.io/badge/Viz-Chart.js-FF6384?style=for-the-badge\&logo=chartdotjs\&logoColor=white)

**[Features](#-key-features) • [Installation](#-installation-guide) • [Usage](#️-how-to-run) • [Screenshots](#-screenshots)**

</div>

---

## 📖 **About The Project**

**AgriCare** is a smart agricultural management platform that bridges traditional farming with technology. It offers real-time sensor monitoring, financial tools, and an online marketplace for farmers.

The project demonstrates a **complete IoT-to-Web pipeline**, where simulated sensor nodes (Python) send data to a **PHP/MySQL-backed server** for real-time analytics.

---

## 🚀 **Key Features**

### 📡 **1. Real-Time IoT Dashboard**

* Live Temperature, Humidity & Soil Moisture readings
* Trend visualization with **Chart.js**
* Auto-refresh every 2 seconds without page reload

### 💰 **2. Crop Budget Calculator**

* Calculates production cost vs expected revenue
* Profit/loss analysis per acre
* Saves history in the database

### 🌤️ **3. Smart Weather System**

* Real-time weather using **OpenWeatherMap API**
* City-wise search for irrigation planning

### 🛒 **4. Digital Marketplace**

* Stock-ticker style live crop price simulation
* Farmers can sell crops, buyers can view listings

---

## 🛠️ **Tech Stack**

| Component     | Technology            | Purpose              |
| ------------- | --------------------- | -------------------- |
| Frontend      | HTML, CSS, JavaScript | UI & Live Dashboard  |
| Backend       | PHP                   | REST APIs & Logic    |
| Database      | MySQL                 | Store data & records |
| IoT Simulator | Python (`requests`)   | Sends sensor data    |
| Visualization | Chart.js              | Dynamic graphs       |
| Weather API   | OpenWeatherMap        | Live climate data    |

---

## 📥 **Installation Guide**

### 📌 **Prerequisites**

* **XAMPP** (Apache + MySQL)
* **Python 3.x**

---

### 🔽 **Step 1: Clone the Repository**

Go to your `htdocs` directory and run:

```bash
cd C:\xampp\htdocs\
git clone https://github.com/MihalKazi/AgriCare.git
```

---

### 🗄️ **Step 2: Database Setup**

1. Start **Apache & MySQL** in XAMPP
2. Open: `http://localhost/phpmyadmin`
3. Create a database named: `agricare_db`
4. Import the file: **database.sql** from the project folder

---

### 🐍 **Step 3: Install Python Dependency**

```bash
pip install requests
```

---

## 🖥️ **How to Run**

### ▶️ **1. Start the Server**

Make sure **Apache & MySQL are running** in XAMPP.

### 📡 **2. Start the IoT Simulator**

```bash
python simulator.py
```

You’ll see logs showing sensor data being sent.

### 🌐 **3. Open the Web App**

Visit:

```
http://localhost/agricare/index.html
```

---

## 📸 **Screenshots**

> *Add your screenshots here.*

* 📊 **Live IoT Dashboard**
* 📈 **Crop Calculator & Records**
* 🛒 **Marketplace**

---

## 📂 **Project Structure**

```
/AgriCare
│
├── index.html                # Dashboard
├── crop-management.html      # Budget Calculator
├── weather-updates.html      # Weather Page
├── market-insights.html      # Marketplace
│
├── api/                      # PHP API Backend
│   ├── db.php
│   ├── insert.php            # Sensor Data
│   ├── read.php              # Dashboard Data
│   ├── get_sensor_history.php
│   └── reset_data.php
│
├── simulator.py              # Python IoT Simulator
├── script.js                 # Frontend Logic
├── style.css                 # UI Styles
└── database.sql              # Database File
```

---

## 🤝 **Contributing**

Contributions are welcome!

1. **Fork the Repo**
2. Create a Branch
   `git checkout -b feature/NewFeature`
3. Commit Changes
   `git commit -m "Added New Feature"`
4. Push
   `git push origin feature/NewFeature`
5. Submit a Pull Request 🎉

---

<div align="center">
<p>Made with ❤️ by <b>Mihal Kazi</b></p>
<p><i>Empowering Farmers with Technology</i></p>
</div>
