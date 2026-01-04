import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "London",
        feelsLike: 23.63,
        humidity: 36,
        temp: 24.21,
        tempMax: 24.21,
        tempMin: 24.21,
        weather: "clear sky"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{
            textAlign: "center"
        }}>
            <h2>Weather App by Sahil</h2>
            <SearchBox updateInfo={updateInfo} />
            <br />
            <InfoBox info={weatherInfo} />
        </div >
    )
}