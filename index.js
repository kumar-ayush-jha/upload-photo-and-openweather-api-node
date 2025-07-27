const express = require('express');
const dotenv = require('dotenv');
const upload = require('./middleware/upload');
const errorHandler = require('./middleware/errorHandler');
const weatherRoute = require('./routes/weather');
const path = require('path');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Static upload folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// File Upload Route
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.status(200).json({ message: 'File uploaded', file: req.file });
});

// API Route
app.use('/api', weatherRoute);

// 404 handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
