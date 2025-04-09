const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/news', async (req, res) => {
  if (!process.env.NEWS_API_KEY) {
    console.error('NEWS_API_KEY is not set in environment');
    return res.status(500).json({
      error: 'API key not configured on server'
    });
  }

  try {
    const API_KEY = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=3&apiKey=${API_KEY}`; // pageSize is limited to 3 for this one.

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "ok") {
      console.log(`Successfully fetched ${data.articles.length} articles`);
      res.json(data.articles);
    } else {
      console.error("Error from News API:", data.message);
      res.status(500).json({
        error: 'News API error',
        message: data.message
      });
    }
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({
      error: 'Request error',
      message: error.message
    });
  }
});

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('API Key configured:', !!process.env.NEWS_API_KEY);
});