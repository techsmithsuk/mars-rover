import React, {useState} from 'react';
import { ChooseRover } from './chooseRover'
import { ChooseCamera } from './chooseCamera'
import './marsRover.scss'

export function MarsRover() {
    const [rover, setRover] = useState('');

    return (
            <div className="roverBox">
            <ChooseRover rover={rover} setRover={setRover} />
            <ChooseCamera />
            </div>
    );
}

