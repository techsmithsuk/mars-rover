import React from 'react';
import {SingleDayData} from './SingleDayData';
import './SingleDaySummary.scss';

import formatTemperature from '../../helpers/FormatTemperature';

import ThermometerIcon from './resources/svg_icon_thermometer';
import CloudIcon from './resources/svg_icon_cloud';
import SunIcon from './resources/svg_icon_sun';
import WindIcon from './resources/svg_icon_wind';

export default function SingleDaySummary(props : SingleDayData) {
        
    const avTemp = formatTemperature(props.averageTemp);

    return (
        <div className="SingleDaySummary">            

            <div className="selection-highlight"></div>

            <div className="weekday">
                {props.weekdayName}
            </div>

            <div className="icon">
                <SunIcon/> 
            </div>
            
            <div className="averageTemp">
                {avTemp + "°C"}                   
            </div>   
                      
        </div>
    )
}
