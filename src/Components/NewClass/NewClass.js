import './NewClass.css';
import {React, useState} from 'react';

const all_options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'perv', label: 'perv' },
    { value: 'vtor', label: 'vtor' },
    { value: 'three', label: 'three' },
    { value: 'four', label: 'four' },
  ]


export const NewProject = () => {
    const [option, setOption] = useState([]);


    const openWindow = () => {
        document.getElementById('newProjectBtn').style.display = "none";
        document.getElementById('newProjectWindow').style.display = "block";
        document.getElementById('closeBtn').style.display = "block";
    }

    const closeWindow = () => {
        document.getElementById('newProjectBtn').style.display = "block";
        document.getElementById('newProjectWindow').style.display = "none";
        document.getElementById('closeBtn').style.display = "none";
    }


    function handleSubmit (event) {  
        
        let form = event.target;
        fetch('http://localhost:5000/api/lessons/addlesson', {
          method: 'POST',
          headers: {"Content-Type":'application/json'},
          body: JSON.stringify({id:0,
            name:form.name.value,
            description: form.description.value,
            // subject: form.selectedSubject.value,
            subjectId: 1,
            time: form.date.value,
            tutorid: parseInt(localStorage.getItem("UserId"), 10),
        }),
        })
      }

    const subjectOptions = [
        'Programming', 'Calculus', 'English', 'Statistics', 'Chemistry',
        'Physics'
    ];

    return (
        <div>
            <div className='newProjectBtn' id='newProjectBtn'>
               <button className="new-button" onClick={openWindow}>Add your class</button>
            </div>
            <div className='closeBtn' id='closeBtn'>
               <button className="new-button" onClick={closeWindow}>Close window</button>
            </div>
            <div className='newProjectWindow' id='newProjectWindow'>
                <div className='window-header'>
                    <h2>Add your project so others can see it!</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='name-textarea'>
                        <label hlmlfor="name">How do you want to name your class?</label>
                        <textarea id='name' placeholder="Name of your class" name="name" 
                                    required rows = {1} cols ={45} maxLength={25}></textarea>
                    </div>
                    <div className="select-container">
                        <label>What is the subject of the class?</label>
                            <select name="selectedSubject">
                                {subjectOptions.map((subject) => (
                                    <option key={subject} value={subject}>
                                    {subject}
                                    </option>
                                ))}
                            </select>
                    </div>
                    <div className='name-textarea'>
                        <label hlmlfor="date">When your class is happening?</label>
                        <input type="datetime-local" name="date"/>
                    </div>

                    <div className='description-textarea'>
                        <label hlmlfor="description">What is your class about and who are you looking for?</label>
                        <textarea id='description' placeholder="Brifly describe the topic covered during the class" name="description" 
                                    required rows = {6} cols ={55} maxLength={400}></textarea>
                    </div>
                    
                    <select multiple={true} value={option} style={{display: 'none'}}/>
                    <div className='submit-button-container'>
                        <button type='submit' className="submit-button">Create your class</button> 
                    </div>
                </form>
            </div> 
        </div>
    )
}

