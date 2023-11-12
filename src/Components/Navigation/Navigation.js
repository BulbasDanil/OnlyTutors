import './Navigation.css';
import logomain from '../files/logo_main.bmp';
import {ProfilePicture} from '../ProfilePicture/ProfilePicture';
import {NavLink} from "react-router-dom";

export const Navigation = () => {
  return (
      <div className="nav">
        <div className="nav-item">
          <div>
            <NavLink to='/home'>
                <a style={{textDecoration: 'none'}}>Classes</a>
            </NavLink>
          </div>
          
          <div>
            <NavLink to='/tutors'>
                <a style={{textDecoration: 'none'}}>Tutors</a>
            </NavLink>
          </div>
        </div>

        <div className="nav-item">
          <h1>OnlyTutors</h1>
        </div>

        <div className="nav-item">
          <NavLink to='/profile'>
            <div className='profile'>
              <ProfilePicture />
            </div>
          </NavLink>
        </div>

        
      </div>
  );
}

