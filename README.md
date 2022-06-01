<div align="center">

[![Svelte badge](https://img.shields.io/badge/Svelte-3.44.0-orange)](https://svelte.dev/)
[![SvelteKit badge](https://img.shields.io/badge/SvelteKit-1.0.0--next.347-orange)](https://kit.svelte.dev/)
[![TailwindCSS badge](https://img.shields.io/badge/TailwindCSS-3.0.23-blue)](https://tailwindcss.com/)
[![Leaflet badge](https://img.shields.io/badge/Leaflet-1.8.0-green)](https://leafletjs.com/)
[![TypeScript badge](https://img.shields.io/badge/TypeScript-4.6.2-blue)](https://www.typescriptlang.org/)
[![Playwright badge](https://img.shields.io/badge/Playwright-1.21.0-green)](https://playwright.dev/)
[![Vercel badge](https://vercelbadge.vercel.app/api/carlosivanchuk/weather-app)](https://rapidapi-weather.vercel.app/)

</div>

# RapidAPI Weather

Weather App submission for the [MiduDev's](https://twitch.tv/midudev) RapidAPI Hackaton. The weather data is retrieved from [RapidAPI](https://rapidapi.com/) using the [WeatherAPI's](https://rapidapi.com/weatherapi/api/weatherapi-com/) `current`, `forecast` and `search/autocomplete` APIs.

## 🦾 Technologies

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Leaflet](https://leafletjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/)
- [Vercel](https://vercel.com/)
- [RapidAPI](https://rapidapi.com/weatherapi/api/weatherapi-com/)

## 🛠️ Features

- Responsive Design
- See current weather and forecast in your city
- Get current weather and forecast of any city
- See a map with temperature near your location

## 🚀 Installation

Download the repository, open the folder and install the dependencies:

```bash
git clone https://github.com/CarlosIvanchuk/weather-app.git
cd weather-app
npm install # or pnpm install
```

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev --open
```

_📢 If you're using [Visual Studio Code](https://code.visualstudio.com/), install the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)._

## ⚙️ Environment Variables

Create an `.env` file in the root project directory based on the `.env.example` file and provide the following values:

```bash
VITE_RAPIDAPI_HOST=
VITE_RAPIDAPI_KEY=
```

_📢 You can get your keys on [RapidApi](https://rapidapi.com/weatherapi/api/weatherapi-com/)_

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
<br />
Feel free to check the [issues page](https://github.com/CarlosIvanchuk/weather-app/issues).

## ✨ Credits

This app was inspired by the design of [Hakim Haiman](https://dribbble.com/mochamadhakim). You can find the design on [dribbble](https://dribbble.com/shots/18070219-Cuacane-Dashboard)

The favicon is a slightly modified version from [Weather Icons 1.1](https://www.figma.com/community/file/989070144782895608) on Figma by Samrat Chowdhury

The scenic illustrations are by [Pixel True](https://www.pixeltrue.com/scenic-illustrations)

The Weather Icon Pack is by [Kmg Design](https://www.iconfinder.com/iconsets/weather-blue-filled-line)

## License

MIT
