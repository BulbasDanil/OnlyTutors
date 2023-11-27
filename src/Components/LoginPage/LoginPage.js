import './LoginPage.css';
import logo from '../files/logo_main.png';
import {React} from 'react';
import {useHistory} from "react-router-dom";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
 

export const LoginPage = () => {
    const history = useHistory();

    function handleSubmit (event) {
        event.preventDefault();
    
        fetch(`https://localhost:7185/api/users/${event.target.email.value}/${event.target.password.value}`, {
          method: 'GET',
          headers: {"Content-Type":'application/json'},
        }).then(response => response.json()).then(responseJson =>  {
    
            if(responseJson.userId != -1)
            {
                localStorage.setItem("UserId",responseJson.userId);
                localStorage.setItem("UserType",responseJson.userType);
                history.push("/home");
            }
            else
            {
              alert("Wrong Password");
            }
                
        });
    }

  return (
    <div className='columns'>
        <div className='row1'>
          
          <div className='logo-image'>
            <img src={logo} alt='OnlyTutors logo'/>
          </div>
          <form onSubmit={handleSubmit} method='POST' action='http://localhost:5000/users/'>
            <div className='item username login'>
                <h2>Email:</h2>
                <input placeholder='your email adress' name="email" type="email" required></input>
            </div>

            <div className='item login password'>
                <h2>Password:</h2>
                <input placeholder='your password' name="password" type='password' required></input>
            </div>
            <div className='login'>
                <button type='submit' className="submit-button">Sign in</button>
            </div>
            <NavLink to='/Sign-Up'>
              <div className='login sign'>
                  Create a New Account
              </div>
            </NavLink>
          </form>
        </div>
    </div>
  );
}

