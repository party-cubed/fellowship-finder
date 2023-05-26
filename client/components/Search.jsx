import React, { useState, useEffect } from 'react';

const Search = ({ currUser }) => {
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({
    ageMin: '',
    ageMax: '',
    sober: 'any',
    canHost: 'any',
    DM: 'any',
    combatHeavinessMin: '',
    combatHeavinessMax: '',
    strategyHeavinessMin: '',
    strategyHeavinessMax: '',
    roleplayFocusMin: '',
    roleplayFocusMax: '',
    storyFocusMin: '',
    storyFocusMax: ''
  });

  useEffect(() => {
    fetch('/api/user/all')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((users) => {
        // console.log(currUser);
        setResults(users);
      })
      .catch((err) => {
        console.error('Failed to FETCH users from db:', err);
      });
  }, []);

  const handleSubmit = () => {
    fetch('/api/user/all')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((users) => {
        const filteredUsers = users.filter((user) => {
          const {
            ageMin,
            ageMax,
            sober,
            canHost,
            DM,
            combatHeavinessMin,
            combatHeavinessMax,
            strategyHeavinessMin,
            strategyHeavinessMax,
            roleplayFocusMin,
            roleplayFocusMax,
            storyFocusMin,
            storyFocusMax
          } = filters;

          if (
            (ageMin && user.age < ageMin)
            || (ageMax && user.age > ageMax)
            || (sober !== 'any' && user.sober.toString() !== sober)
            || (canHost !== 'any' && user.canHost.toString() !== canHost)
            || (DM !== 'any' && user.DM !== DM)
            || (combatHeavinessMin && user.combatHeaviness < combatHeavinessMin)
            || (combatHeavinessMax && user.combatHeaviness > combatHeavinessMax)
            || (strategyHeavinessMin && user.strategyHeaviness < strategyHeavinessMin)
            || (strategyHeavinessMax && user.strategyHeaviness > strategyHeavinessMax)
            || (roleplayFocusMin && user.roleplayFocus < roleplayFocusMin)
            || (roleplayFocusMax && user.roleplayFocus > roleplayFocusMax)
            || (storyFocusMin && user.storyFocus < storyFocusMin)
            || (storyFocusMax && user.storyFocus > storyFocusMax)
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

  const handleAddFriend = (currentUserId, friendUsername) => {
    fetch(`/api/user/add-friend/${currentUserId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        username: friendUsername
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if (response.ok) {
          setResults(results);
        }
      })
      .catch((err) => {
        console.error('Failed to ADD FRIEND to db:', err);
      });
  };

  const handleUnfriend = (currentUserId, enemyUsername) => {
    fetch('/api/user/unfriend/14', {
      method: 'PATCH',
      body: JSON.stringify({
        username: enemyUsername
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if (response.ok) {
          console.log('Friend removed');
        }
      })
      .catch((err) => {
        console.error('Failed to UNFRIEND in db:', err);
      });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <div className="search-options">
        <div className="age">
          <h3>Age</h3>
          <input
            name="ageMin"
            type="number"
            placeholder="min age"
            value={filters.ageMin}
            onChange={handleFilterChange}
          />
          <input
            name="ageMax"
            type="number"
            placeholder="max age"
            value={filters.ageMax}
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
        <div className="game-preferences">
          <h3>Combat Heaviness</h3>
          <input
            name="combatHeavinessMin"
            type="number"
            placeholder="min combat heaviness"
            value={filters.combatHeavinessMin}
            onChange={handleFilterChange}
          />
          <input
            name="combatHeavinessMax"
            type="number"
            placeholder="max combat heaviness"
            value={filters.combatHeavinessMax}
            onChange={handleFilterChange}
          />
          <h3>Strategy Heaviness</h3>
          <input
            name="strategyHeavinessMin"
            type="number"
            placeholder="min strat heaviness"
            value={filters.strategyHeavinessMin}
            onChange={handleFilterChange}
          />
          <input
            name="strategyHeavinessMax"
            type="number"
            placeholder="max strategy heaviness"
            value={filters.strategyHeavinessMax}
            onChange={handleFilterChange}
          />
          <h3>Roleplay Focus</h3>
          <input
            name="roleplayFocusMin"
            type="number"
            placeholder="min roleplay focus"
            value={filters.roleplayFocusMin}
            onChange={handleFilterChange}
          />
          <input
            name="roleplayFocusMax"
            type="number"
            placeholder="max roleplay focus"
            value={filters.roleplayFocusMax}
            onChange={handleFilterChange}
          />
          <h3>Story Focus</h3>
          <input
            name="storyFocusMin"
            type="number"
            placeholder="min story focus"
            value={filters.storyFocusMin}
            onChange={handleFilterChange}
          />
          <input
            name="storyFocusMax"
            type="number"
            placeholder="max story focus"
            value={filters.storyFocusMax}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      {results.length ? results.map((user) => (
        <div key={user.id}>{`id: ${user.id} ${user.username} ${user.age} sober: ${user.sober}, host: ${user.canHost}, DM: ${user.DM}, combatHeaviness: ${user.combatHeaviness}, strategyHeaviness: ${user.strategyHeaviness}, roleplayFocus: ${user.roleplayFocus}, storyFocus: ${user.storyFocus}`}
          <button onClick={() => handleAddFriend(user.id, user.username)}>Add Friend</button>
          <button onClick={() => handleUnfriend(user.id, user.username)}>Unfriend</button>
        </div>
      ))
        : <div>No results to display</div>}
    </div>
  );
};

export default Search;
