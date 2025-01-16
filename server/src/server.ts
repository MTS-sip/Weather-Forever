import express from 'express';
import path from 'path';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the client dist folder
const clientDistPath = path.resolve(__dirname, '../../../client/dist');
app.use(express.static(clientDistPath));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Fallback to serve index.html for client-side routing
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

// Error handling middleware
app.use((_req, res) => {
  res.status(404).send({ error: 'Not Found' });
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));