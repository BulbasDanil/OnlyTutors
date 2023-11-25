import './Home.css';
import {SearchBarClasses} from '../SearchBarClasses/SearchBarClasses';
import {ClassTile} from '../ClassTile/ClassTile';
import {NewProject} from '../NewClass/NewClass';
import {React, useState, useEffect} from 'react';

export const Home = () => {
  const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/Classes",{
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
  
  
  return (
    <div className="body">

      <div className="content">
        <SearchBarClasses />
        <div className="projects">
            {projects.map((item) => {
              return (
                <div class = "item">
                  <ClassTile project={item}/>
                </div>
              )
            })}
          
          <div className = "item">
            <ClassTile project = {{name: 'Database Design', description: 'This course covers the fundamentals and applications of database management systems, including data models, relational database design, query languages, and web-based database applications.'}}/>
          </div> 
          <div className = "item">
            <ClassTile project = {{name: 'Database Design', description: 'This course covers the fundamentals and applications of database management systems, including data models, relational database design, query languages, and web-based database applications.'}}/>
          </div> 
          <div className = "item">
            <ClassTile project = {{name: 'Database Design', description: 'This course covers the fundamentals and applications of database management systems, including data models, relational database design, query languages, and web-based database applications.'}}/>
          </div> 
          
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

