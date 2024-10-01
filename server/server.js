const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors package
const app = express();
const PORT = process.env.PORT || 4000;

// Use CORS middleware
app.use(cors({
    origin: 'https://map-application-frontend.vercel.app', // Replace with your frontend URL
}));

app.get('/route', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'route.json'));
});

app.use(express.static(path.join(__dirname, '..', 'client')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
