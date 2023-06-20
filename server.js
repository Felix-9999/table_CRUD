const express = require('express');
const next = require('next');
const cors = require('cors');
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Set up database connection
async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

app.prepare().then(() => {
  const server = express();

  // Enable CORS
  server.use(cors());

  // Connect to MongoDB
  connectMongo();

  // Handle all Next.js requests
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen((err) => {
    if (err) throw err;
    console.log(`> Ready on ${process.env.VERCEL_URL}`);
  });
});
