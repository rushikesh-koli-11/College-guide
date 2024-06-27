const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'public'
app.use(express.static('public'));

// Handle API requests
app.use('/api', require('./routes/api'));

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
