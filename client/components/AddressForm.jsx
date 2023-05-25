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
    <Container>
      <Tabs value={isinperson} onChange={handleChange}>
        <Tab label="In Person" />
        <Tab label="Online" />
      </Tabs>
      {isinperson === 0 && (
        <Box component="form" noValidate autoComplete="off" sx={{ width: '90%' }}>
          <TextField
            name="street"
            label="Street"
            value={address.street}
            onChange={handleInputChange}
            sx={{ width: '100%' }}
          />
          <TextField
            name="city"
            label="City"
            value={address.city}
            onChange={handleInputChange}
            sx={{ width: '100%' }}
          />
          <TextField
            name="state"
            label="State"
            value={address.state}
            onChange={handleInputChange}
            sx={{ width: '100%' }}
          />
          <TextField
            name="zip"
            label="Zip Code"
            value={address.zip}
            onChange={handleInputChange}
            sx={{ width: '100%' }}
          />
        </Box>
      )}
      {isinperson === 1 && (
        <Box component="form" noValidate autoComplete="off" sx={{ width: '90%' }}>
          <TextField
            name="link"
            label="Link"
            value={address.link}
            onChange={handleInputChange}
            sx={{ width: '100%' }}
          />
        </Box>
      )}
    </Container>
  );
};

export default AddressForm;
