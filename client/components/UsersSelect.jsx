import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

// UsersSelect Component
const UsersSelect = ({ users, selectedUsers, setSelectedUsers }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const addUser = ({ target }) => {
    const user = target.selectedOptions[0].value;
    console.log(user);
    console.log(selectedUsers);
    setSelectedUsers([...selectedUsers, user]);
  };

  const removeUser = (username) => {
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser !== username
    );
    setSelectedUsers(updatedUsers);
  };

  return (
    <div style={{ width: '90%' }}>
      <label htmlFor="users-dropdown">Invites:</label>
      <div>
        <button onClick={()=>{setDropdownOpen(!isDropdownOpen)}}>
          {isDropdownOpen ? 'Users ▲' : 'Users ▼'}
        </button>
      </div>
      {isDropdownOpen && (
        <div>
          <select
            multiple
            id="users-dropdown"
            value={selectedUsers}
            onChange={addUser}
            style={{ width: '100%' }}
          >
            {users.map((user) => (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
          <ul>
            {selectedUsers.map((selectedUser) => (
              <li key={selectedUser}>
                {selectedUser}
                <button onClick={() => removeUser(selectedUser)}>
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// // MUI VERSION
// const UsersSelect = ({ users, selectedUsers, setSelectedUsers }) => {
//   const handleUsersSelect = (event, value) => {
//     setSelectedUsers(value);
//   };

//   return (
//     <Autocomplete
//       multiple
//       id="users-select"
//       options={users}
//       getOptionLabel={(option) => option.username}
//       onChange={handleUsersSelect}
//       value={selectedUsers}
//       sx={{ width: '90%' }}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           variant="standard"
//           label="invites"
//           placeholder="Users"
//         />
//       )}
//     />
//   );
// };

export default UsersSelect;


/*
in the parent component, use these:

const [users, setUsers] = useState([]);
const [selectedUsers, setSelectedUsers] = useState(null);

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get('api/user/all');
      setUsers(data);
    } catch (err) {
      console.error('Error fetching users data: ', err);
    }
  };
  fetchUsers();
}, []);

<UsersSelect users={users} selectedUsers={selectedUsers} selectedUsers={setSelectedUsers} />
*/
