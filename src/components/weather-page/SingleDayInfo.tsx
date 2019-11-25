import React from "react";

interface SingleDayInfo{
    sol?: string;
    earthDate?: string;

    averageTemp?: number;
    minTemp?:number;
    maxTemp?:number;

    averageWindSpeed?:number;
    windDirection?: string;

    averagePressure?:number;

    name:string;

}

export function SingleDayInfo(props : SingleDayInfo) {





    return (
        <div>
            <div>{props.sol}</div>
            <div>{props.earthDate}</div>
            <div>{props.averageTemp}</div>
            <div>{props.minTemp}</div>
            <div>{props.maxTemp}</div>
            <div>{props.averageWindSpeed}</div>
            <div>{props.windDirection}</div>
            <div>{props.averagePressure}</div>
            <div>{props.name}</div>
        </div>
    )
}

// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date(dateString);
// var dayName = days[d.getDay()];