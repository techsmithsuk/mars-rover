import React from "react";
import SingleDayDetail from "./SingleDayDetail";
import SingleDaySummary from "./SingleDaySummary";
import {SingleDayData} from "./SingleDayData";

import './Weather.scss';

export function Weather() {

    const mondayData: SingleDayData = {  
        marsSolDate: '344',
        earthSolDate: '14th',
        averageTemp: -67.108,
        minTemp: -99.926,
        maxTemp: -23.287,
        averageWindSpeed: 5.3,
        windDirection: 'SSE',
        averagePressure: 681.448,
        weekdayName: 'Mon' // TODO calc via function
    }

    const tempData: SingleDayData = {  
        marsSolDate: '345',
        earthSolDate: '15th',
        averageTemp: -47.108,
        minTemp: -199.926,
        maxTemp: -8.287,
        averageWindSpeed: 5.3,
        windDirection: 'SSE',
        averagePressure: 681.448,
        weekdayName: 'Tue' // TODO calc via function
    }

    return (
        <div className="weather-page">
            <h1 className="title">Latest Weather at Elysium Planitia</h1>
     
            <div className="seven-day-display">

                <SingleDayDetail {...mondayData}/>  
                
                <div className="carousel">
                    <SingleDaySummary {...mondayData}/>
                    <SingleDaySummary {...tempData}/>
                    <SingleDaySummary {...tempData}/>
                    <SingleDaySummary {...tempData}/>
                    <SingleDaySummary {...tempData}/>
                    <SingleDaySummary {...tempData}/>
                    <SingleDaySummary {...tempData}/>   
                </div>
                      
            </div>

            

        </div>
    );
}

