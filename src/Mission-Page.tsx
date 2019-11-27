import React,{useState} from 'react'
import {MarsMapImg} from './Mission-Map'
import {MissionScroll} from './Scroll-Bar'



export const landingList: {name:string, x:string,y:string} []=     [{name:"Phoenix", x:"150", y:"70"},
                                                                    {name:"Mars3", x:"60", y:"420"},
                                                                    {name:"Viking1", x:"400", y:"210"},
                                                                    {name:"Pathfinder", x:"450", y:"220"},
                                                                    {name:"ExoMars", x:"500", y:"225"},
                                                                    {name:"Opportunity", x:"550", y:"285"},
                                                                    {name:"Mars6", x:"510", y:"350"},
                                                                    {name:"Mars2", x:"720", y:"430"},
                                                                    {name:"Mars2020", x:"810", y:"225"},
                                                                    {name:"Beagle2", x:"850", y:"250"},
                                                                    {name:"Viking2", x:"980", y:"125"},
                                                                    {name:"InSight", x:"970", y:"270"},
                                                                    {name:"Curiosity", x:"990", y:"300"},
                                                                    {name:"Spirit", x:"1110", y:"320"},
                                                                    {name:"MarsPolarLander", x:"1080", y:"530"}];


export function MissionPage(){
    const [selectedId, setSelectedId] = useState("");

    return (
        <div>
            <MarsMapImg setSelectedId={setSelectedId} selectedId={selectedId}/>
            <MissionScroll selectMissionCard={setSelectedId} selectedCard={selectedId}/>
        </div>
    )
}