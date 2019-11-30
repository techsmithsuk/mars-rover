import React from 'react'
import {Mission} from './MissionPage';
import './MissionDescription.scss';

interface MissionDescriptionProps {
    mission: Mission | undefined;
}

function truncateString(string : string, number : number) {
    return string.slice(0, number) + "...";
  }

export function MissionDescription(props: MissionDescriptionProps) {
    if (!props.mission) {
        return <div>Couldn't find that mission</div>
    }

    return (
        <div className="MissionDescription">
            <p className="name">{props.mission.name}</p>
            <img className="mission-image" src={props.mission.imageSrc} alt="mission"/>
            <div className="info">
                <p className="launch">Launched: {props.mission.launched}</p>
                <p className="launch">Landed: {props.mission.landed}</p>
                <p>{truncateString(props.mission.description, 250)}</p>
                <a  className="moreInfo" href={props.mission.moreInfoUrl}>More Info</a>
            </div>

        </div>
    );
}
