import React, {useState, useEffect, useRef} from 'react'
import './Mission.scss'

export function MarsMapImg() {
    const [selectedId, setSelectedId] = useState("");
    
    function getClassName(id: string) {
        if (selectedId === id) {
            return "circle-clicked"
        }
        return "circle";
    }


    return (
    <svg className="map" viewBox="0 0 1135 567">
        <circle  onClick={() => setSelectedId("Phoenix")} cx="150" cy="70" r="20" className={getClassName("Phoenix")}/>
        <circle onClick={() => setSelectedId("Mars3")} cx="60" cy="420" r="20" className={getClassName("Mars3")}/>
        <circle onClick={() => setSelectedId("Viking1")}cx="400" cy="210" r="20" className={getClassName("Viking1")}/>
        <circle onClick={() => setSelectedId("Pathfinder")}cx="450" cy="220" r="20" className={getClassName("Pathfinder")}/>
        <circle onClick={() => setSelectedId("ExoMars")}cx="500" cy="225" r="20" className={getClassName("ExoMars")}/>
        <circle onClick={() => setSelectedId("Opportunity")}cx="550" cy="285" r="20" className={getClassName("Opportunity")}/>
        <circle onClick={() => setSelectedId("Mars6")}cx="510" cy="350" r="20" className={getClassName("Mars6")}/>
        <circle onClick={() => setSelectedId("Mars2")}cx="720" cy="430" r="20" className={getClassName("Mars2")}/>
        <circle onClick={() => setSelectedId("Mars2020")}cx="810" cy="225" r="20" className={getClassName("Mars2020")}/>
        <circle onClick={() => setSelectedId("Beagle2")}cx="850" cy="250" r="20" className={getClassName("Beagle2")}/>
        <circle onClick={() => setSelectedId("Viking2")}cx="980" cy="125" r="20" className={getClassName("Viking2")}/>
        <circle onClick={() => setSelectedId("InSight")}cx="970" cy="270" r="20" className={getClassName("InSight")}/>
        <circle onClick={() => setSelectedId("Curiosity")}cx="990" cy="300" r="20" className={getClassName("Curiosity")}/>
        <circle onClick={() => setSelectedId("Spirit")}cx="1110" cy="320" r="20" className={getClassName("Spirit")}/>
        <circle onClick={() => setSelectedId("MarsPolarLander")}cx="1080" cy="530" r="20" className={getClassName("MarsPolarLander")}/>
    </svg>)
}