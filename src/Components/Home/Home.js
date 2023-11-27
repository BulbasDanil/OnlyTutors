import './Home.css';
import {SearchBarClasses} from '../SearchBarClasses/SearchBarClasses';
import {ClassTile} from '../ClassTile/ClassTile';
import {NewProject} from '../NewClass/NewClass';
import {React, useState, useEffect} from 'react';

export const Home = () => {
  localStorage.setItem("ProfileId", localStorage.getItem("UserId"));
  const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/api/lessons",{
      method: "GET",
      mode: "cors"
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {
      if(!jsonResponse) {
        return [];
      }
      setProjects(jsonResponse);
    })
    }, [])
  
    const updateParentState = (str) => {
      console.log("str")
      fetch(`http://localhost:5000/api/lessons/search/${str}`,{
      method: "GET"
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {
      if(!jsonResponse) {
        return [];
      }
      setProjects(jsonResponse);
    })
    };

  
  return (
    <div className="body">

      <div className="content">
        <SearchBarClasses updateParentState={updateParentState}/>
        <div className="projects">
            {projects.map((item) => {
              return (
                <div class = "item">
                  <ClassTile project={item}/>
                </div>
              )
            })}
          
          {/* <div className = "item">
            <ClassTile project = {{name: 'Database Design', description: 'This course covers the fundamentals and applications of database management systems, including data models, relational database design, query languages, and web-based database applications.'}}/>
          </div> 
          <div className = "item">
            <ClassTile project = {{name: 'Database Design', description: 'This course covers the fundamentals and applications of database management systems, including data models, relational database design, query languages, and web-based database applications.'}}/>
          </div> 
          <div className = "item">
            <ClassTile project = {{name: 'Database Design', description: 'This course covers the fundamentals and applications of database management systems, including data models, relational database design, query languages, and web-based database applications.'}}/>
          </div>  */}
          
        </div>
      </div>
      { //localStorage.setItem('UserType', "tutor/student"); 
      localStorage.getItem('UserType') === "tutor" && (
        <div className='new-project'>
              <NewProject />
        </div>
      )}
    </div>
  );
}

