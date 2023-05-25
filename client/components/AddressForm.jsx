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
      <Typography variant="h5">Address</Typography>
      <Tabs value={isinperson} onChange={handleChange}>
        <Tab label="In Person" />
        <Tab label="Online" />
      </Tabs>
      {isinperson === 0 && (
        <Box component="form" noValidate autoComplete="off">
          <TextField
            name="street"
            label="Street"
            value={address.street}
            onChange={handleInputChange}
          />
          <TextField
            name="city"
            label="City"
            value={address.city}
            onChange={handleInputChange}
          />
          <TextField
            name="state"
            label="State"
            value={address.state}
            onChange={handleInputChange}
          />
          <TextField
            name="zip"
            label="Zip Code"
            value={address.zip}
            onChange={handleInputChange}
          />
        </Box>
      )}
      {isinperson === 1 && (
        <Box>
          <TextField
            name="link"
            label="Link"
            value={address.link}
            onChange={handleInputChange}
          />
        </Box>
      )}
    </Container>
  );
};

export default AddressForm;
