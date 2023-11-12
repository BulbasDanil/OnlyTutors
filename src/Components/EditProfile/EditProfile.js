import './EditProfile.css';
import {React, useState} from 'react';
import Select from 'react-select'
  

export const EditProfile = (props) => {
    const [option, setOption] = useState([]);
    

    function handleSubmit (event) {  
        
        let form = event.target;
        fetch('http://localhost:5000/Users/update', {
          method: 'POST',
          headers: {"Content-Type":'application/json'},
          body: JSON.stringify({username:form.username.value,firstName: form.firstName.value,email: localStorage.getItem("email"), lastName: form.lastName.value, bio: form.bio.value, phone: form.phone.value, linkedIn: form.linkedIn.value, gitHub: form.gitHub.value, experience: form.experience.value})
        })
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
                        <label hlmlfor="phone">Phone Number:</label>
                        <textarea id='phone' placeholder={props.data.phone} name="phone" 
                                    required rows = {1} cols ={45} maxLength={25}></textarea>
                    </div>
                    
                    <div className='specialty-textarea short'>
                        <label hlmlfor="specialty">Your Specialty:</label>
                        <textarea id='specialty' placeholder={props.data.specialty} name="specialty" 
                                   required rows = {1} cols ={45} maxLength={40}></textarea>
                    </div>
                    <div className='submit-button-container'>
                        <button type='submit' className="submit-button">Submit changes</button> 
                    </div>
                    
                    <div className='bio-textarea'>
                        <label hlmlfor="bio">Tell us about yourself</label>
                        <textarea id='bio' placeholder={props.data.bio} name="bio" 
                                    required rows = {4} cols ={55} maxLength={400}></textarea>
                    </div>
                    
                    <div className='experience-textarea'>
                        <label hlmlfor="experience">Tell us about your experience</label>
                        <textarea id='experience' placeholder={props.data.experience} name="experience" 
                                    required rows = {6} cols ={55} maxLength={400}></textarea>
                    </div>
                </form>
            </div> 
        </div>
    )
}