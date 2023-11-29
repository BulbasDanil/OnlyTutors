import './TutorsPage.css';
import {SearchBarTutors} from '../SearchBarTutors/SearchBarTutors';
import profile_pic from '../files/Default_pfp.png';
import {TutorTile} from '../TutorTile/TutorTile';
import {NewProject} from '../NewClass/NewClass';
import {React, useState, useEffect} from 'react';

export const TutorsPage = () => {
  localStorage.setItem("ProfileId", localStorage.getItem("UserId"));
  const [tutors, setTutors] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/api/tutors",{
    method: "GET",
    mode: "cors"
  }).then(response => {
    return response.json()
  }).then(jsonResponse => {
    if(!jsonResponse) {
      return [];
    }
    setTutors(jsonResponse);
  })
  }, [])

  const updateParentState = (str) => {
    fetch(`http://localhost:5000/tutors/search/${str}`,{
    method: "GET"
  }).then(response => {
    return response.json()
  }).then(jsonResponse => {
    if(!jsonResponse) {
      return [];
    }
    setTutors(jsonResponse);
  })
  };
  
  
  return (
    <div className="body">

      <div className="content">
        <SearchBarTutors updateParentState={updateParentState}/>
        <div className="tutors">
            {tutors.map((item) => {
              return (
                <div class = "item">
                  <TutorTile tutor={item}/>
                </div>
              )
            })}
          
          {/* <div className = "item">
            <TutorTile tutor = {{name: 'Yaroslav ZZZ', photo: {profile_pic}, description: 'proper evening routine with bong fifa chess and weed 69$/gramm'}}/>
          </div> 
          <div className = "item">
            <TutorTile tutor = {{name: 'Sex instructor', userid: 101, photo: {profile_pic}, description: 'Podnyal pripodnyal vzyal za ruku opustil podoshel pripodnyal vzyal podnyal'}}/>
          </div> 
          <div className = "item">
            <TutorTile tutor = {{name: 'curse 666', photo: profile_pic, description: 'a mozhno zaiti k tebe v kvartiry: yes or yes'}}/>
          </div>  */}
          
        </div>
      </div>
    </div>
  );
}

