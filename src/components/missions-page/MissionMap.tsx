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
                <defs>
                    <pattern id="rover-pattern" height="100%" width="100%"
                             patternContentUnits="objectBoundingBox">
                        <image height="1" width="1" preserveAspectRatio="none" href="/images/opportunity_rover.jpg" />
                    </pattern>
                </defs>


                {landingList.map(landingSight =>
                    <circle
                        onClick={() => props.setSelectedId(landingSight.name)}
                        cx={landingSight.x}
                        cy={landingSight.y}
                        r = {getRadius(landingSight.name)}
                        fill="url(#rover-pattern)"
                        className={getClassName(landingSight.name)}
                    />)}
            </svg>
        </div>
    )
}
