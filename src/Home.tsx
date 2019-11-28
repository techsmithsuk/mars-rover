import React from 'react';
import './home.scss';
import { Link } from "react-router-dom";

export function HomePage() {

    return (
        <div className="homePage">
            <section className="home" > Welcome to the Mars Rover!</section>
            <div className="sections">
                <Link className="link missions"to="/missions"><section>Missions</section></Link>
                <Link className="link weather"to="/weather"><section>Weather</section></Link>
                <Link className="link photos" to="/rovers"> <section>Photos</section></Link>
            </div>
        </div>
    );
}