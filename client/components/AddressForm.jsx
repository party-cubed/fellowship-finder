import React from 'react';

const AddressForm = ({ event, setEventValue }) => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button
          type="button"
          id="inPersonButton"
          onClick={() => setEventValue('isInPerson', !event.isInPerson)}
          style={{
            background: event.isInPerson ? 'DarkGray' : 'LightGray',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginRight: '10px'
          }}
        >
          In Person
        </button>
        <button
          type="button"
          id="onlineButton"
          onClick={() => setEventValue('isOnline', !event.isOnline)}
          style={{
            background: event.isOnline ? 'DarkGray' : 'LightGray',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: 'none'
          }}
        >
          Online
        </button>
      </div>
      {event.isInPerson && (
      <form noValidate autoComplete="off" style={{ width: '90%' }}>
        {['Street', 'City', 'State', 'Zip Code'].map((field) => (
          <div
            key={field}
            style={{
              marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}
          >
            <label htmlFor={field.toLowerCase()} style={{ marginRight: '10px' }}>
              {field}:
            </label>
            <input
              type="text"
              id={field.toLowerCase()}
              value={event[field.toLowerCase()]}
              onChange={({ target }) => setEventValue(target.id, target.value)}
              required={event.isInPerson}
              style={{
                width: '80%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
          </div>
        ))}
      </form>
      )}
      {event.isOnline && (
      <form noValidate autoComplete="off" style={{ width: '90%' }}>
        <div style={{
          marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}
        >
          <label htmlFor="link" style={{ marginRight: '10px' }}>
            Link:
          </label>
          <input
            type="text"
            id="link"
            value={event.link}
            onChange={({ target }) => setEventValue(target.id, target.value)}
            required={event.isOnline}
            style={{
              width: '80%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px'
            }}
          />
        </div>
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
