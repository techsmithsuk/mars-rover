import React from 'react';
import './chooseRover.scss';

export function ChooseRover() {
    return (
    <div className="chooseRover">
        <h2>Choose your Rover</h2>
        <div className="allRovers">
            <div className="roverOptions">
                <img className="roverImage" src='/images/curioisity_rover.jpg'></img>
                <h3>Curiosity</h3>
            </div>
            <div className="chooseRover">
                <img className="roverImage" src='/images/opportunity_rover.jpg'></img>
                <h3>Opportunity</h3>
            </div>
            <div className="chooseRover">
                <img className="roverImage" src='/images/spirit_rover.jpg'></img>
                <h3>Spirit</h3>
            </div>
        </div>
    </div>
    )
}