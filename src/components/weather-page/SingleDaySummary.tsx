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

    return (
        <div className="SingleDaySummary">

            <div className="DayIconTempCluster">

                <div className="DayNameContainer">
                    <h2>{props.weekdayName}</h2>
                </div>

                <div className="IconContainer">
                    <WindIcon/> 
                </div>
                
                <div className="TempContainer">
                    <div>{props.minTemp}</div>
                    <div>{props.maxTemp}</div>
                </div>                

            </div>

            <div className="TextSummary">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
            </div>
        </div>
    )
}