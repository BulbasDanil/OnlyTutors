import './SearchBarClasses.css';
import {React} from 'react';


export const SearchBarClasses = () => {
    return (
      <form>
          <div className="SearchBar">
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
            <span class="switch-label-text">Your Classes</span>
            <input placeholder="Find your group!"/>
            <button className="SearchButton">Search</button>
          </div>
      </form>
    )
} 