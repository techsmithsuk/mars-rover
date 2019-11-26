import React from 'react';
import {SingleDayData} from './SingleDayData';
import './SingleDaySummary.scss';

import ThermometerIcon from './resources/svg_icon_thermometer';
import CloudIcon from './resources/svg_icon_cloud';
import SunIcon from './resources/svg_icon_sun';
import WindIcon from './resources/svg_icon_wind';

// TODO - Add Image Array & random picker function for weather card icon
// TODO - Add function to convert "2019-11-14T16:08:54Z" into weekday i.e. Monday

export function SingleDaySummary(props : SingleDayData) {
 
    let min = props.minTemp ? Math.round(props.minTemp) : 0;
    let max = props.maxTemp ? Math.round(props.maxTemp) : 0;
    let avTemp = props.averageTemp ? Math.round(props.averageTemp) : 0;


    

    return (
        <div className="SingleDaySummary">

            <div className="DayIconTempCluster">

                <div className="DayNameContainer">
                    <h2>{props.weekdayName}</h2>
                </div>

                <div className="IconContainer">
                    <CloudIcon/> 
                </div>
                
                <div className="TempContainer">
                    <div>{avTemp}</div>                    
                </div>                

            </div>

            <div className="TextSummaryContainer">
                <p className="SummaryText">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
            </div>
        </div>
    )
}