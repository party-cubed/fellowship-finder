import React, { useState, useEffect, useContext } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import axios from 'axios';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  Box, Grid, Paper, Button
} from '@mui/material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Typography from '@mui/material/Typography';
import UserProvider from '../components/UserProvider';


const localizer = dayjsLocalizer(dayjs);

function Events() {
  const [events, setEvents] = useState([]);
  const [value, setValue] = React.useState(dayjs(new Date()));
  const [address, setAddress] = useState('');

  const user = useContext(UserProvider);
  console.log('user', user);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get('api/events');
        setEvents(data);
        console.log(data);
      } catch (err) {
        console.error('Error fetching events data: ', err);
      }
    };
    fetchEvents();
  });

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <Box sx={{
      flexGrow: 1, m: 0, marginTop: 0, padding: '15px', height: '80vh'
    }}
    >
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={3}>
          <div>
            {user ? `Hello, ${user}!` : 'Please log in'}
          </div>
          <Paper style={{
            display: 'flex', flexDirection: 'column', 'justify-content': 'center', padding: '10px'
          }}
          >
            <Typography
              variant="overline"
              noWrap
              align="center"
              sx={{ 'font-size': 15 }}
            >
              Create a new event:
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ p: 2 }}>
              <DateTimePicker
                label="date and time"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{ width: '90%' }}
              />
            </LocalizationProvider>
            <row style={{ display: 'flex', 'justify-content': 'flex-end', padding: '10px' }}>
      
              <Button variant="text">Add Event</Button>
            </row>
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
