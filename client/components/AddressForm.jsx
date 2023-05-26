import React, { useState } from 'react';
import { TextField, Tabs, Tab, Typography, Box, Button, Container } from '@mui/material';

const AddressForm = ({ address, setAddress }) => {
  const [isinperson, setIsInPerson] = useState(0);

  const handleChange = (event, newIsInPerson) => {
    setIsInPerson(newIsInPerson);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  return (
    <div>
      <div>
        <button onClick={(event) => handleChange(event, 0)}>In Person</button>
        <button onClick={(event) => handleChange(event, 1)}>Online</button>
      </div>
      {isinperson === 0 && (
        <form noValidate autoComplete="off" style={{ width: '90%' }}>
          <label htmlFor="streetName">
            Street:
            <input
              type="text"
              name="street"
              id="streetName"
              value={address.street}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            />
          </label>
          <label htmlFor="cityName">
            City:
            <input
              type="text"
              name="city"
              id="cityName"
              value={address.city}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            />
          </label>
          <label htmlFor="stateName">
            State:
            <input
              type="text"
              name="state"
              id="stateName"
              value={address.state}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            />
          </label>
          <label htmlFor="zipName">
            Zip Code:
            <input
              type="text"
              name="zip"
              id="zipName"
              value={address.zip}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            />
          </label>
        </form>
      )}
      {isinperson === 1 && (
        <form noValidate autoComplete="off" style={{ width: '90%' }}>
          <label htmlFor="linkName">
            Link:
            <input
              type="text"
              name="link"
              id="linkName"
              value={address.link}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            />
          </label>
        </form>
      )}
    </div>

    // MUI VERSION
    // <Container>
    //   <Tabs value={isinperson} onChange={handleChange}>
    //     <Tab label="In Person" />
    //     <Tab label="Online" />
    //   </Tabs>
    //   {isinperson === 0 && (
    //     <Box component="form" noValidate autoComplete="off" sx={{ width: '90%' }}>
    //       <TextField
    //         name="street"
    //         label="Street"
    //         value={address.street}
    //         onChange={handleInputChange}
    //         sx={{ width: '100%' }}
    //       />
    //       <TextField
    //         name="city"
    //         label="City"
    //         value={address.city}
    //         onChange={handleInputChange}
    //         sx={{ width: '100%' }}
    //       />
    //       <TextField
    //         name="state"
    //         label="State"
    //         value={address.state}
    //         onChange={handleInputChange}
    //         sx={{ width: '100%' }}
    //       />
    //       <TextField
    //         name="zip"
    //         label="Zip Code"
    //         value={address.zip}
    //         onChange={handleInputChange}
    //         sx={{ width: '100%' }}
    //       />
    //     </Box>
    //   )}
    //   {isinperson === 1 && (
    //     <Box component="form" noValidate autoComplete="off" sx={{ width: '90%' }}>
    //       <TextField
    //         name="link"
    //         label="Link"
    //         value={address.link}
    //         onChange={handleInputChange}
    //         sx={{ width: '100%' }}
    //       />
    //     </Box>
    //   )}
    // </Container>
  );
};

export default AddressForm;
