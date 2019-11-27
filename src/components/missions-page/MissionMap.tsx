import React from 'react'
import './MissionMap.scss'
import {landingList} from './MissionPage'

interface MarsMapProps{
    selectedId: string;
    setSelectedId: (id:string) => void;
}

export function MissionMap(props: MarsMapProps) {
    
    function getClassName(id: string) {
        if (props.selectedId === id) {
            return "circle-clicked"
        }
        return "circle";
    }
    function getRadius(id: string) {
        if (props.selectedId === id) {
            return "30"
        }
        return "20";
    }


    return (
        <div className="MissionMap">
            <svg className="map" viewBox="0 0 1135 567">
                {landingList.map(landingSight => <circle onClick={() => props.setSelectedId(landingSight.name)} cx={landingSight.x} cy={landingSight.y} r = {getRadius(landingSight.name)} className={getClassName(landingSight.name)}/>)}
            </svg>
        </div>
    )
}
