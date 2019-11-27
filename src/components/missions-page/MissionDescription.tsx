import React from 'react'
import {Mission} from './MissionPage';
import './MissionDescription.scss';

interface MissionDescriptionProps {
    mission: Mission | undefined;
}


export function MissionDescription(props: MissionDescriptionProps) {
    if (!props.mission) {
        return <div>Couldn't find that mission</div>
    }

    return (
        <div className="MissionDescription">
            <img className="mission-image" src={props.mission.imageSrc} alt="mission image"/>
            <div className="info">
                <p className="launch">Launched: {props.mission.launched}</p>
                <p className="launch">Landed: {props.mission.landed}</p>
                <p>{props.mission.description}</p>
                <a  className="moreInfo" href={props.mission.moreInfoUrl}>More info</a>
            </div>

        </div>
    );
}
