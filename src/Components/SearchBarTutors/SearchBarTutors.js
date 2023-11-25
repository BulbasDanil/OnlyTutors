import './SearchBarTutors.css';
import {React} from 'react';


export const SearchBarTutors = () => {
    return (
      <form>
          <div className="SearchBar">
            <input placeholder="Find your group!"/>
            <button className="SearchButton">Search</button>
          </div>
      </form>
    )
} 