import React from 'react';
import './MissionScrollBar.scss'
import {landingList} from './MissionPage'


interface MissionScrollProps {
    selectedCard: string;
    selectMissionCard: (id:string ) => void;
}

export function MissionScrollBar(props: MissionScrollProps){

    function handleClick(id: string) {
        props.selectMissionCard(id);
    }

    function getClassName(id: string){
        if (props.selectedCard === id){
            return "card--content card--content-selected";
        } 
        return "card--content";
    }

    return (

        <div className="MissionScrollBar">
            <div className="card">
                {landingList.map(landingSight => <p  className={getClassName(landingSight.name)} onClick={() => handleClick(landingSight.name)}>{landingSight.name}</p>)}
            </div>
        </div>
    
    )
}