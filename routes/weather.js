const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/weather/:city', async (req, res, next) => {
  const city = req.params.city;
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
