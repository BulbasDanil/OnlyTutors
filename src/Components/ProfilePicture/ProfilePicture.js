import './ProfilePicture.css';
import {React} from 'react';
import profile_pic from '../files/Default_pfp.png';

export const ProfilePicture = () => {
    return (
        <div className = 'profile'>
            <img src={profile_pic} alt='Profile'/>
        </div>
    )
}