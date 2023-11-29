import './ClassTile.css';
import {React, useState} from 'react';
import photo from '../files/Default_pfp.png';

export const ClassTile = (prop) => {
    const [press, setPress] = useState(false);
    
    
    function handleClick(event) {
        event.preventDefault();
        fetch(`http://localhost:5000/api/users/`, {
          method: 'GET',
          headers: {"Content-Type":'application/json'},
        });
    }

    

    return (
        <div id="my-class" className='outer'>
            <div className="border title">
                <h1>{prop.lesson.name}</h1>
            </div>
            <div className='border subject'>
                <h1>{prop.lesson.subjectname}</h1>
            </div>
            <div className='border subject'>
                <h1>{prop.lesson.time}</h1>
            </div>
            <div className="border description">
                <h2>{prop.lesson.description}</h2>
            </div>
            
            
            <div className="students">
            {prop.lesson.students.slice(0, 5).map((student, index) => {
                return (
                    <img key={index} src={student.imagePath} alt="kreepochek"/>
                );
            })}
            </div>

            <div className="apply">
                <button onClick={handleClick}>Register for Class</button>
            </div>
        </div>
    )
} 