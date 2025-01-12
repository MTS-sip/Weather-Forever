import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the client dist folder
app.use(express.static(path.resolve(__dirname, '../../../client/dist')));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send({ error: 'Not Found' });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));