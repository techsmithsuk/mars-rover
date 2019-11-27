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
    
    // TODO on summary class click/hover change this one
    
    let min = props.minTemp ? Math.round(props.minTemp) : 0;   
    let max = props.maxTemp ? Math.round(props.maxTemp) : 0;     
    let date = props.earthSolDate;   

    return (
        <div className="SingleDayDetail">            

            <div className="weekday">
                
                <p>MARS SOL {props.marsSolDate}</p>
                <p>{props.weekdayName} {props.earthSolDate}</p>

            </div> 

            <div>
                <p>Low: {min}</p>
                <p>High: {max}</p>
            </div>

            <div>
                <p>Wind Speed:  {props.averageWindSpeed}</p>
                <p>Wind Direction:  {props.windDirection}</p>
                <WindIcon/> 
            </div>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>         
                      
        </div>
    )
}