import React,{useState} from 'react';
import './style/home.scss';

export function HomePage() {
const[homeHeight, setHomeHeight] = useState( {height:"100vh"})

function setHomeHeighttoZero(){
    setHomeHeight({height:"0"});
}

    return (
        <div >
            <section className="home" onClick={setHomeHeighttoZero} style={homeHeight}> Welcome to the Mars Rover!</section>
            <div className="sections">
                <section className="missions">Missions</section>
                <section className="weather">Weather</section>
                <section className="photos">Photos</section>
            </div>
        </div>
    );
}