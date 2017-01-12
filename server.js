/**
 * Module dependencies.
 */
const app = require('./src/app');

/**
 * Get port from environment and store in Express.
 */
const PORT = process.env.PORT || '5000';

app.listen(PORT);

// Log the server status to the console
console.log(`Server running at ${PORT}`);
