import React from 'react';
import {SingleDayData} from './SingleDayData';
import './singleDay.scss';

import ThermometerIcon from './resources/svg_icon_thermometer';
import CloudIcon from './resources/svg_icon_cloud';
import SunIcon from './resources/svg_icon_sun';
import WindIcon from './resources/svg_icon_wind';

// TODO - Add Image Array & random picker function for weather card icon
// TODO - Add function to convert "2019-11-14T16:08:54Z" into weekday i.e. Monday

export function SingleDaySummary(props : SingleDayData) {
    
    let avTemp = props.averageTemp ? Math.round(props.averageTemp) : 0;   

    return (
        <div className="SingleDaySummary">            

            <div className="selectionTab"></div>

            <div className="weekday">
                <p>{props.weekdayName}</p>
            </div>

            <div className="icon">
                <CloudIcon/> 
            </div>
            
            <div className="AverageTemp">
                {avTemp}                   
            </div>   
                      
        </div>
    )
}

export function SingleDayDetail(props : SingleDayData) {
    
    // TODO on summary class click/hover change this one
    
    return (
        <div className="SingleDayDetail">            

            <div className="weekday">
                <p>{props.weekdayName}</p>
            </div>  
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>         
                      
        </div>
    )
}