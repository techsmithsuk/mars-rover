import React from "react";
import {SingleDaySummary, SingleDayDetail} from "./SingleDay";
import {SingleDayData} from "./SingleDayData";

import './weather.scss';

export function Weather() {

    const tempData: SingleDayData = {  
        marsSolDate: '344',
        earthSolDate: '14th',
        averageTemp: -67.108,
        minTemp: -99.926,
        maxTemp: -23.287,
        averageWindSpeed: 5.3,
        windDirection: 'SSE',
        averagePressure: 681.448,
        weekdayName: 'Monday' // TODO calc via function
    }

    return (
        <div>
            <h1 className="weather-page-title">Latest Weather at Elysium Planitia</h1>
     
            <div className="weather-page-seven-day-carousel">

                <div className="summary">
                    <SingleDayDetail {...tempData}/>  
                </div>    
               
                <div className="carousel">
                    <SingleDaySummary {...tempData}/>
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

