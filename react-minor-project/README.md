## Weather App (React + Vite)

Single-page weather lookup built with React, Vite, and Material UI. Users can search any city and see current conditions from the OpenWeather API.

### Features

- City search with instant API fetch via OpenWeather
- Weather summary card (temp, min/max, feels-like, humidity, description)
- Dynamic background and icon cues for hot, cold, or rainy conditions
- Default view seeded with London so the UI is never empty

### Tech Stack

- React 19 + Vite
- Material UI (MUI) components and icons
- OpenWeather Current Weather Data API

### Getting Started

1. Install dependencies

```
npm install
```

2. Run the dev server

```
npm run dev
```

3. Open the printed local URL (usually http://localhost:5173).

### API Key

The app calls https://api.openweathermap.org/data/2.5/weather and currently reads the API key from the API_KEY constant inside src/SearchBox.jsx. For safer use:

- Create a .env file and set VITE_OPENWEATHER_KEY=<your-key>.
- Update src/SearchBox.jsx to read import.meta.env.VITE_OPENWEATHER_KEY instead of the hardcoded key before committing publicly.

### Project Structure (high level)

- src/App.jsx – mounts the weather experience
- src/WeatherApp.jsx – top-level state and layout
- src/SearchBox.jsx – city input and fetch logic
- src/InfoBox.jsx – weather details card with conditional imagery/icons
- src/\*.css – component styling

### How It Works

1. User enters a city and submits the form in SearchBox.
2. The app fetches current conditions from OpenWeather (metric units).
3. WeatherApp lifts the data into state and passes it to InfoBox.
4. InfoBox renders the card with values and a hot/cold/rain visual.

### Scripts

- npm run dev – start Vite dev server
- npm run build – production build
- npm run preview – preview the production build
- npm run lint – run ESLint

### Notes

- Network errors or invalid city names show a simple inline error.
- The UI uses Material UI defaults; feel free to theme it further.
