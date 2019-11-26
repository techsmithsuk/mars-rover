import React from "react";
import {SingleDaySummary} from "./SingleDaySummary";
import {SingleDayData} from "./SingleDayData";


export function Weather() {

    const tempData: SingleDayData = {  
        marsSolDate: '344',
        earthSolDate: '2019-11-14T16:08:54Z',
        averageTemp: -67.108,
        minTemp: -99.926,
        maxTemp: -23.287,
        averageWindSpeed: 5.344,
        windDirection: 'SSE',
        averagePressure: 681.448,
        weekdayName: 'Monday' // TODO calc via function
    }

    return (
        <div>
            <h1 className="weather-page-title">Latest Weather at Elysium Planitia</h1>
     
            <SingleDaySummary {...tempData}/>

        </div>
    );
}