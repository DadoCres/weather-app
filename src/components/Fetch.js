import React, { useEffect } from "react";
import axios, { Axios } from "axios";
import Weather from "./Weather";
import Search from "./Search";
import { Button } from "semantic-ui-react";

const Fetch = () => {

    const [lat, setLat] = React.useState();
    const [long, setLong] = React.useState();
    const [data, setData] = React.useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            //console.log(position.coords.latitude, position.coords.longitude);
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
        
        axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params: {
            lat: lat,
            lon: long,
            appid: process.env.REACT_APP_API_KEY
        }
        })
        .then(response => {
            setData(response.data);
            //console.log(response.data.main);
        })
        .catch(error => console.error(error));
    }, [lat, long]);

    const refresh = () => {
        window.location.reload();
    }

    return (
        <div>
            {(typeof data != 'undefined') ? (
                    <Weather WeatherData={data}></Weather>
                ) : (
                    <div></div>
                )}
        </div>
    );
}

export default Fetch;