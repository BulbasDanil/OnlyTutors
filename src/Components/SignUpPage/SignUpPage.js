import './SignUpPage.css';
import logo from '../files/logo_main.png';
import {React} from 'react';
import {useHistory} from "react-router-dom";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export const SignUpPage = () => {
    const history = useHistory();


    function handleSubmit (event) {
        event.preventDefault();
    
        console.log(JSON.stringify({id:0, username:'', password: event.target.password.value, firstName:'', lastName:'', phone:'', email:event.target.email.value,linkedIn:'', gitHub:'',imagePath:'', bio:'',experience:'',skills:[{}]}));
        

        fetch('http://localhost:5000/Users/login', {
          method: 'POST',
          headers: {"Content-Type":'application/json'},
          body: JSON.stringify({id:0, username:'', password: event.target.password.value, firstName:'', lastName:'', phone:'', email:event.target.email.value,linkedIn:'', gitHub:'',imagePath:'', bio:'',experience:'',skills:[{}]}),
        }).then(response => response.json()).then(responseJson =>  {
    
            if(responseJson.password === event.target.password.value)
            {
                localStorage.setItem("email",event.target.email.value);
                history.push("/home");
            }
            else
                alert("Wrong Password");
        });
    }

  return (
    <div className='columns'>
        <div className='row1'>
          
          <div className='logo-image'>
            <img src={logo} alt='Find-a-Bull logo'/>
          </div>
          <form onSubmit={handleSubmit} method='POST' action='http://localhost:5000/users/'>

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
                <button type='submit' className="submit-button">Sign Up as Student</button>
            </div>
            <div className='login sign'>
                <button type='submit' className="submit-button">Sign Up as Tutor</button>
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

