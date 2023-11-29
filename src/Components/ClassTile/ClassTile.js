import './ClassTile.css';
import {React, useState} from 'react';
import photo from '../files/Default_pfp.png';

export const ClassTile = (prop) => {
    const [press, setPress] = useState(false);
    
    
    function handleClick(event) {
        event.preventDefault();
        fetch(`http://localhost:5000/api/lessons/addstudent?studentid=${localStorage.getItem("UserId")}&lessonid=${prop.lesson.id}`, {
          method: 'POST',
          headers: {"Content-Type":'application/json'},
        });

        window.location.reload();
    }

    function handleClickUnregister(event) {
        event.preventDefault();
        fetch(`http://localhost:5000/api/lessons/removestudent?studentid=${localStorage.getItem("UserId")}&lessonid=${prop.lesson.id}`, {
          method: 'DELETE',
          headers: {"Content-Type":'application/json'},
        });

        window.location.reload();
    }

    function renderButton() {
        console.log("13123", prop.lesson.students.some(user => user.id == localStorage.getItem("UserId")));
        if (prop.lesson.students.length !== 0 && prop.lesson.students.some(user => user.id == localStorage.getItem("UserId"))) {
            return (
                <button onClick={handleClickUnregister}>Unregister from Class</button>
            )
        } else {
            return (
                <button onClick={handleClick}>Register for Class</button>
            )
        }
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
                <h1>{prop.lesson.time !== undefined && (prop.lesson.time.substring(11, 16) + " " + prop.lesson.time.substring(0, 10))}</h1>
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
                { renderButton()}
            </div>
        </div>
    )
} 