import './TutorTile.css';
import {React, useState} from 'react';

export const TutorTile = (prop) => {
    const [press, setPress] = useState(false);


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
                <button>View Tutor's Full Profile</button>
            </div>
        </div>
    )
} 