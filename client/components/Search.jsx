import React, { useState, useEffect } from 'react';
// import sample_data from '../../server/db/sample_data';
// import SearchDropdown from './SearchDropdown';

const Search = () => {
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({
    minAge: 0,
    maxAge: 0,
    maxTravelDist: 0,
    sober: 'any',
    canHost: 'any',
    DM: 'any'
  });

  useEffect(() => {
    fetch('/api/users')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((users) => {
        setResults(users);
      })
      .catch((err) => {
        console.error('Failed to FETCH users from db:', err);
      });
  }, []);

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
          const {
            minAge, maxAge, sober, canHost, DM
          } = filters;
          // apply filters using values from filter object
          if (
            (minAge && user.age < minAge)
            || (maxAge && user.age > maxAge)
            || (sober !== 'any' && user.sober.toString() !== sober)
            || (canHost !== 'any' && user.canHost.toString() !== canHost)
            || (DM !== 'any' && user.DM !== DM)
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
    const {
      name, value, type, checked
    } = e.target;
    const filterValue = type === 'checkbox' ? checked : value;
    setFilters({ ...filters, [name]: filterValue });
  };

  return (
    <div>
      <div className="search-options">
        <div className="age">
          <h3>Age</h3>
          <input
            name="minAge"
            type="text"
            placeholder="min age"
            value={filters.minAge}
            onChange={handleFilterChange}
          />
          <input
            name="maxAge"
            type="text"
            placeholder="max age"
            value={filters.maxAge}
            onChange={handleFilterChange}
          />
        </div>
        <div className="sober">
          <h3>Sober</h3>
          <select
            name="sober"
            value={filters.sober.toString()}
            onChange={handleFilterChange}
          >
            <option value="any">Any</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="can-host">
          <h3>Can Host</h3>
          <select
            name="canHost"
            value={filters.canHost.toString()}
            onChange={handleFilterChange}
          >
            <option value="any">Any</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="DM">
          <h3>DM</h3>
          <select
            name="DM"
            value={filters.DM}
            onChange={handleFilterChange}
          >
            <option value="any">Any</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
            <option value="maybe">Maybe</option>
          </select>
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      {results.map((user) => (
        <div key={user.id}>{`${user.username} ${user.age} sober: ${user.sober}, host: ${user.canHost}, DM: ${user.DM}`}</div>
      ))}
    </div>
  );
};

export default Search;
