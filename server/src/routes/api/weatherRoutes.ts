// ES module import statement that imports specific components from the express library
import { Router, Request, Response } from 'express';
import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

const router = Router();

// POST Request, city name, retrieves weather data from the OpenWeather API
router.post('/', async (req: Request, res: Response) => {
  const { cityName } = req.body;
  if (!cityName) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    const weatherData = await WeatherService.getWeatherForCity(cityName);
    await HistoryService.addCity(cityName);
    return res.json(weatherData);
  } catch (err) {
    console.error('Weather API error:', err);
    return res.status(500).json({ error: (err as Error).message || 'Error fetching weather data' });
  }
});

// Defines GET route, retrieves search history of the cities
router.get('/history', async (_req: Request, res: Response) => {
  try {
    const history = await HistoryService.getCities();
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving search history' });
  }
});

// Delete city from search history based on city ID
router.delete('/history/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
      await HistoryService.deleteCity(id);
      res.status(204).send();
  } catch (error) {
      res.status(500).json({ error: 'Error deleting city from history' });
  }
});

export default router;