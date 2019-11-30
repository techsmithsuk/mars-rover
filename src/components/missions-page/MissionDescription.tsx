import React from 'react'
import {Mission} from './MissionPage';
import './MissionDescription.scss';

interface MissionDescriptionProps {
    mission: Mission | undefined;
    showPopUp: boolean;
    setShowPopUp: (state: boolean) => void;
}

function truncateString(string: string, number: number) {
    return string.slice(0, number) + "...";
}

export function MissionDescription(props: MissionDescriptionProps) {
    if (!props.mission) {
        return <div>Couldn't find that mission</div>
    }

    function getClassName(popUpStatus: boolean) {

        if (!popUpStatus) {
            return "invisible";
        }


        if (props.mission) {

            if (Number(props.mission.x) < 551) {
                return "right";
            } else {
                return "left";
            }
        }

        return "MissionDescription";
    }


    return (
        <div className={getClassName(props.showPopUp)}>
            <svg onClick={()=> props.setShowPopUp(false)} className="close-icon" visibility="hidden" fill="white" width="24" height="24" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
            <div className="MissionDescription">
                <p className="name">{props.mission.name}</p>
                <img className="mission-image" src={props.mission.imageSrc} alt="mission"/>
                <div className="info">
                    <p className="launch">Launched: {props.mission.launched}</p>
                    <p className="launch">Landed: {props.mission.landed}</p>
                    <p>{truncateString(props.mission.description, 250)}</p>
                    <a className="moreInfo" target="_blank" href={props.mission.moreInfoUrl}>More Info</a>
                </div>
            </div>
        </div>
    );
}
