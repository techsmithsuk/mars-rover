import React from 'react';
import { ChooseRover } from './chooseRover'
import { ChooseCamera } from './chooseCamera'
import './marsRover.scss'

export function MarsRover() {
    return <div className="roverBox">
        <ChooseRover />
        <ChooseCamera />
        </div>;
}

