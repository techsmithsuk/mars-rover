import React from "react";
import {SingleDayData} from './SingleDayData'

import cloud_icon from './resources/weather_page_summary_icon_cloud.svg';
import sun_icon from './resources/weather_page_summary_icon_sun.svg';
import thermo_icon from './resources/weather_page_summary_icon_wind.svg';
import wind_icon from './resources/weather_page_summary_icon_thermometer.svg';

// TODO - Add Image Array & random picker function for weather card icon

export function SingleDaySummary(props : SingleDayData) {

    return (
        <div className="SingleDaySummary">

            <div className="DayIconTempCluster">

                <div>
                    {props.weekdayName}
                </div>
                <img src={cloud_icon}></img> 

                <div>{props.minTemp}</div>
                <div>{props.maxTemp}</div>



            </div>

            <div className="TextSummary">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
            </div>


            <div>{props.marsSolDate}</div>
            <div>{props.earthSolDate}</div>
            <div>{props.averageTemp}</div>
            
            <div>{props.averageWindSpeed}</div>
            <div>{props.windDirection}</div>
            <div>{props.averagePressure}</div>
            
        </div>
    )
}




// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date(dateString);
// var dayName = days[d.getDay()];