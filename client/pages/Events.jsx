import React, { useState, useEffect, useContext } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import axios from 'axios';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  Box, Grid, Paper, Button, Typography, Container, TextField
} from '@mui/material';
import EventDialog from '../components/EventDialog';
import EventForm from '../components/EventForm';


const localizer = dayjsLocalizer(dayjs);


function Events() {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [event, setEvent] = useState({
    title: '',
    description: '',
    start: dayjs(new Date()),
    end: dayjs(new Date()),
    selectedUsers: null,
    selectedEvent: null,
    address: {
      street: '',
      city: '',
      state: '',
      zip: ''
    }
  });

  const setEventValue = (key, value) => {
    setEvent((prevEvent) => ({ ...prevEvent, [key]: value }));
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get('api/user/all');
      setUsers(data);
      console.log('retrieved users from server', data);
    } catch (err) {
      console.error('Error fetching users data: ', err);
    }
  };

  const fetchEvents = async () => {
    try {
      const { data } = await axios.get('api/event/all');
      const dates = data.map((event) => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }));
      setEvents(dates);
      console.log('retrieved dates from server', dates);
    } catch (err) {
      console.error('Error fetching events data: ', err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchEvents();
  }, []);

  const handleSubmit = async () => {
    console.log(event);
    try {
      await axios.post('api/event', {
        title: event.title || 'Session',
        start: event.start,
        end: event.end,
        description: '',
        address: event.address.street.length
          ? event.address.street.concat('|', event.address.city, '|', event.address.state, '|', event.address.zip)
          : event.address.link || 'No address',
        hostId: 1
      });
      console.log('posted event to server');
      setEventValue('title', '');
      setEventValue('start', dayjs(new Date()));
      setEventValue('end', dayjs(new Date()));
      setEventValue('address', { street: '', city: '', state: '', zip: '' });
      setEventValue('selectedUsers', []);
      fetchEvents();
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
            <Typography variant="h5" gutterBottom>Create a new event:</Typography>
            <EventForm event={event} setEventValue={setEventValue} users={users} />
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
              onSelectEvent={(key) => {
                console.log(key);
                setEventValue('selectedEvent', key);
              }}
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
      <EventDialog
        event={event.selectedEvent}
        onClose={() => setEventValue('selectedEvent', null)}
        fetchEvents={fetchEvents}
        users={users}
      />
    </Box>
  );
}

export default Events;
