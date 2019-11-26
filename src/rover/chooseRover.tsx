import React, {useState} from 'react';
import './chooseRover.scss';

export function ChooseRover() {
    const [rover, setRover] = useState("");
   
    return (
        <div className="chooseRover">
            <h2>Choose your Rover</h2>
            <div className="allRovers">
                <RoverCard roverName="Curiosity" roverImage='/images/curioisity_rover.jpg' onRoverSelected={setRover} selectedRover={rover}/>
                <RoverCard roverName="Opportunity" roverImage='/images/opportunity_rover.jpg' onRoverSelected={setRover} selectedRover={rover}/>
                <RoverCard roverName="Spirit" roverImage='/images/spirit_rover.jpg' onRoverSelected={setRover} selectedRover={rover}/>
            </div>
        </div>
    )
}

interface RoverCardProps {
    onRoverSelected: (roverName: string) => void;
    selectedRover: string;
    roverName: string;
    roverImage: string;
}

function RoverCard(props: RoverCardProps) {
    function getClassName() {
        if (props.roverName === props.selectedRover) {
            return "roverOptions selected";
        }
        return "roverOptions";
    }

    return (
        <div className={getClassName()} onClick={() => props.onRoverSelected(props.roverName)}>
            <img className="roverImage" src={props.roverImage}></img>
            <h3>{props.roverName}</h3>
        </div>
    );
}
