const express = require('express');
const app = express();
const port = 3000;
const apiRoutes = require('./routes/api');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// API routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
