import React, {useState} from 'react';
import './Scroll-Bar.scss'

interface MissionScrollProps {
    selectMissionCard: (id:string ) => void;
}

export function MissionScroll(props: MissionScrollProps){

    const [selectedCard, setSelectedCard]=useState("");



    function handleClick(id: string) {
        setSelectedCard(id);
        props.selectMissionCard(id);
    }

    function getClassName(id: string){
        if (selectedCard === id){
            return "card--content card--content-selected";
        } 
        return "card--content";
    }

    return (

        <div className="MissionScroll">
            <div className="card">
                <p  className={getClassName("Phoenix")} onClick={() => handleClick("Phoenix")}>Phoenix</p>
                <p  className={getClassName("Mars3")} onClick={() => handleClick("Mars3")}>Mars3</p>
                <p  className={getClassName("Viking1")} onClick={() => handleClick("Viking1")}>Viking1</p>
                <p  className={getClassName("Pathfinder")} onClick={() => handleClick("Pathfinder")}>Pathfinder</p>
                <p  className={getClassName("ExoMars")} onClick={() => handleClick("ExoMars")}>ExoMars</p>
                <p  className={getClassName("Opportunity")} onClick={() => handleClick("Opportunity")}>Opportunity</p>
                <p  className={getClassName("Mars6")} onClick={() => handleClick("Mars6")}>Mars6</p>
                <p  className={getClassName("Mars2")} onClick={() => handleClick("Mars2")}>Mars2</p>
                <p  className={getClassName("Mars2020")} onClick={() => handleClick("Mars2020")}>Mars2020</p>
                <p  className={getClassName("Beagle2")} onClick={() => handleClick("Beagle2")}>Beagle2</p>
                <p  className={getClassName("Viking2")} onClick={() => handleClick("Viking2")}>Viking2</p>
                <p  className={getClassName("InSight")} onClick={() => handleClick("InSight")}>InSight</p>
                <p  className={getClassName("Curiosity")} onClick={() => handleClick("Curiosity")}>Curiosity</p>
                <p  className={getClassName("Spirit")} onClick={() => handleClick("Spirit")}>Spirit</p>
                <p  className={getClassName("MarsPolarLander")} onClick={() => handleClick("MarsPolarLander")}>MarsPolarLander</p>
            </div>
        </div>
    
    )
}