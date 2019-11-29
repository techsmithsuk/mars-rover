import React from 'react';
import {SingleDayData} from '../../helpers/ApiDataCall';
import './SingleDaySummary.scss';

import formatTemperature from '../../helpers/FormatTemperature';

import SunIcon from './resources/svg_icon_sun';

interface SingleDataDetailProps{
    data: SingleDayData;
}

export default function SingleDaySummary(props : SingleDataDetailProps) {
        
    const avTemp = formatTemperature(props.data.averageTemp);

    return (
        <div className="SingleDaySummary">            

            <div className="selection-highlight"></div>

            <div className="weekday">
                {props.data.weekdayName}
            </div>

            <div className="icon">
                <SunIcon/> 
            </div>
            
            <div className="averageTemp">
                {avTemp}                   
            </div>   
                      
        </div>
    )
}
