import React, { useState, useEffect, useContext } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import axios from 'axios';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  Box, Grid, Paper, Button, Typography, Container
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AddressForm from '../components/AddressForm';
import UsersSelect from '../components/UsersSelect';
import UserProvider from '../components/UserProvider';


const localizer = dayjsLocalizer(dayjs);


function Events() {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [start, setStart] = useState(dayjs(new Date()));
  const [end, setEnd] = useState(dayjs(new Date()));
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const user = useContext(UserProvider);
  console.log('users', users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('api/user/all');
        console.log('retrieved users from server');
        setUsers(data);
      } catch (err) {
        console.error('Error fetching users data: ', err);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get('api/event/all');
        const dates = data.map((event) => (
          {
            start: new Date(event.start),
            end: new Date(event.end),
            title: event.name || 'Session'
          }
        ));
        setEvents(dates);
        console.log('dates', dates);
      } catch (err) {
        console.error('Error fetching events data: ', err);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    console.log('events', events);
  }, [events]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //AXIOS REQUEST TO LOG EVENT
    console.log(address, selectedUsers, start, end);
    try {
      await axios.post('api/event', {
        start,
        end,
        name: name || 'New Session',
        description: description || '',
        address: address.street.concat(address.city, address.state, address.zip),
        hostId: 1
      });
      console.log('posted event to server');
      setAddress({
        street: '',
        city: '',
        state: '',
        zip: '',
      });
      setSelectedUsers([]);
      setStart(dayjs(new Date()));
      setEnd(dayjs(new Date()));
    } catch (err) {
      console.error('Error posting event: ', err);
    }
  };

  return (
    <Box sx={{
      flexGrow: 1, m: 0, marginTop: 0, padding: '15px', height: '80vh'
    }}
    >
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={3}>
          <Paper style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px'
          }}
          >
            <Typography variant="h4" gutterBottom>Create a new event:</Typography>
            <Container>
              <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ p: 2 }}>
                <Typography variant="h5">Start</Typography>
                <DateTimePicker
                  value={start}
                  onChange={(newDate) => setStart(newDate)}
                  sx={{ width: '90%' }}
                />
                <Typography variant="h5">End</Typography>
                <DateTimePicker
                  value={end}
                  onChange={(newDate) => setEnd(newDate)}
                  sx={{ width: '90%' }}
                />
              </LocalizationProvider>
            </Container>
            <AddressForm address={address} setAddress={setAddress} />
            <Container>
              <Typography variant="h5">Invites</Typography>
              <UsersSelect
                users={users}
                selectedUsers={selectedUsers || []}
                setSelectedUsers={setSelectedUsers}
              />
            </Container>
            <Container style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
              <Button variant="text" onClick={handleSubmit}>Add Event</Button>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper sx={{ height: '100%' }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              sx={{
                height: '100%',
                '&& .rbc-off-range-bg': {
                  background: 'black'
                }
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Events;
