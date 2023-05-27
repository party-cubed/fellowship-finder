import { useEffect } from 'react';
import {
  Box, Grid, Paper, Button, Typography, Container, TextField
} from '@mui/material';
import dayjs from 'dayjs';
import DateSelect from './DateSelect';
import AddressForm from './AddressForm';
import UsersSelect from './UsersSelect';


const EventForm = ({ event, setEventValue, users }) => {
  if (!event) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <form noValidate autoComplete="off" style={{ width: '90%' }}>
          <label htmlFor="eventName">
            Event Name:
            <input
              type="text"
              id="eventName"
              name="link"
              value={event ? event.title : ''}
              onChange={(event) => setEventValue('title', event.target.value)}
              style={{ width: '100%' }}
            />
          </label>
        </form>
      </div>
      <div>
        <DateSelect date={event ? dayjs(event.start) : dayjs(new Date())} label="Start" setDate={(date) => setEventValue('start', date)} />
        <DateSelect date={event ? dayjs(event.end) : dayjs(new Date())} label="End" setDate={(date) => setEventValue('end', date)} />
      </div>
      <AddressForm address={event ? event.address : ''} setAddress={(address) => setEventValue('address', address)} style={{ width: '90%' }} />
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <UsersSelect
          users={users || []}
          label="Invites"
          selectedUsers={event.selectedUsers || []}
          setSelectedUsers={(selectedUsers) => setEventValue('selectedUsers', selectedUsers)}
        />
      </div>
    </>


    // MUI VERSION
    // <>
    //   <Container sx={{ marginBottom: '20px' }}>
    //     <Box component="form" noValidate autoComplete="off" sx={{ width: '90%' }}>
    //       <TextField
    //         name="link"
    //         label="Event Name"
    //         value={event ? event.title : ''}
    //         onChange={({ target: { value } }) => setEventValue('title', value)}
    //         sx={{ width: '100%' }}
    //       />
    //     </Box>
    //   </Container>
    //   <Container>
    //     <DateSelect date={event ? dayjs(event.start) : dayjs()} label="Start" setSelectedDate={(date) => setEventValue('start', date)} />
    //     <DateSelect date={event ? dayjs(event.end) : dayjs()} label="End" setSelectedDate={(date) => setEventValue('end', date)} />
    //   </Container>
    //   <AddressForm address={event ? event.address : ''} setAddress={(address) => setEventValue('address', address)} sx={{ width: '90%' }} />
    //   <Container sx={{ marginTop: '20px', marginBottom: '20px' }}>
    //     <UsersSelect
    //       users={users || []}
    //       label="Invites"
    //       selectedUsers={event.selectedUsers || []}
    //       setSelectedUsers={(selectedUsers) => setEventValue('selectedUsers', selectedUsers)}
    //     />
    //   </Container>
    // </>
  );
};

export default EventForm;
