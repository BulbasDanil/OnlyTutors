import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './TutorTile.css';
import {React, useState} from 'react';

export const TutorTile = (prop) => {
    const [press, setPress] = useState(false);

    function handleClick() {
        localStorage.setItem("ProfileId", prop.tutor.userid);
    }

    return (
        <div className='outer'>
            <div className="border title">
                <h1>{prop.tutor.name}</h1>
            </div>
            <div className='border photo'>
                <img src={prop.tutor.photo} alt="pidor photo"/>
            </div>
            <div className="border description">
                <h2>{prop.tutor.description}</h2>
            </div>
            
            <div className="apply">
                <NavLink to='/profile'>
                    <button onClick={handleClick} >View Tutor's Full Profile</button>
                </NavLink>
            </div>
        </div>
    )
} 