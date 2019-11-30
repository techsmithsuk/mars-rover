import React from 'react';
import './MissionScrollBar.scss'
import {landingList} from './MissionPage'


interface MissionScrollProps {
    selectedCard: string;
    selectMissionCard: (id: string) => void;
}

export function MissionScrollBar(props: MissionScrollProps) {

    function handleClick(id: string) {
        props.selectMissionCard(id);
    }

    function getClassName(id: string) {
        if (props.selectedCard === id) {
            return "card--content card--content-selected";
        }
        return "card--content";
    }

    function moveScrollBar(direction: string) {
        const scrollbar = document.getElementById("scrollbar");
        if (scrollbar) {
            if (direction === "left") {
                scrollbar.scrollBy({
                    "behavior": "smooth",
                    "left": -200
                });
            }
            if (direction === "right") {
                scrollbar.scrollBy({
                    "behavior": "smooth",
                    "left": 200
                });
            }
        }
    }

    return (
        <div className="MissionScrollBar">

            <img onClick={() => moveScrollBar("left")} className="arrow-icon" src="/images/arrow_left_grey.png"
                 alt="scroll arrow left"/>
            <div id="scrollbar" className="scrollbar">
                {landingList.map(landingSight =>
                    <div className="card" onClick={() => handleClick(landingSight.name)}>
                        <img className="scroll-image" alt="mission" src={landingSight.imageSrc}/>
                        <p className={getClassName(landingSight.name)}>
                            {landingSight.name}
                        </p>
                    </div>)}
            </div>
            <img onClick={() => moveScrollBar("right")} className="arrow-icon" src="/images/arrow_right_grey.png" alt="scroll arrow right"/>

        </div>
    )
}