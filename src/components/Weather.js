import React from "react";

const Weather = ({WeatherData}) => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const today = new Date();
    const currentDate = today.getDate() + '/' + months[today.getMonth()] + '/' + today.getFullYear();
    const temp = Math.round(WeatherData.main.temp-273.15);
    const hum = WeatherData.main.humidity;
    const desc = WeatherData.weather[0].main;
    console.log(WeatherData);
    
    return (
        <div>
            <div>{WeatherData.name}</div>
            <div>{currentDate}</div>
            <div>{temp} °C</div>
            <div>{hum} %</div>
            <div>{desc}</div>
        </div>
    );
}

export default Weather;