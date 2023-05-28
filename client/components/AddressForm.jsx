import React, { useState } from 'react';
import { TextField, Tabs, Tab, Typography, Box, Button, Container } from '@mui/material';

const AddressForm = ({ event, setEventValue }) => {

  return (
    <div>
      <div>
        <label htmlFor="inPersonCheckbox">
          <input
            type="checkbox"
            id="inPersonCheckbox"
            checked={event.isInPerson}
            onChange={() => setEventValue('isInPerson', !event.isInPerson)}
          />
          In Person
        </label>
        <label htmlFor="onlineCheckbox">
          <input
            type="checkbox"
            id="onlineCheckbox"
            checked={event.isOnline}
            onChange={() => setEventValue('isOnline', !event.isOnline)}
          />
          Online
        </label>
      </div>
      {event.isInPerson && (
        <form noValidate autoComplete="off" style={{ width: '90%' }}>
          <label htmlFor="street">
            Street:
            <br />
            <input
              type="text"
              id="street"
              value={event.street}
              onChange={({target}) => setEventValue(target.id, target.value)}
              required={event.isInPerson}
            />
          </label>
          <br />
          <label htmlFor="city">
            City:
            <br />
            <input
              type="text"
              id="city"
              value={event.city}
              onChange={({target}) => setEventValue(target.id, target.value)}
              required={event.isInPerson}
            />
          </label>
          <br />
          <label htmlFor="state">
            State:
            <br />
            <input
              type="text"
              id="state"
              value={event.state}
              onChange={({target}) => setEventValue(target.id, target.value)}
              required={event.isInPerson}
            />
          </label>
          <br />
          <label htmlFor="zip">
            Zip Code:
            <br />
            <input
              type="text"
              id="zip"
              value={event.zip}
              onChange={({target}) => setEventValue(target.id, target.value)}
              required={event.isInPerson}
            />
          </label>
          <br />
        </form>
      )}
      {event.isOnline && (
        <form noValidate autoComplete="off" style={{ width: '90%' }}>
          <label htmlFor="link">
            Link:
            <br />
            <input
              type="text"
              id="link"
              value={event.link}
              onChange={({target}) => setEventValue(target.id, target.value)}
              required={event.isOnline}
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
