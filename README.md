# Weather Forever

## Links 🔴 Deployed App at live URL, and GitHub Repository 🔴

Web Service Host[Render] https://render-deploy-yo2x.onrender.com
Repo, public @ [GitHub](git@github.com:MTS-sip/Weather-Forever.git)

## Description

Application allows user to retrieve current weather data for cities around the globe, which includes a five day forecast. Stores search history for recall, and provides user with ability to delete individual searched cities.

## Table of Contents

- [Usage](#usage--testing)
- [Images](#images)
- [License](#license)
- [Technology](#technology)
- [Contributing](#contributing)
- [Story](#user-story)
- [README](#readme)

## Usage & Testing

Functionality of deployed URL can be tested @ [Render](https://render-deploy-yo2x.onrender.com)

Application code used for deployment: [MTS GitHub Repo](https://github.com/MTS-sip/Weather-Forever)

Run `npm install`,
`npm start`

## Images

[URL Mock up 1](./assets/weather-forever1.jpeg)
![URL Mock up 2](./assets/weather-forever2.jpeg)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT)  
![License Badge](https://img.shields.io/badge/LICENSE-MIT-yellow)

## Technology

Key technologies used for development:

- VS Code [VSC](https://code.visualstudio.com/)
- Render [Render](https://render.com/)
- GitHub [Github](https://github.com/)
- Vite [Vite]https://vite.dev/
- npm [npm](https://www.npmjs.com/)
- CoPilot [CoPilot for GitHub:](https://github.com/features/copilot)

## Contributing

[MTS-Sip](https://github.com/MTS-sip)
Development/Starter Code, Bootcamp

Note: BCS Tutoring transfer of knowledge concerning Render's Python vs Node settings; and package.json `render-build` possible loops (delete ). Missing characters, specifically 'api/2.5' in weatherService.ts at line 54, and argument inversion (!response.ok) to (response.ok) line 58

## User Story

- AS A traveler
- I WANT to see the weather outlook for multiple cities
- SO THAT I can plan a trip accordingly

## Acceptance Criteria

- GIVEN a weather dashboard with form inputs

- WHEN I search for a city
  THEN I am presented with current and future conditions for that city, and that city is added to the search history

- WHEN I view current weather conditions for that city
  THEN I am presented with the city name, the date, an icon representation of weather conditions, a description of the weather for the icon's alt tag, the temperature, the humidity, and the wind speed

- WHEN I view future weather conditions for that city
  THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

- WHEN I click on a city in the search history
  THEN I am again presented with current and future conditions for that city

- WHEN I click on the trash can icon next to a city in the search history
  THEN the city is removed from the search history

## README

[README link for this App](https://github.com/MTS-sip/Weather-Forever/blob/main/README.md)
