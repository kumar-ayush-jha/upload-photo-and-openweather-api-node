# 🚀 Express Advanced App

An advanced Node.js + Express.js application with:

- ✅ File Upload using Multer
- 🌐 Weather API Integration (OpenWeatherMap)
- 🛡️ Centralized Error Handling
- 🔐 Environment Variable Support using dotenv

---

## 📁 Project Structure

```
express-advanced-app/
├── middleware/
│   ├── errorHandler.js      # Handles app-wide errors
│   └── upload.js            # Configures file upload with multer
├── routes/
│   └── weather.js           # Route to get weather info using OpenWeatherMap
├── uploads/                 # Stores uploaded files
├── .env                     # Holds environment secrets (API key, port, etc.)
├── .gitignore
├── index.js                 # Main server entry point
└── package.json
```

---

## 🔧 Setup Instructions

### 1. Clone the repo

```bash
git clone 
cd express-advanced-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```
PORT=3000
WEATHER_API_KEY=your_openweathermap_api_key
```

> Get your API key from [OpenWeatherMap](https://openweathermap.org/api)

### 4. Run the server

```bash
node index.js
# or if you added a script:
npm start
```

---

## 📤 File Upload API

**POST** `/upload`

- Upload a single file using key name `file` (e.g., via Postman or frontend form)
- ✅ Saves file in `uploads/` folder
- ✅ Returns JSON with file info

---

## 🌤️ Weather API

**GET** `/api/weather/:city`

- Returns weather info for a city from OpenWeatherMap.

**Example:**

```bash
GET http://localhost:3000/api/weather/jalandhar
```

**Response:**

```json
{
  "name": "Delhi",
  "main": {
    "temp": 34.6,
    "humidity": 56
    // ...
  }
}
```

---

## ⚠️ Error Handling

All errors (e.g. invalid routes, API failures) are caught and returned in a friendly JSON format:

```json
{
  "success": false,
  "message": "Not Found"
}
```

---

## 🧪 Test Tips

- Use Postman for testing routes like `/upload` and `/api/weather/:city`
- Make sure `.env` is correctly set and server is restarted

