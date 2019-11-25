import React, {useEffect} from "react";
import {SingleDayInfo} from "./SingleDayInfo";
import {fetchData} from "../../helpers/ApiCall";

export function Weather() {

    useEffect(() => {
        const jsonResponse = fetchData('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
        console.log(jsonResponse);
    });
// do api call

    // keep in state



    return (
        <div>
            <h1 className="weather-page-title">Latest Weather at Elysium Planitia</h1>
            <LatestWeatherCard/>
            <ol>
                {/*loop state
                        create singleDayInfo
                */}

                <SingleDayInfo name={"Day1"}/>
                <SingleDayInfo name={"Day2"}/>
                <SingleDayInfo name={"Day3"}/>
                <SingleDayInfo name={"Day4"}/>
                <SingleDayInfo name={"Day5"}/>
                <SingleDayInfo name={"Day6"}/>
                <SingleDayInfo name={"Day7"}/>
            </ol>
        </div>
    );
}



function LatestWeatherCard() {
    return (
        <div className="weather-page-latest-container">
            <div className="weather-page-latest-date">
                <p className="weather-page-mars-sol">Sol 265</p>
                <p className="weather-page-earth-date">November 25</p>
            </div>
            <div className="weather-page-latest-temp">
                {/*todo set temp to fahrenheit*/}
                <p className="weather-page-temp">High: -15 C</p>
                <p className="weather-page-temp">Low: -147 C</p>
            </div>
        </div>


    )
}



