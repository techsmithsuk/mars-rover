import React from 'react'
import './Mission.scss'

export function MarsMapImg() {
    return (
    <svg className="map" viewBox="0 0 1135 567">
        <circle cx="150" cy="70" r="10" stroke="red" stroke-width="2" fill="none" className="Pheonix"/>
        <circle cx="60" cy="420" r="10" stroke="orange" stroke-width="2" fill="none" className="Mars 3"/>
        <circle cx="400" cy="210" r="10" stroke="red" stroke-width="2" fill="none" className="Viking 1"/>
        <circle cx="450" cy="220" r="10" stroke="red" stroke-width="2" fill="none" className="Pathfinder"/>
        <circle cx="500" cy="225" r="10" stroke="blue" stroke-width="2" fill="none" className="ExoMars"/>
        <circle cx="550" cy="285" r="10" stroke="red" stroke-width="2" fill="none" className="Opportunity"/>
        <circle cx="510" cy="350" r="10" stroke="orange" stroke-width="2" fill="none" className="Mars 6"/>
        <circle cx="720" cy="430" r="10" stroke="orange" stroke-width="2" fill="none" className="Mars 2"/>
        <circle cx="810" cy="225" r="10" stroke="blue" stroke-width="2" fill="none" className="Mars 2020"/>
        <circle cx="850" cy="250" r="10" stroke="orange" stroke-width="2" fill="none" className="Beagle 2"/>
        <circle cx="980" cy="125" r="10" stroke="red" stroke-width="2" fill="none" className="Viking 2"/>
        <circle cx="970" cy="270" r="10" stroke="red" stroke-width="2" fill="none" className="InSight"/>
        <circle cx="990" cy="300" r="10" stroke="red" stroke-width="2" fill="none" className="Curiosity"/>
        <circle cx="1110" cy="320" r="10" stroke="red" stroke-width="2" fill="none" className="Spirit"/>
        <circle cx="1080" cy="530" r="10" stroke="orange" stroke-width="2" fill="none" className="Mars Polar Lander"/>
    </svg>)
}