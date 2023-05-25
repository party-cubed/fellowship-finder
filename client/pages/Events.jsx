import React, { useState, useEffect, useContext } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import axios from 'axios';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  Box, Grid, Paper, Button, Typography, Container, TextField
} from '@mui/material';
import AddressForm from '../components/AddressForm';
import UsersSelect from '../components/UsersSelect';
import EventDialog from '../components/EventDialog';
import DateSelect from '../components/DateSelect';


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
        description: event.description || '',
        address: event.address.street.length
          ? event.address.street.concat('|', event.address.city, '|', event.address.state, '|', event.address.zip)
          : event.address.link || 'No address',
        hostId: 1
      });
      console.log('posted event to server');
      setEventValue('address', { street: '', city: '', state: '', zip: '' });
      setEventValue('selectedUsers', []);
      setEventValue('start', dayjs(new Date()));
      setEventValue('end', dayjs(new Date()));
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
            <Container sx={{ marginBottom: '20px' }}>
              <Box component="form" noValidate autoComplete="off" sx={{ width: '90%' }}>
                <TextField
                  name="link"
                  label="Event Name"
                  value={event.address.link}
                  onChange={({ target: { name, value } }) => setEventValue('title', value)}
                  sx={{ width: '100%' }}
                />
              </Box>
            </Container>
            <Container>
              <DateSelect date={event.start} label="Start" setSelectedDate={(date) => setEventValue('start', date)} />
              <DateSelect date={event.start} label="End" setSelectedDate={(date) => setEventValue('end', date)} />
            </Container>
            <AddressForm address={event.address} setAddress={(address) => setEventValue('address', address)} sx={{ width: '90%' }} />
            <Container sx={{ marginTop: '20px', marginBottom: '20px' }}>
              <UsersSelect
                users={users}
                label="Invites"
                selectedUsers={event.selectedUsers || []}
                setSelectedUsers={(selectedUsers) => setEventValue('selectedUsers', selectedUsers)}
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
      />
    </Box>
  );
}

export default Events;
// import React, { useState, useEffect, useContext } from 'react';
// import { Calendar, dayjsLocalizer } from 'react-big-calendar';
// import axios from 'axios';
// import dayjs from 'dayjs';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import {
//   Box, Grid, Paper, Button, Typography, Container, TextField
// } from '@mui/material';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import AddressForm from '../components/AddressForm';
// import UsersSelect from '../components/UsersSelect';
// import UserProvider from '../components/UserProvider';
// import EventDialog from '../components/EventDialog';
// import DateSelect from '../components/DateSelect';


// const localizer = dayjsLocalizer(dayjs);


// function Events() {
//   const [events, setEvents] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [start, setStart] = useState(dayjs(new Date()));
//   const [end, setEnd] = useState(dayjs(new Date()));
//   const [users, setUsers] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState(null);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [address, setAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     zip: '',
//   });


//   const fetchUsers = async () => {
//     try {
//       const { data } = await axios.get('api/user/all');
//       setUsers(data);
//       console.log('retrieved users from server', data);
//     } catch (err) {
//       console.error('Error fetching users data: ', err);
//     }
//   };

//   const fetchEvents = async () => {
//     try {
//       const { data } = await axios.get('api/event/all');
//       const dates = data.map((event) => ({
//         ...event,
//         start: new Date(event.start),
//         end: new Date(event.end),
//       }));
//       setEvents(dates);
//       console.log('retrieved dates from server', dates);
//     } catch (err) {
//       console.error('Error fetching events data: ', err);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//     fetchEvents();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log('title', title);
//     try {
//       await axios.post('api/event', {
//         title: title || 'Session',
//         start,
//         end,
//         description: description || '',
//         address: address.street ? address.street.concat('|', address.city, '|', address.state, '|', address.zip)
//           : address.link || 'No address',
//         hostId: 1
//       });
//       console.log('posted event to server');
//       setAddress({ street: '', city: '', state: '', zip: '' });
//       setSelectedUsers([]);
//       setStart(dayjs(new Date()));
//       setEnd(dayjs(new Date()));
//     } catch (err) {
//       console.error('Error posting event: ', err);
//     }
//   };

//   return (
//     <Box sx={{
//       flexGrow: 1, m: 0, marginTop: 0, padding: '15px', height: '80vh'
//     }}
//     >
//       <Grid container spacing={2} sx={{ height: '100%' }}>
//         <Grid item xs={3}>
//           <Paper style={{
//             display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px'
//           }}
//           >
//             <Typography variant="h5" gutterBottom>Create a new event:</Typography>
//             <Container sx={{ marginBottom: '20px' }}>
//               <Box component="form" noValidate autoComplete="off" sx={{ width: '90%' }}>
//                 <TextField
//                   name="link"
//                   label="Event Name"
//                   value={address.link}
//                   onChange={({ target: { name, value } }) => setTitle(value)}
//                   sx={{ width: '100%' }}
//                 />
//               </Box>
//             </Container>
//             <Container>
//               <DateSelect date={start} label="Start" setSelectedDate={setStart} />
//               <DateSelect date={start} label="End" setSelectedDate={setEnd} />
//             </Container>
//             <AddressForm address={address} setAddress={setAddress} sx={{ width: '90%' }} />
//             <Container sx={{ marginTop: '20px', marginBottom: '20px' }}>
//               <UsersSelect
//                 users={users}
//                 label="Invites"
//                 selectedUsers={selectedUsers || []}
//                 setSelectedUsers={setSelectedUsers}
//               />
//             </Container>
//             <Container style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
//               <Button variant="text" onClick={handleSubmit}>Add Event</Button>
//             </Container>
//           </Paper>
//         </Grid>
//         <Grid item xs={9}>
//           <Paper sx={{ height: '100%' }}>
//             <Calendar
//               localizer={localizer}
//               events={events}
//               startAccessor="start"
//               endAccessor="end"
//               onSelectEvent={(event) => {
//                 console.log(event);
//                 setSelectedEvent(event);
//               }}
//               sx={{
//                 height: '100%',
//                 '&& .rbc-off-range-bg': {
//                   background: 'black'
//                 }
//               }}
//             />
//           </Paper>
//         </Grid>
//       </Grid>
//       <EventDialog
//         event={selectedEvent}
//         onClose={() => setSelectedEvent(null)}
//       />
//     </Box>
//   );
// }

// export default Events;
