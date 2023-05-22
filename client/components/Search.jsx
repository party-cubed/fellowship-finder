import React, { useState, useEffect } from 'react';
// import sample_data from '../../server/db/sample_data';
// import SearchDropdown from './SearchDropdown';

const Search = () => {
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({
    minAge: 0,
    maxAge: 0,
    username: ''
  });

  // useEffect(() => {
  //   fetch('/api/users')
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw response;
  //     })
  //     .then((users) => {
  //       setResults(users);
  //     })
  //     .catch((err) => {
  //       console.error('Failed to FETCH users from db:', err);
  //     });
  // }, []);

  const handleSubmit = () => {
    fetch('/api/users')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((users) => {
        const filteredUsers = users.filter((user) => {
          // apply filters, using values from filter object
          if (
            (filters.minAge && user.age < filters.minAge)
            || (filters.maxAge && user.age > filters.maxAge)
          ) {
            return false;
          }
          return true;
        });

        setResults(filteredUsers);
      })
      .catch((err) => {
        console.error('Failed to FETCH users from db:', err);
      });
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="search-options">
        <div className="age">
          <h2>Age</h2>
          <input
            name="minAge"
            type="text"
            placeholder="min. age"
            value={filters.minAge}
            onChange={handleFilterChange}
          />
          <input
            name="maxAge"
            type="text"
            placeholder="max. age"
            value={filters.maxAge}
            onChange={handleFilterChange}
          />
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        <div className="maxTravelDist" />
        <div className="sober" />
        <div className="canHost" />
        <div className="DM" />
      </div>
      {results.map((user) => (
        <div key={user.id}>{`${user.username} ${user.age}`}</div>
      ))}
    </div>
  );
};

export default Search;
