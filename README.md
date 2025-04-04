# 🗺️ Real-Time Location Map App

A fully frontend-only real-time map application built with **React** and **Leaflet.js**, allowing users to input source and destination locations, swap them, use their current location, and display a dynamic route with distance and estimated time.

## 🚀 Features

- 🔍 **Search Box**: For both source and destination inputs
- 🔄 **Swap Function**: Quickly switch between source and destination
- 📍 **Use Current Location**: Autofill your current location as the source
- 🧭 **Route Drawing**: Display a real-time route between points
- 📏 **Distance & Duration**: Shows distance and estimated time of travel
- 🧑‍💻 **No Backend Required**: Frontend only (hosted on Vercel)

---

## 💻 Tech Stack

- **React.js** (Frontend framework)
- **Leaflet.js** (Mapping library)
- **React-Leaflet** (React bindings for Leaflet)
- **Leaflet Routing Machine** (Routing paths between locations)
- **Bootstrap & CSS** (For styling)

---

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/realtime-map.git
cd realtime-map
2. Install dependencies
npm install
3. Run the development server
npm start
🌍 Hosting on Vercel
This project is already optimized for Vercel. To deploy:

Install Vercel CLI


npm install -g vercel
Deploy

vercel
For future updates

vercel --prod
📁 Folder Structure
pgsql

📦 realtime-map
├── 📁 public
├── 📁 src
│   ├── 📁 components
│   │   ├── LocationInputs.js
│   │   └── MapView.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md


🙌 Acknowledgements
React Leaflet

Leaflet Routing Machine

OpenStreetMap
