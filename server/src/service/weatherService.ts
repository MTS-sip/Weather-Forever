import fetch from 'node-fetch';

interface Coordinates {
  lat: number;
  lon: number;
}

interface Weather {
  city: string;
  date: string;
  icon: string;
  iconDescription: string;
  tempF: number;
  windSpeed: number;
  humidity: number;
}

class WeatherService {
  private baseURL = 'https://api.openweathermap.org/data/2.5';
  private apiKey = process.env.OPENWEATHER_API_KEY;

  // Fetch location data based on city name
  private async fetchLocationData(city: string): Promise<Coordinates> {
    const response = await fetch(
      `${this.baseURL}/weather?q=${city}&appid=${this.apiKey}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }

    const data = await response.json() as { coord: { lat: number; lon: number } };
    return {
      lat: data.coord.lat,
      lon: data.coord.lon,
    };
  }

  // Fetch weather data for a given coordinate
  private async fetchWeatherData(
    coordinates: Coordinates
  ): Promise<{ current: Weather; forecast: Weather[] }> {
    const { lat, lon } = coordinates;

    const response = await fetch(
      `${this.baseURL}/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${this.apiKey}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    /*const data = await response.json();
    const current = this.parseCurrentWeather(data);
    const forecast = this.buildForecastArray(data);
    */

const data = await response.json();
const current = await this.fetchCurrentWeatherData(coordinates);
const forecast = this.buildForecastArray(data);


    return { current, forecast };
  }

  // Parse current weather data
  private async fetchCurrentWeatherData(coordinates: Coordinates): Promise<Weather> {
    const { lat, lon } = coordinates;
    const response = await fetch(
        `${this.baseURL}/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${this.apiKey}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch current weather data');
    }
    const data: {
        name: string;
        dt: number;
        weather: { icon: string; description: string }[];
        main: { temp: number; humidity: number };
        wind: { speed: number };
    } = await response.json();
    return {
        city: data.name,
        date: new Date(data.dt * 1000).toLocaleDateString(),
        icon: data.weather[0].icon,
        iconDescription: data.weather[0].description,
        tempF: data.main.temp,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
    };
}


  // Build a 5-day forecast array
  private buildForecastArray(data: any): Weather[] {
    const forecast: Weather[] = data.list
      .filter((_: any, index: number) => index % 8 === 0)
      .map((entry: any) => ({
        city: data.city.name,
        date: new Date(entry.dt * 1000).toLocaleDateString(),
        icon: entry.weather[0].icon,
        iconDescription: entry.weather[0].description,
        tempF: entry.main.temp,
        windSpeed: entry.wind.speed,
        humidity: entry.main.humidity,
      }));

    return forecast;
  }

  // Public method to get weather data for a city
  async getWeatherForCity(city: string): Promise<{ current: Weather; forecast: Weather[] }> {
    const coordinates = await this.fetchLocationData(city);
    return await this.fetchWeatherData(coordinates);
  }
}

export default new WeatherService();
