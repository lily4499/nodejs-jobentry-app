const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for specific pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/category', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'category.html'));
});

app.get('/job-list', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'job-list.html'));
});

app.get('/job-detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'job-detail.html'));
});

app.get('/testimonial', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'testimonial.html'));
});

// Route to handle all other requests (404)
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
