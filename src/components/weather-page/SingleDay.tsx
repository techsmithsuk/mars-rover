import React from 'react';
import {SingleDayData} from './SingleDayData';
import './singleDay.scss';

import ThermometerIcon from './resources/svg_icon_thermometer';
import CloudIcon from './resources/svg_icon_cloud';
import SunIcon from './resources/svg_icon_sun';
import WindIcon from './resources/svg_icon_wind';

export function SingleDaySummary(props : SingleDayData) {
    
    let avTemp = props.averageTemp ? Math.round(props.averageTemp) : 0;   

    return (
        <div className="SingleDaySummary">            

            <div className="selectionTab"></div>

            <div className="weekday">
                <p>{props.weekdayName}</p>
            </div>

            <div className="icon">
                <SunIcon/> 
            </div>
            
            <div className="AverageTemp">
                {avTemp}                   
            </div>   
                      
        </div>
    )
}

export function SingleDayDetail(props : SingleDayData) {  
    
    let min = props.minTemp ? Math.round(props.minTemp) : 0;   
    let max = props.maxTemp ? Math.round(props.maxTemp) : 0; 

    let date = props.earthSolDate;   

    return (
        <div className="SingleDayDetail">            

            <div className="weekdayBlock">
                <p>DATE</p>
                <p>{props.weekdayName} {props.earthSolDate}</p>
                <p>MARS SOL {props.marsSolDate}</p>
                

            </div> 

            <div className="tempBlock">
                <ThermometerIcon/>  
                <p>High: {max}</p>
                <p>Low: {min}</p>
                
            </div>

            <div className="windBlock">
                <WindIcon/>  
                <p>{props.averageWindSpeed} mph</p>
                <p>{props.windDirection}</p>
                           
            </div>

            <p className="textBlock">
                "Sunny with a chance of meatballs."
            </p>         
                      
        </div>
    )
}