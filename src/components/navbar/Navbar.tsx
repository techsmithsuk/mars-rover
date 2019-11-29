import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

export function Navbar() {
    return (<nav>
            <ul className="navbar">
                <li>
                    <Link to="/" className="nav-element">Home</Link>
                </li>
                <li>
                    <Link to="/missions" className="nav-element">Missions</Link>
                </li>
                <li>
                    <Link to="/weather" className="nav-element">Weather</Link>
                </li>
                <li>
                    <Link to="/rovers" className="nav-element">Photos</Link>
                </li>
            </ul>
        </nav>
    )
}
