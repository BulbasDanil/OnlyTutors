import './EditProfile.css';
import {React, useState} from 'react';
import Select from 'react-select'
  

export const EditProfile = (props) => {
    const [option, setOption] = useState([]);
    

    function handleSubmit (event) {  
        
        let form = event.target;
        if(localStorage.getItem('UserType') === "student") {
            fetch('http://localhost:5000/api/students', {
              method: 'PUT',
              headers: {"Content-Type":'application/json'},
              body: JSON.stringify({name:form.firstName.value,
                                    surname: form.lastName.value,
                                    email: form.email.value,
                                    phoneNumber: form.phoneNumber.value,
                                    dateOfBirth: form.dateOfBirth.value,
                                    highestLevelOfEducation: form.highestLevelOfEducation.value,
                })
            })
        } else if(localStorage.getItem('UserType') === "tutor") {
            fetch('http://localhost:5000/api/turors', {
              method: 'PUT',
              headers: {"Content-Type":'application/json'},
              body: JSON.stringify({name: form.firstName.value,
                                    surname: form.lastName.value,
                                    email: form.email.value,
                                    phoneNumber: form.phoneNumber.value,
                                    dateOfBirth: form.dateOfBirth.value,
                                    description: form.description.value,
                                    experience: form.experience.value,
                })
            })
        }
    }


    const openWindow = () => {
        document.getElementById('EditProfile').style.display = "none";
        document.getElementById('EditProfileWindow').style.display = "block";
        document.getElementById('closeBtn').style.display = "block";
    }

    const closeWindow = () => {
        document.getElementById('EditProfile').style.display = "block";
        document.getElementById('EditProfileWindow').style.display = "none";
        document.getElementById('closeBtn').style.display = "none";
    }


    return (
        <div>
            <div className='EditProfile' id='EditProfile'>
               <button className="new-button" onClick={openWindow}>Edit Your Profile</button>
            </div>
            <div className='closeBtn' id='closeBtn'>
               <button className="new-button" onClick={closeWindow}>Close window</button>
            </div>
            <div className='EditProfileWindow' id='EditProfileWindow'>
                <div className='window-header'>
                    <h2>Keep your profile updated!</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    
                    
                    <div className='email-textarea short'>
                        <label hlmlfor="FirstName">Your First Name:</label>
                        <textarea id='FirstName' placeholder={props.data.firstName} name="firstName" 
                                    required rows = {1} cols ={45} maxLength={25}></textarea>
                    </div>
                    
                    <div className='email-textarea short'>
                        <label hlmlfor="LastName">Your Last Name:</label>
                        <textarea id='LastName' placeholder={props.data.lastName} name="lastName" 
                                    required rows = {1} cols ={45} maxLength={25}></textarea>
                    </div>

                    <div className='dob-textarea short'>
                        <label hlmlfor="dob">Your Date of Birth:</label>
                        <input id='dob' placeholder={props.data.dob} name="dob" type = "date" required></input>
                    </div>

                    <div className='phone-textarea short'>
                        <label hlmlfor="phone">Your Phone Number:</label>
                        <input id='phone' placeholder={props.data.phoneNumber} name="phoneNumber" type = "tel" required></input>
                    </div>
                    
                    {(localStorage.getItem('UserType') === "student") && 
                        (<div className='email-textarea short'>
                            <label hlmlfor="email">Your Email:</label>
                            <input id='email' placeholder={props.data.email} name="email" type = "email" required></input>
                        </div>
                    )}

                    {(localStorage.getItem('UserType') === "student") && 
                        (<div className='email-textarea short'>
                            <label hlmlfor="highestLevelOfEducation">Your Education:</label>
                            <textarea id='highestLevelOfEducation' placeholder={props.data.highestLevelOfEducation} name="highestLevelOfEducation" 
                                    required rows = {1} cols ={45} maxLength={25}></textarea>
                        </div>
                    )}
                    
                    <div className='submit-button-container'>
                        <button type='submit' className="submit-button">Submit changes</button> 
                    </div>

                    {(localStorage.getItem('UserType') === "tutor") && 
                        (<div className='phone-textarea short'>
                        <label hlmlfor="phone">Phone Number:</label>
                            <textarea id='phone' placeholder={props.data.phone} name="phone" 
                                    required rows = {1} cols ={45} maxLength={25}></textarea>
                        </div>  
                    )}
                    
                    {(localStorage.getItem('UserType') === "tutor") && 
                        (<div className='bio-textarea'>
                            <label hlmlfor="description">Tell us about yourself</label>
                            <textarea id='description' placeholder={props.data.description} name="description" 
                                        required rows = {4} cols ={55} maxLength={400}></textarea>
                        </div>
                    )}
                    
                    {(localStorage.getItem('UserType') === "tutor") && 
                        (<div className='experience-textarea'>
                            <label hlmlfor="experience">Tell us about your experience</label>
                            <textarea id='experience' placeholder={props.data.experience} name="experience" 
                                        required rows = {6} cols ={55} maxLength={400}></textarea>
                        </div>)
                    }
                </form>
            </div> 
        </div>
    )
}