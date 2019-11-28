import React from 'react';
import './home.scss';

export function HomePage() {


    return (
        <div className="homePage">
            <section className="home" > Welcome to the Mars Rover!</section>
            <div className="sections">
                <section className="missions">Missions</section>
                <section className="weather">Weather</section>
                <section className="photos">Photos</section>
            </div>
        </div>
    );
}