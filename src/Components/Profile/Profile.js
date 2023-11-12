import './Profile.css';
import profile_pic from '../files/Default_pfp.png';
import {React, useState, useEffect } from 'react';
import { EditProfile } from '../EditProfile/EditProfile';

export const Profile = () => {

  const [data, setData] = useState({});


  useEffect(() => {
    fetch(`http://localhost:5000/Users/email?email=${localStorage.getItem("email").replace("@","%40")}`).then(response => {
        return response.json()
      }).then(jsonResponse => {
        if(!jsonResponse) {
          return [];
      }
      else
        setData(jsonResponse);
      
    })
  }, []);

  const handleLoad = () => {
    fetch(`http://localhost:5000/Users/email?email=${localStorage.getItem("email").replace("@","%40")}`).then(response => {
        return response.json()
      }).then(jsonResponse => {
        if(!jsonResponse) {
          return [];
      }
      else
        setData(jsonResponse);
      
    })
  }

  const displayInfo = () => {
    if(data.profile == 1) {
      return (
        <div className='skills profile-skills'>
          <button>Class 1</button>
          <button>Class 2</button>
        </div>
      )
    }
    else {
      return (
        <div className='skills profile-skills'>
          <button>Class 3</button>
          <button>Class 4</button>
        </div>
      )
    }
  }

  window.addEventListener('onClick', handleLoad);


  return (
      <div className='columns'>
        <div className='row1'>
          
          <div className='item profile-image'>
            <img src={profile_pic} alt='profile_picture'/>
          </div>

          <div className='item profile-name'>
            <h2>{data.username}</h2>
          </div>

          <div className='item profile-contact'>
            <h2>Contacts:<br/>Email: {data.email}<br/> Phone: {data.phone}<br/> Date of Birth: {data.dob} <br/> </h2>
          </div>
        </div>
        <div className='row2'>
          <div className='item profile-description'>
            <h2>{data.bio}</h2>
          </div>
          {displayInfo}
          
          <div className='item profile-experience'>
            <h2>{data.experience}</h2>
          </div>
        </div>
        <div className='new-project'>
            <EditProfile data={data}/>
        </div>    
      </div>
  );
}

