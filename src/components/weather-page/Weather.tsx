import React, { useState } from "react";
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
        weekdayName: 'Mon'
    }
    const tuesdayData: SingleDayData = {  
        marsSolDate: '345',
        earthSolDate: '15th',
        averageTemp: -32.234,
        minTemp: -123.213,
        maxTemp: -53.254,
        averageWindSpeed: 45.6,
        windDirection: 'NNW',
        averagePressure: 765.454,
        weekdayName: 'Tue'
    }

    const tempData: SingleDayData = {  
        marsSolDate: '346',
        earthSolDate: '16th',
        averageTemp: -47.108,
        minTemp: -199.926,
        maxTemp: -8.287,
        averageWindSpeed: 5.3,
        windDirection: 'SSE',
        averagePressure: 681.448,
        weekdayName: 'Wed' 
    }

    const [selected, setSelected] = useState(mondayData)


    return (
        <div className="weather-page">
            <h1 className="title">Latest Weather at Elysium Planitia</h1>
     
            <div className="seven-day-display">

                <SingleDayDetail data = {selected}/>  
                
                <div className="carousel">
                    <div onClick ={() => setSelected(mondayData)}><SingleDaySummary data = {mondayData}/></div>
                    <div onClick ={() => setSelected(tuesdayData)}><SingleDaySummary data = {tuesdayData}/></div>
                    <div onClick ={() => setSelected(tempData)}><SingleDaySummary data = {tempData}/></div>
                    <div onClick ={() => setSelected(tempData)}><SingleDaySummary data = {tempData}/></div>
                    <div onClick ={() => setSelected(tempData)}><SingleDaySummary data = {tempData}/></div>
                    <div onClick ={() => setSelected(tempData)}><SingleDaySummary data = {tempData}/></div>
                    <div onClick ={() => setSelected(tempData)}><SingleDaySummary data = {tempData}/></div>
                      
                </div>
                      
            </div>
        </div>
    );
}

