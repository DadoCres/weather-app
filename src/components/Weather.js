import React from "react";
import '../styles.css';
import { Button } from "semantic-ui-react";
import Search from "./Search";

const Weather = ({WeatherData}) => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const currentDate = days[today.getDay()] + ', ' + today.getDate() + '/' + months[today.getMonth()] + '/' + today.getFullYear();
    const temp = Math.round(WeatherData.main.temp-273.15);
    const hum = WeatherData.main.humidity;
    const desc = WeatherData.weather[0].main;
    
    return (
        <div>
            <div className="box">
                <p className="day">{currentDate}</p>
                <p className="day">{desc}</p>
            </div>
            
            <div className="box">
                <p className="temp">Temperature: {temp} °C</p>
                <p className="temp">Humidity: {hum} %</p>
            </div>
        </div>
    );
}

export default Weather;