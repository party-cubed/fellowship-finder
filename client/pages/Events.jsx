import React, { useState, useEffect } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import axios from 'axios';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  Box, Grid, Paper, Button, Typography, Container
} from '@mui/material';
import EventDialog from '../components/EventDialog';
import EventForm from '../components/EventForm';


const localizer = dayjsLocalizer(dayjs);


function Events() {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const initialEventState = {
    title: '',
    start: dayjs(),
    end: dayjs(),
    street: '',
    city: '',
    state: '',
    zip: '',
    link: '',
    description: '',
    selectedUsers: [],
  };
  const [event, setEvent] = useState(initialEventState);

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
      // eslint-disable-next-line no-shadow
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
    try {
      await axios.post('api/event', {
        ...event,
        title: event.title || 'Session',
        hostId: 1
      });
      console.log('posted event to server');
      setEvent(initialEventState);
      fetchEvents();
    } catch (err) {
      console.error('Error posting event: ', err);
    }
  };

  return (
    <div style={{
      flexGrow: 1, margin: 0, marginTop: 0, padding: '15px', height: '80vh'
    }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', height: '100%' }}>
        <div style={{
          gridColumn: '1 / 2', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}
        >
          <h5>Create a new event:</h5>
          <EventForm event={event} setEventValue={setEventValue} users={users} />
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
            <button onClick={handleSubmit}>Add Event</button>
          </div>
        </div>
        <div style={{ gridColumn: '2 / 3' }}>
          <div style={{ height: '100%' }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              onSelectEvent={(key) => {
                setEventValue('selectedEvent', key);
              }}
              style={{
                height: '100%',
                '&& .rbc-off-range-bg': {
                  background: 'black'
                }
              }}
            />
          </div>
        </div>
      </div>
      <EventDialog
        event={event.selectedEvent}
        onClose={() => setEventValue('selectedEvent', null)}
        fetchEvents={fetchEvents}
        users={users}
      />
    </div>


  //  MUI VERSION
  // <Box sx={{
  //   flexGrow: 1, m: 0, marginTop: 0, padding: '15px', height: '80vh'
  // }}
  // >
  //   <Grid container spacing={2} sx={{ height: '100%' }}>
  //     <Grid item xs={3}>
  //       <Paper style={{
  //         display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px'
  //       }}
  //       >
  //         <Typography variant="h5" gutterBottom>Create a new event:</Typography>
  //         <EventForm event={event} setEventValue={setEventValue} users={users} />
  //         <Container style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
  //           <Button variant="text" onClick={handleSubmit}>Add Event</Button>
  //         </Container>
  //       </Paper>
  //     </Grid>
  //     <Grid item xs={9}>
  //       <Paper sx={{ height: '100%' }}>
  //         <Calendar
  //           localizer={localizer}
  //           events={events}
  //           startAccessor="start"
  //           endAccessor="end"
  //           onSelectEvent={(key) => {
  //             console.log(key);
  //             setEventValue('selectedEvent', key);
  //           }}
  //           sx={{
  //             height: '100%',
  //             '&& .rbc-off-range-bg': {
  //               background: 'black'
  //             }
  //           }}
  //         />
  //       </Paper>
  //     </Grid>
  //   </Grid>
  //   <EventDialog
  //     event={event.selectedEvent}
  //     onClose={() => setEventValue('selectedEvent', null)}
  //     fetchEvents={fetchEvents}
  //     users={users}
  //   />
  // </Box>
  );
}

export default Events;
