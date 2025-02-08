# Weather Forever

## Links 🔴 Deployed App at live URL, and GitHub Repository 🔴

Render Web Service Host [Render](https://render-deploy-yo2x.onrender.com)

[Render Dashboard](https://dashboard.render.com/web/srv-cufcgk56l47c73fiaagg/deploys/dep-cujr41ij1k6c73d1ceng)

GitHub Repository [(GitHub Repository)](https://github.com/MTS-sip/Weather-Forever)

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

![URL Mock up image 1](/render-app/assets/Weather-Forever1.jpg)

![URL Mock up image 2](/render-app/assets/Weather-Forever2.jpg)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT)  
![License Badge](https://img.shields.io/badge/LICENSE-MIT-yellow)

## Technology

Key technologies used for development:

- VS Code: IDE [VSC](https://code.visualstudio.com/)
- Render: Cloud Application Platform [Render](https://render.com/)
- GitHub [Github](https://github.com/)
- Vite: Local Dev Server [Vite](https://vite.dev/)
- Typescript: JavaScript w/syntax for types [Typescript](https://www.typescriptlang.org/)
- NPM: Package manager for js [npm](https://www.npmjs.com/)
- CoPilot [CoPilot for GitHub:](https://github.com/features/copilot)
- HTML [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- CSS [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Contributing

[MTS-Sip](https://github.com/MTS-sip) Michael S.

Dev/Starter Code, Bootcamp

Note: BCS Tutoring transfer of knowledge concerning Render's Python vs Node settings; and package.json `render-build` possible loops (delete: '&& cd server && node dist/server.js' ). Missing characters, specifically '/data/2.5' in weatherService.ts at line 96, and argument inversion (!response.ok) to (response.ok) line 58

## User Story

- AS A traveler
  I WANT to see the weather outlook for multiple cities
  SO THAT I can plan a trip accordingly

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
