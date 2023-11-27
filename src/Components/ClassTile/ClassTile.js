import './ClassTile.css';
import {React, useState} from 'react';
import photo from '../files/Default_pfp.png';

export const ClassTile = (prop) => {
    const [press, setPress] = useState(false);
    const message = 'Please tell us about yourself and your skills, and we will forward the information to the project founder.';


    const handleClick = (e) => {
        if(!press)
            e.preventDefault();
        setPress(press ? false : true);
    }

    function handleSubmit (event) {  
        event.preventDefault();
        let form = event.target;
        let email = form.email.value;
        email = email.replace("@","%40");
        console.log(email);

        fetch(`http://localhost:5000/Projects/apply?EmailAndText=${email};${form.messageBox.value}`, {})
        console.log("EmailSent");
        setPress(press ? false : true);
      }

    const renderButton = () => {
        if(press)
        {
            return (
                <div>
                    <form onSubmit={handleSubmit} method="GET">
                        <div className = 'input' name='message'>
                            <textarea name="messageBox" defaultValue ={message}/>
                        </div>
                        <div>
                            <input name="email" value="bulbas.danil@gmail.com" style={{display:"none"}}></input>
                        </div>
                        <div className='apply'>
                            <button type='submit'>Send</button>
                        </div>
                    </form>
                </div>
            )
        }
        else 
        {
            return (
                    <div className='apply'>
                        <button onClick = {handleClick}>Register for course</button>
                    </div>
                )
        }
    }

    return (
        <div className='outer'>
            <div className="border title">
                <h1>{prop.lesson.name}</h1>
            </div>
            <div className='border subject'>
                <h1>{prop.lesson.subject}</h1>
            </div>
            <div className='border subject'>
                <h1>{prop.lesson.time}</h1>
            </div>
            <div className="border description">
                <h2>{prop.lesson.description}</h2>
            </div>
            
            <div className = "students">
                <img src={photo} alt="kreepochek"/>
                <img src={photo} alt="kreepochek"/>
                <img src={photo} alt="kreepochek"/>

            </div>

            <div className="apply">
                <button>Register for Class</button>
            </div>
        </div>
    )
} 