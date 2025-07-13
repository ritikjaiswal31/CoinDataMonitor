# Coin Data Monitor

## 🪙 Coin Data Monitor - Digital Coin Analytics Console

#### A visually stunning and feature-rich Digital Coin Data Monitor built with **React (React.js & Chart.js)**, **Material UI**, and **CoinGecko API**. Coin Data Monitor offers real-time coin data, powerful comparisons, elegant UI animations, and a fully modular architecture.

---

## 📖 Project Overview

**Coin Data Monitor** is a full-featured and responsive web application designed to provide:

- 💹 Real-time digital coins data
- 🔍 Search, filter, and compare coins
- 📊 Interactive price charts
- 🌙 Light & Dark mode toggle
- 📋 Watchlist functionality
- 🧠 Highly modular and well-structured codebase

---

## ✨ Features & Implementation 

![Screenshot (3)](https://github.com/user-attachments/assets/29e120fa-91c7-4e55-967b-351a78a86fd2)

![Screenshot (4)](https://github.com/user-attachments/assets/13381cf9-7c62-4fda-b0d8-5f462161b06c)

![Screenshot (6)](https://github.com/user-attachments/assets/41dfc3e9-bded-4055-9c23-af9ae6fb94aa)

![Screenshot (8)](https://github.com/user-attachments/assets/c69a2c55-4697-4b21-951c-111137a8e824)

![Screenshot (9)](https://github.com/user-attachments/assets/aa2313a6-8698-42c4-8f18-b6c3073f21ac)

![Screenshot (10)](https://github.com/user-attachments/assets/2679e2ac-2176-4e24-9ac1-c748e7bcf952)

![Screenshot (12)](https://github.com/user-attachments/assets/a58e5905-5820-4669-b554-6f402a1250e9)

![Screenshot (13)](https://github.com/user-attachments/assets/0f23687d-2464-45f1-b0c1-dcce32f741b3)

![Screenshot (15)](https://github.com/user-attachments/assets/6280f04c-bdd9-4bc5-87d5-41ac3663fb42)

![Screenshot (16)](https://github.com/user-attachments/assets/a294e725-c5de-4344-a007-b77b2bd3abfc)

☁️ Deploying to AWS S3
Follow these steps to deploy the CoinDataMonitor project on AWS S3:

Generate an optimized production build: npm run build

![Screenshot 2025-04-18 190140](https://github.com/user-attachments/assets/787de26f-04ff-41a6-a363-4d1a9372536c)

![Screenshot 2025-04-18 190214](https://github.com/user-attachments/assets/fb10f078-4105-46af-9181-bd16c3624b5d)

![Screenshot 2025-04-18 190234](https://github.com/user-attachments/assets/e85f095a-afc7-4a77-aeea-d7dae91675f9)

![Screenshot 2025-04-18 190250](https://github.com/user-attachments/assets/5659a64b-dfbc-401a-b937-5a4e12df7199)

![Screenshot 2025-04-18 190307](https://github.com/user-attachments/assets/1df0458b-f3a7-4def-89d3-2b5ad16f4572)

### 🛠 Initial Setup

- ✅ **Root CSS Variables** and **Google Fonts**
- ✅ **Custom Scrollbar** and **Text Selection Styling**
- ✅ Image dragging disabled for UX polish
- ✅ Clean folder structure & modular component organization

---

### 🖥 Landing Page

- 🧭 **Header**: Implemented with MUI `Drawer`
- ✨ **Text Stroke Hover Animation**
- 🎬 **Framer Motion**: Smooth animations for phone mockup and intro text

---

### 📊 Dashboard Page

- 📁 **MUI Tabs**: Custom-themed for section switching
- 🔁 **CoinGecko API Integration** using `axios`
- 💰 `toLocaleString()` for comma formatting & `toFixed(2)` for decimal precision
- 🔢 Custom function to convert numbers to `K`, `M`, and `B`
- 🔍 **Search functionality** using `.filter()`
- 🕒 Animation delay added to `Grid` and `List` components
- 🔄 **Pagination** via MUI, slicing data per page number
- ⬆️ Scroll-to-top function for smoother navigation

---

### 🪙 Coin Page (Detailed View)

- 🆔 Used `useParams` from React Router to fetch dynamic `coinId`
- 🔗 Coin-specific data and price history for selected days
- 📈 **Chart.js** (via `react-chartjs-2`) for dynamic graphs
- 🗓 Custom function to generate date arrays for selected days
- 🧩 **MUI Select** for day range selection
- 🔘 Toggle buttons to switch between price, market cap, and volume
- 📜 `dangerouslySetInnerHTML` used to render HTML descriptions
- ⏳ Reusable **Loading Component** to handle async states
- 🎨 Custom-styled MUI components + "Read More / Read Less" logic

---

### ⚖️ Compare Page

- 📊 Dual charts with **2 Y-axes** and **2 datasets**
- 📌 Select 2 coins using MUI Select (100+ options)
- 🚫 Prevent selection of same coin in both dropdowns

---

### 🌗 Light & Dark Mode

- 🌈 Handled using `data-theme` attribute + `localStorage`
- 🪄 Dynamically update root CSS variables on theme switch

---

### ⭐ Watchlist Page

- 📥 Add and remove coins via `localStorage`
- ♻️ `useEffect()` to persist and update watchlist state

---

### 🧩 Other Cool Features

- 📤 Native sharing with `RWebShare` package
- 🖱️ **Custom Mouse Cursor** using dual divs that follow with delay
- 🎨 MUI Icons and styling utilities
- ⚙️ SEO Optimization + Code Modularity
- 🧶 **Gradient Footer** with animated background
- 🛎 **React Toastify** used for notifications and user feedback

---

## 🧑‍💻 Tech Stack

- **Frontend:** React.js, Chart.js, Material UI, Framer Motion
- **API:** [CoinGecko Public API](https://www.coingecko.com/en/api)
- **State Management:** React Hooks (`useState`, `useEffect`, `useParams`)

---

🛠️ Local Development Setup

1. Clone the Repository
git clone https://github.com/ritikjaiswal31/CoinDataMonitor.git
cd CoinDataMonitor

2. Install Dependencies
npm install

4. Run the Application
npm start

Then open your browser and navigate to:
http://localhost:3000
