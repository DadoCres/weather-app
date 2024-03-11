import React from "react";

const Weather = ({WeatherData}) => {
    //console.log(WeatherData.name);
    
    return (
        <div>
            <div>{WeatherData.name}</div>
        </div>
    );
}

export default Weather;