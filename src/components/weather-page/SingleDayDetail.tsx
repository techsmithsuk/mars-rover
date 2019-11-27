import React from 'react';
import {SingleDayData} from './SingleDayData';
import './SingleDayDetail.scss';

import ThermometerIcon from './resources/svg_icon_thermometer';
import CloudIcon from './resources/svg_icon_cloud';
import SunIcon from './resources/svg_icon_sun';
import WindIcon from './resources/svg_icon_wind';

export default function SingleDayDetail(props : SingleDayData) {  
    
    let min = props.minTemp ? Math.round(props.minTemp) + " °C" : 0 + " °C";   
    let max = props.maxTemp ? Math.round(props.maxTemp) + " °C": 0 + " °C"; 

    let date = props.earthSolDate;   

    return (
        <div className="SingleDayDetail">            

            <div className="weekdayBlock">
                <p>DATE</p>
                <p>{props.weekdayName} {props.earthSolDate}</p>
                <p>MARS SOL {props.marsSolDate}</p>                

            </div> 

            <div className="tempBlock">                
                <p>High</p> 
                <p>{max}</p>
                <p>Low</p> 
                <p>{min}</p>
                
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