import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface City {
  id: string;
  name: string;
}

class HistoryService {
  private filePath = path.resolve(__dirname, '../data/searchHistory.json');

  private async read(): Promise<City[]> {
    try {
      const data = await fs.readFile(this.filePath, 'utf8');
      return JSON.parse(data) as City[];
    } catch (error) {
      console.error('Error reading searchHistory.json:', error);
      return [];
    }
  }
  
  private async write(cities: City[]): Promise<void> {
    try {
      await fs.writeFile(this.filePath, JSON.stringify(cities, null, 2));
    } catch (error) {
      console.error('Error writing to searchHistory.json:', error);
    }
  }

  async getCities(): Promise<City[]> {
    return await this.read();
  }

  async addCity(cityName: string): Promise<void> {
    const cities = await this.read();
    const newCity: City = { id: new Date().toISOString(), name: cityName };
    cities.push(newCity);
    await this.write(cities);
  }

  async deleteCity(cityId: string): Promise<void> {
    const cities = await this.read();
    const updatedCities = cities.filter((city) => city.id !== cityId);
    await this.write(updatedCities);
  }
}

export default new HistoryService();
