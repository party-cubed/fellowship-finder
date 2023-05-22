import React, { useState, useEffect } from 'react';
import sample_data from '../../server/db/sample_data';

const Search = () => {
  const [results, setResults] = useState([]);
  const [option, setOption] = useState('');

  useEffect(() => {
    setResults(sample_data);
  }, []);

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  const filteredResults = results.filter((user) => {
    if (option === 'age') {
      return user.age > 60; // No filter applied for 'username'
    }
    return true;
  });

  return (
    <div>
      <select className="age-menu" value={option} onChange={handleOptionChange}>
        {/* <option value="age">Username</option> */}
        <option value="age">Age</option>
      </select>
      {filteredResults.map((user) => (
        <div key={user.id}>{user.username}</div> // Display the desired properties of each object
      ))}
    </div>
  );
};

export default Search;
