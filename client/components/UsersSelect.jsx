import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

// UsersSelect Component
const UsersSelect = ({ users, selectedUsers, setSelectedUsers }) => {
  const handleUsersSelect = (event, value) => {
    setSelectedUsers(value);
  };

  return (
    <Autocomplete
      multiple
      id="users-select"
      options={users}
      getOptionLabel={(option) => option.username}
      onChange={handleUsersSelect}
      value={selectedUsers}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="users"
          placeholder="Users"
        />
      )}
    />
  );
};

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
