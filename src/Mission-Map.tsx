import React, {useState} from 'react'
import './Mission.scss'
import {MissionScroll} from './Scroll-Bar';

export function update() {

}

export function MarsMapImg() {
    const [selectedId, setSelectedId] = useState("");
    
    function getClassName(id: string) {
        if (selectedId === id) {
            return "circle-clicked"
        }
        return "circle";
    }
    function getRadius(id: string) {
        if (selectedId === id) {
            return "30"
        }
        return "20";
    }
    
    return (
        <div className="MarsMapImg">
    <svg className="map" viewBox="0 0 1135 567">
        <circle onClick={() => setSelectedId("Phoenix")} cx="150" cy="70" r = {getRadius("Phoenix")} className={getClassName("Phoenix")}/>
        <circle onClick={() => setSelectedId("Mars3")} cx="60" cy="420" r = {getRadius("Mars3")} className={getClassName("Mars3")}/>
        <circle onClick={() => setSelectedId("Viking1")}cx="400" cy="210" r = {getRadius("Viking1")} className={getClassName("Viking1")}/>
        <circle onClick={() => setSelectedId("Pathfinder")}cx="450" cy="220" r = {getRadius("Pathfinder")} className={getClassName("Pathfinder")}/>
        <circle onClick={() => setSelectedId("ExoMars")}cx="500" cy="225" r = {getRadius("ExoMars")} className={getClassName("ExoMars")}/>
        <circle onClick={() => setSelectedId("Opportunity")}cx="550" cy="285" r = {getRadius("Opportunity")} className={getClassName("Opportunity")}/>
        <circle onClick={() => setSelectedId("Mars6")}cx="510" cy="350" r = {getRadius("Mars6")} className={getClassName("Mars6")}/>
        <circle onClick={() => setSelectedId("Mars2")}cx="720" cy="430" r = {getRadius("Mars2")} className={getClassName("Mars2")}/>
        <circle onClick={() => setSelectedId("Mars2020")}cx="810" cy="225" r = {getRadius("Mars2020")} className={getClassName("Mars2020")}/>
        <circle onClick={() => setSelectedId("Beagle2")}cx="850" cy="250" r = {getRadius("Beagle2")} className={getClassName("Beagle2")}/>
        <circle onClick={() => setSelectedId("Viking2")}cx="980" cy="125" r = {getRadius("Viking2")} className={getClassName("Viking2")}/>
        <circle onClick={() => setSelectedId("InSight")}cx="970" cy="270" r = {getRadius("InSight")} className={getClassName("InSight")}/>
        <circle onClick={() => setSelectedId("Curiosity")}cx="990" cy="300" r = {getRadius("Curiosity")} className={getClassName("Curiosity")}/>
        <circle onClick={() => setSelectedId("Spirit")}cx="1110" cy="320" r = {getRadius("Spirit")} className={getClassName("Spirit")}/>
        <circle onClick={() => setSelectedId("MarsPolarLander")}cx="1080" cy="530" r = {getRadius("MarsPolarLander")} className={getClassName("MarsPolarLander")}/>
    </svg>
    <MissionScroll selectMissionCard={setSelectedId}/>
    </div>
    
    )
}
