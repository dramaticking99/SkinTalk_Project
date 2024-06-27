const app = require('./app');
const db = require('./config/db');
const port = process.env.PORT || 5500; // Use the PORT environment variable if set, or default to 3000



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
