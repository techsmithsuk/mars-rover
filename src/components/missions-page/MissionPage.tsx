import React, {useState} from 'react'
import {MissionMap} from './MissionMap'
import {MissionScrollBar} from './MissionScrollBar'
import {MissionDescription} from './MissionDescription';

export interface Mission {
    name: string,
    x: string,
    y: string,
    imageSrc: string,
    launched: string,
    landed: string,
    moreInfoUrl: string,
    description: string,
}

export const landingList: Mission[] = [{
    name: "Phoenix",
    x: "150",
    y: "70",
    imageSrc: "/images/mission-phoenix.jpg",
    launched: "Aug 4, 2007",
    landed: "May 25, 2008",
    moreInfoUrl: "https://www.nasa.gov/mission_pages/phoenix/main/index.html",
    description: "The goals of the Phoenix Mars Lander were to study the history of water in the Martian arctic, search for evidence of a habitable zone and assess the biological potential of the ice-soil boundary.\n" +
        "\n" +
        "Phoenix studied the Martian soil with a chemistry lab, TEGA, a microscope, a conductivity probe and cameras.\n" +
        "\n" +
        "In August 2008, Phoenix completed its three-month mission studying Martian ice, soil and atmosphere. The lander worked for two additional months before reduced sunlight caused energy to become insufficient to keep the lander functioning."
},
    {
        name: "Mars3",
        x: "60",
        y: "420",
        imageSrc: "/images/mission-mars-2-3-6.jpg",
        launched: "May 28, 1971",
        landed: "Dec 2, 1971",
        moreInfoUrl: "https://en.wikipedia.org/wiki/Mars_3",
        description: "Mars 3 was a robotic space probe of the Soviet Mars program, launched May 28, 1971, nine days after its twin spacecraft Mars 2. The probes were identical robotic spacecraft launched by Proton-K rockets with a Blok D upper stage, each consisting of an orbiter and an attached lander. After the Mars 2 lander crashed on the Martian surface, the Mars 3 lander became the first spacecraft to attain a soft landing on Mars, on 2 December 1971. It failed 20 seconds after landing, having transmitted only a gray image with no details.[3] The Mars 2 orbiter and Mars 3 orbiter continued to circle Mars and transmit images back to Earth for another eight months."
    },
    {
        name: "Viking1",
        x: "400",
        y: "210",
        imageSrc: "/images/mission-viking.jpg",
        launched: "Aug 20, 1975",
        landed: "Jul 20, 1976",
        moreInfoUrl: "https://mars.nasa.gov/mars-exploration/missions/viking-1-2/",
        description: "NASA's Viking Project found a place in history when it became the first U.S. mission to land a spacecraft safely on the surface of Mars and return images of the surface. Two identical spacecraft, each consisting of a lander and an orbiter, were built. Each orbiter-lander pair flew together and entered Mars orbit; the landers then separated and descended to the planet's surface.\n" +
            "\n" +
            "The Viking 1 lander touched down on the western slope of Chryse Planitia (the Plains of Gold), while the Viking 2 lander settled down at Utopia Planitia.\n" +
            "\n" +
            "Besides taking photographs and collecting other science data on the Martian surface, the two landers conducted three biology experiments designed to look for possible signs of life."
    },
    {
        name: "Pathfinder",
        x: "450",
        y: "220",
        imageSrc: "/images/mission-pathfinder.jpg",
        launched: "Dec 04, 1996",
        landed: "Jul 4, 1997",
        moreInfoUrl: "https://www.nasa.gov/mission_pages/mars-pathfinder",
        description: "Mars Pathfinder was designed to be a demonstration of the technology necessary to deliver a lander and a free-ranging robotic rover to the surface of Mars in a cost-effective and efficient manner. The lander, formally named the Carl Sagan Memorial Station following its successful touchdown, and the rover, named Sojourner after American civil rights crusader Sojourner Truth."
    },
    {
        name: "ExoMars", x: "500", y: "225",
        imageSrc: "/images/mission-exomars.jpg",
        launched: "Jul 25, 2020",
        landed: "Jul 25, 2021",
        moreInfoUrl: "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/ExoMars",
        description: "The goals of ExoMars are to search for signs of past life on Mars, investigate how the Martian water and geochemical environment varies, investigate atmospheric trace gases and their sources and by doing so demonstrate the technologies for a future Mars sample-return mission."
    },
    {
        name: "Opportunity",
        x: "550",
        y: "285",
        imageSrc: "/images/mission-spirit-opportunity.jpg",
        launched: "Jul 7, 2003",
        landed: "Jan 4, 2004",
        moreInfoUrl: "https://www.nasa.gov/mission_pages/mer/index.html",
        description: "Primary among the mission's scientific goals is to search for and characterize a wide range of rocks and soils that hold clues to past water activity on Mars. The spacecraft are targeted to sites on opposite sides of Mars that appear to have been affected by liquid water in the past. The landing sites are at Gusev Crater, a possible former lake in a giant impact crater, and Meridiani Planum, where mineral deposits (hematite) suggest Mars had a wet past.\n" +
            "\n" +
            "After the airbag-protected landing craft settled onto the surface and opened, the rovers rolled out to take panoramic images."
    },
    {
        name: "Mars6",
        x: "510",
        y: "350",
        imageSrc: "/images/mission-mars-2-3-6.jpg",
        launched: "Aug 5, 1973",
        landed: "Crashed",
        moreInfoUrl: "https://en.wikipedia.org/wiki/Mars_6",
        description: "Mars 6 (Russian: Марс-6), also known as 3MP No.50P was a Soviet spacecraft launched to explore Mars. A 3MP bus spacecraft launched as part of the Mars programme, it consisted of a lander, and a coast stage with instruments to study Mars as it flew past."
    },
    {
        name: "Mars2",
        x: "720",
        y: "430",
        imageSrc: "/images/mission-mars-2-3-6.jpg",
        launched: "May 19, 1971",
        landed: "Crashed",
        moreInfoUrl: "https://en.wikipedia.org/wiki/Mars_2",
        description: "The Mars 2 was an unmanned space probe of the Mars program, a series of unmanned Mars landers and orbiters launched by the Soviet Union May 19, 1971. The Mars 2 and Mars 3 missions consisted of identical spacecraft, each with an orbiter and an attached lander. The orbiter is identical to the Venera 9 bus or orbiter. The type of bus/orbiter is the 4MV. They were launched by a Proton-K heavy launch vehicle with a Blok D upper stage. The lander of Mars 2 became the first man-made object to reach the surface of Mars, although the landing system failed and the lander was lost."
    },
    {
        name: "Mars2020", x: "810", y: "225",
        imageSrc: "/images/mission-mars2020.jpg",
        launched: "Jul 17 - Aug 5, 2020",
        landed: "Feb 18, 2021",
        moreInfoUrl: "https://mars.nasa.gov/mars2020/",
        description: "Mars 2020 will investigate an astrobiologically relevant ancient environment on Mars and investigate its surface geological processes and history, including the assessment of its past habitability, the possibility of past life on Mars, and the potential for preservation of biosignatures within accessible geological materials. It will cache sample containers along its route for a potential future Mars sample-return mission."
    },
    {
        name: "Beagle2",
        x: "850",
        y: "250",
        imageSrc: "/images/mission-beagle.jpg",
        launched: "Jun 2, 2003",
        landed: "Crashed",
        moreInfoUrl: "https://en.wikipedia.org/wiki/Beagle_2",
        description: "The Beagle 2 was a British Mars lander that was transported by the European Space Agency's 2003 Mars Express mission. It was an astrobiology mission that would have looked for past life on the shallow surface of Mars.\n" +
            "\n" +
            "The spacecraft was successfully deployed from the Mars Express on 19 December 2003 and was scheduled to land on the surface of Mars on 25 December; however, no contact was received at the expected time of landing on Mars. ESA declared the mission lost in February 2004, after numerous attempts to contact the spacecraft were made.[4]\n" +
            "\n" +
            "The Beagle 2's fate remained a mystery until January 2015 when it was located on the surface of Mars in a series of images from NASA's Mars Reconnaissance Orbiter HiRISE camera."
    },
    {
        name: "Viking2",
        x: "980",
        y: "125",
        imageSrc: "/images/mission-viking.jpg",
        launched: "Sep 9, 1975",
        landed: "Sep 3, 1976",
        moreInfoUrl: "https://mars.nasa.gov/mars-exploration/missions/viking-1-2/",
        description: "NASA's Viking Project found a place in history when it became the first U.S. mission to land a spacecraft safely on the surface of Mars and return images of the surface. Two identical spacecraft, each consisting of a lander and an orbiter, were built. Each orbiter-lander pair flew together and entered Mars orbit; the landers then separated and descended to the planet's surface.\n" +
            "\n" +
            "The Viking 1 lander touched down on the western slope of Chryse Planitia (the Plains of Gold), while the Viking 2 lander settled down at Utopia Planitia.\n" +
            "\n" +
            "Besides taking photographs and collecting other science data on the Martian surface, the two landers conducted three biology experiments designed to look for possible signs of life."
    },
    {
        name: "InSight", x: "970", y: "270",
        imageSrc: "/images/mission-insight.jpg",
        launched: "May 5, 2018",
        landed: "Nov 26, 2018",
        moreInfoUrl: "https://mars.nasa.gov/insight/",
        description: "InSight's objectives are to place a seismometer, called SEIS, on the surface of Mars to measure seismic activity and provide accurate 3D models of the planet's interior; and measure internal heat flow using a heat probe called HP3 to study Mars' early geological evolution. This could bring a new understanding of how the Solar System's terrestrial planets – Mercury, Venus, Earth, Mars – and Earth's Moon form and evolve."
    },
    {
        name: "Curiosity", x: "990", y: "300",
        imageSrc: "/images/mission-curiosity.jpg",
        launched: "Nov 26, 2011",
        landed: "Aug 5, 2012",
        moreInfoUrl: "https://mars.nasa.gov/msl/home/",
        description: "Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life."
    },
    {
        name: "Spirit", x: "1110", y: "320",
        imageSrc: "/images/mission-spirit-opportunity.jpg",
        launched: "Jun 10, 2003",
        landed: "Jan 25, 2004",
        moreInfoUrl: "https://www.nasa.gov/mission_pages/mer/index.html",
        description: "Primary among the mission's scientific goals is to search for and characterize a wide range of rocks and soils that hold clues to past water activity on Mars. The spacecraft are targeted to sites on opposite sides of Mars that appear to have been affected by liquid water in the past. The landing sites are at Gusev Crater, a possible former lake in a giant impact crater, and Meridiani Planum, where mineral deposits (hematite) suggest Mars had a wet past.\n" +
            "\n" +
            "After the airbag-protected landing craft settled onto the surface and opened, the rovers rolled out to take panoramic images. Then, the rovers drive to those locations to perform on-site scientific investigations."
    },
    {
        name: "MarsPolarLander",
        x: "1080",
        y: "530",
        imageSrc: "/images/mission-mars-polar-lander.png",
        launched: "Jan 3, 1999",
        landed: "Dec 3, 1999",
        moreInfoUrl: "https://mars.nasa.gov/mars-exploration/missions/polar-lander/",
        description: "The Mars Polar Lander, also known as the Mars Surveyor '98 Lander, was a 290-kilogram robotic spacecraft lander launched by NASA on January 3, 1999 to study the soil and climate of Planum Australe, a region near the south pole on Mars. It formed part of the Mars Surveyor '98 mission. On December 3, 1999, however, after the descent phase was expected to be complete, the lander failed to reestablish communication with Earth. A post-mortem analysis determined the most likely cause of the mishap was premature termination of the engine firing prior to the lander touching the surface, causing it to strike the planet at a high velocity."
    }];

function getMission(name: string): Mission | undefined {
    return landingList.find(mission => mission.name === name);
}

function getClassName(selectedId: string, popUpStatus: boolean) {

    if (!popUpStatus) {
        return "invisible";
    }

    const mission = getMission(selectedId);

    if (mission) {      
        
        if (Number(mission.x) < 551){    
            return "right";
        } 
        else {
            return "left";
        }
    }

    return "MissionDescription";
}

export function MissionPage() {
    const [selectedId, setSelectedId] = useState("Phoenix");
    const [showPopUp, setShowPopUp] = useState(true);
 
    function changeSelectedId(id: string){
        setSelectedId(id);
        setShowPopUp(true);
    }

    return (
        <div>
            <h1>EXCITING MISSIONS ON THE AMAZING RED PLANET OF MARS </h1>
            <MissionMap setSelectedId={changeSelectedId} selectedId={selectedId}/>
            <MissionScrollBar selectMissionCard={changeSelectedId} selectedCard={selectedId}/>        
            <div className={getClassName(selectedId, showPopUp)} onClick={() => setShowPopUp(false)}> <MissionDescription mission={getMission(selectedId)}/></div>
        </div>
    )
}