import './SearchBar.css';
import {React} from 'react';


export const SearchBar = () => {
    return (
      <div className="SearchBar">
        <input placeholder="Find your group!"/>
        <button className="SearchButton">Search</button>
      </div>
    )
} 