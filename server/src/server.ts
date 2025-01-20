import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// ES module replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the client dist folder
const clientDistPath = path.resolve(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Fallback route to serve index.html for client-side routing
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

console.log('API_BASE_URL:', process.env.API_BASE_URL);
console.log('OPENWEATHER_API_KEY:', process.env.OPENWEATHER_API_KEY);