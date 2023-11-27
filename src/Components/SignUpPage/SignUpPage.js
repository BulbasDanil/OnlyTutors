import './SignUpPage.css';
import logo from '../files/logo_main.png';
import {React} from 'react';
import {useHistory} from "react-router-dom";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export const SignUpPage = () => {
    const history = useHistory();
    var submit = "";
    const bcrypt = require('bcrypt');

    function setStudent() {
      submit = "student";
    }
    
    function setTutor() {
      submit = "tutor";
    }

    function handleSubmit (event) {
      event.preventDefault();

      if (submit ==="tutor")
        handleSubmitTutor(event);
      else
        handleSubmitStudent(event);
    }


    function hash_password(userPassword) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(userPassword, salt, (err, hash) => {
          return hash;
        });
      });
    }

    function handleSubmitTutor (event) {
      event.preventDefault();

      fetch('https://localhost:7185/api/users', {
        method: 'POST',
        headers: {"Content-Type":'application/json'},
        body: JSON.stringify({id:0, name:event.target.fname.value, surname: event.target.lname.value, email: event.target.email.value, phoneNumber: event.target.phone.value, password:hash_password(event.target.password.value), dateOfBirth:"1980-01-02T00:00:00", rating:0.0,imagePath:"default"}),
      }).then(response => response.json()).then(responseJson =>  {    
          history.push("/");
      });
  }


    function handleSubmitStudent (event) {
        event.preventDefault();

        fetch('https://localhost:7185/api/users', {
          method: 'POST',
          headers: {"Content-Type":'application/json'},
          body: JSON.stringify({id:0, name:event.target.fname.value, surname: event.target.lname.value, email: event.target.email.value, phoneNumber: event.target.phone.value, password:hash_password(event.target.password.value), dateOfBirth:"1980-01-02T00:00:00", rating:0.0,imagePath:"default"}),
        }).then(response => response.json()).then(responseJson =>  {    
            history.push("/");
        });
    }

  return (
    <div className='columns'>
        <div className='row1'>
          
          <div className='logo-image'>
            <img src={logo} alt='Find-a-Bull logo'/>
          </div>
          <form onSubmit={handleSubmit}>

            <div className='item signup username'>
                <h2>First name:</h2>
                <input placeholder='your first name' name="fname" required></input>
            </div>

            <div className='item signup username'>
                <h2>Last name:</h2>
                <input placeholder='your Lirst name' name="lname" required></input>
            </div>

            <div className='item signup username'>
                <h2>Email:</h2>
                <input placeholder='your email adress' name="email" type="email" required></input>
            </div>

            <div className='item signup username'>
                <h2>Phone:</h2>
                <input placeholder='your phone number' name="phone" type="tel" required></input>
            </div>

            <div className='item signup username'>
                <h2>Password:</h2>
                <input placeholder='your password' name="password" type='password' required></input>
            </div>
            <div className='login'>
                <button type='submit' className="submit-button" onClick={setStudent}>Sign Up as Student</button>
            </div>
            <div className='login sign'>
                <button type='submit' className="submit-button" onClick={setTutor}>Sign Up as Tutor</button>
            </div>
            <NavLink to='/'>
              <div className='login sign'>
                  Already have an account? Sign in!
              </div>
            </NavLink>
          </form>
        </div>
    </div>
  );
}

