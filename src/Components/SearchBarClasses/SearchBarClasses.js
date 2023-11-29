import './SearchBarClasses.css';
import {React} from 'react';


export const SearchBarClasses = ({ updateParentState }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    updateParentState(form.searchstr.value);
  };


    return (
      <form onSubmit={handleSubmit}>
          <div className="SearchBar">
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
            <span class="switch-label-text">Your Classes</span>
            <input name="searchstr" placeholder="Find your group!"/>
            <button className="SearchButton">Search</button>
          </div>
      </form>
    )
} 