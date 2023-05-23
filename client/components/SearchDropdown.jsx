import React from 'react';

const SearchDropdown = () => {
  return (
    <div className="search-dropdown">
      <div className="age">
        <h2>Age</h2>
        {/* <select className="age-menu" value={option} onChange={handleOptionChange}>
          <option value="age">Username</option>
          <option value="age">Age</option>
        </select> */}
        <input className="minAge" type="text" placeholder="min. age"></input>
        <input className="minAge" type="text" placeholder="max. age"></input>
        <button type="submit">Submit</button>
      </div>
      <div className="maxTravelDist"></div>
      <div className="sober"></div>
      <div className="canHost"></div>
      <div className="DM"></div>
    </div>
  )
};

export default SearchDropdown;
