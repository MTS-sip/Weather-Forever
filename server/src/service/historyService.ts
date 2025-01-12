import fs from 'fs/promises';
import path from 'path';

// Define a City class
class City {
  constructor(public id: string, public name: string) {}
}

class HistoryService {
  private filePath = path.resolve(__dirname, '../data/searchHistory.json');

  // Read from the searchHistory.json file
  private async read(): Promise<City[]> {
    try {
      const data = await fs.readFile(this.filePath, 'utf8');
      return JSON.parse(data) as City[];
    } catch {
      return [];
    }
  }

  // Write the updated cities array to the searchHistory.json file
  private async write(cities: City[]): Promise<void> {
    await fs.writeFile(this.filePath, JSON.stringify(cities, null, 2));
  }

  // Get cities from the searchHistory.json file
  async getCities(): Promise<City[]> {
    return await this.read();
  }

  // Add a city to the searchHistory.json file
  async addCity(cityName: string): Promise<void> {
    const cities = await this.read();
    const newCity = new City(new Date().toISOString(), cityName);
    cities.push(newCity);
    await this.write(cities);
  }

  // Remove a city from the searchHistory.json file
  async deleteCity(cityId: string): Promise<void> {
    const cities = await this.read();
    const updatedCities = cities.filter(city => city.id !== cityId);
    await this.write(updatedCities);
  }
}

export default new HistoryService();
