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
  private baseURL = process.env.API_BASE_URL;
  private apiKey = process.env.OPENWEATHER_API_KEY;

  private async fetchLocationData(city: string): Promise<Coordinates> {
    const response = await fetch(
      `${this.baseURL}/weather?q=${city}&appid=${this.apiKey}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }
    const data = await response.json();
    return { lat: data.coord.lat, lon: data.coord.lon };
  }

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

    const data = await response.json();
    const current = await this.fetchCurrentWeatherData(coordinates);
    const forecast = this.buildForecastArray(data);

    return { current, forecast };
  }

  private async fetchCurrentWeatherData(coordinates: Coordinates): Promise<Weather> {
    const { lat, lon } = coordinates;

    const response = await fetch(
      `${this.baseURL}/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${this.apiKey}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch current weather data');
    }
    const data = await response.json();

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

  private buildForecastArray(data: any): Weather[] {
    return data.list
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
  }

  async getWeatherForCity(city: string): Promise<{ current: Weather; forecast: Weather[] }> {
    const coordinates = await this.fetchLocationData(city);
    return await this.fetchWeatherData(coordinates);
  }
}

export default new WeatherService();