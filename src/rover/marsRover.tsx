import React, {useState} from 'react';
import { ChooseRover } from './chooseRover'
import { ChooseCamera } from './chooseCamera'
import './marsRover.scss'
import {RoverPhotos} from "./RoverPhotos"



export interface RoverObject{
    name: string,
    cameras: string[];

}

export const rovers  :RoverObject[] = [
    {name: "Curiosity",cameras: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"]},
    {name: "Opportunity", cameras: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"]},
    {name: "Spirit", cameras: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"]}
    ];


export function MarsRover() {
    const [rover, setRover] = useState('');
    const [camera, setCamera] = useState('');

    function getRover(roverName: string): RoverObject | undefined {
        return rovers.find(rover => rover.name === roverName);
    }

    return (
        <div>
            <div className="roverBox">
                <ChooseRover rover={rover} setRover={setRover} />
                <ChooseCamera getRover={getRover} rover={rover} camera={camera} setCamera={setCamera} />
            </div>
                <RoverPhotos rover={rover} camera={camera} />
        </div>
    );
}

