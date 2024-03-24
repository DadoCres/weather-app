import React from "react";
import '../styles.css';
import axios from "axios";
import Weather from "./Weather";

const Search = ({placeholder}) => {
    const [city, setCity] = React.useState();
    const [data, setData] = React.useState();

    const search = () => {
        axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: process.env.REACT_APP_API_KEY
            }
        })
        .then(response => {
            setData(response);
            console.group(response.data)
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder={placeholder} onChange={e => setCity(e.target.value)}></input>
                <button className="search-button" onClick={search}>
                    <img className="search-img" src="../search.png" width={30} height={30}></img>
                </button>
            </div>
            {(typeof data != 'undefined') ? (
                <Weather WeatherData={data.data}></Weather>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default Search;