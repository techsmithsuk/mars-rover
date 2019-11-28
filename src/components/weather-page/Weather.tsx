import React, { useState, useEffect } from "react";
import SingleDayDetail from "./SingleDayDetail";
import SingleDaySummary from "./SingleDaySummary";

import './Weather.scss';
import { fetchWeatherData, SingleDayData} from "../../helpers/ApiDataCall";

export function Weather() {
    const [weatherData, setWeatherData] = useState<SingleDayData[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(6);

    useEffect(() => { 
        fetchWeatherData().then(parsedData => setWeatherData(parsedData));
    }, []);

    
    if (weatherData.length === 0){
        return <h1>"Loading"</h1>
    } 

    const selected = weatherData[selectedIndex];

    function handleClassName(id: number):string{
            return id === selectedIndex ? "SingleDaySummary SingleDaySummarySelected" : "SingleDaySummary";  
    };

    return (
        <div>
            <div className="weather-page">
                <h1 className="title">Latest Weather at Elysium Planitia</h1>
        
                <div className="seven-day-display">

                    <SingleDayDetail data = {selected}/>  
                    
                    <div className="carousel">
                        {weatherData.map(weatherDay  => <div onClick ={() => setSelectedIndex(weatherDay.id)}><SingleDaySummary data = {weatherDay} className={handleClassName(weatherDay.id)}/></div>)}
                    </div>  
                </div>

            </div>
            <img src="https://mars.nasa.gov/rss/api/images/insight_marsweather_white.png" alt="Weather Conditions Graph"className="weatherGraph"/>
        </div>        

    );
    
}

