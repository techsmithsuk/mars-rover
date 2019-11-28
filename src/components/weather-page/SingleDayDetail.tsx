import React from 'react';
import {SingleDayData} from './SingleDayData';
import './SingleDayDetail.scss';

import formatTemperature from '../../helpers/FormatTemperature';

import ThermometerIcon from './resources/svg_icon_thermometer';
import CloudIcon from './resources/svg_icon_cloud';
import SunIcon from './resources/svg_icon_sun';
import WindIcon from './resources/svg_icon_wind';

interface SingleDataDetailProps{
    data : SingleDayData;
}

export default function SingleDayDetail(props : SingleDataDetailProps) {  

    const min = formatTemperature(props.data.minTemp);
    const max = formatTemperature(props.data.maxTemp);
    
    return (
        <div className="SingleDayDetail">            

            <div className="weekdayBlock">
                <p>DATE</p>
                <p>{props.data.weekdayName} {props.data.earthSolDate}</p>
                <p>MARS SOL {props.data.marsSolDate}</p>  
            </div> 

            <div className="tempBlock">                
                <p>High</p> 
                <p>{max}</p>
                <p>Low</p> 
                <p>{min}</p>
            </div>

            <div className="windBlock">
                <WindIcon/>  
                <p>{props.data.averageWindSpeed} mph</p>
                <p>{props.data.windDirection}</p>
            </div>

            <p className="textBlock">
                "Sunny with a chance of meatballs."
            </p>         
                      
        </div>
    )
}