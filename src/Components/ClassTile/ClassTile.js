import './ClassTile.css';
import {React, useState} from 'react';
import photo from '../files/Default_pfp.png';

export const ClassTile = (prop) => {
    const [press, setPress] = useState(false);

    
    // if(prop.lesson.students.some(user => user.id === localStorage.getItem("UserId"))) {
    // function checkMyClass() {
    //     if(prop.lesson.students.some(user => user.id === 131)) {
    //         console.log("class changed");
    //         document.getElementById("my-class").style.backgroundColor = "red";
    //     }
    // }

    

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
                    <img key={index} src={photo} alt="kreepochek"/>
                );
            })}
            </div>

            <div className="apply">
                <button>Register for Class</button>
            </div>
        </div>
    )
} 