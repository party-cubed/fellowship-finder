import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DateTimePicker, LocalizationProvider,
  DialogActions, Button, IconButton, TextField, Grid, Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import axios from 'axios';
import DateSelect from './DateSelect';
import AddressForm from './AddressForm';
import EventForm from './EventForm';

function EventDialog({ event, onClose, fetchEvents, users }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState(null);

  //RENDER IN INITIAL EDITED EVENT
  useEffect(() => {
    setEditedEvent(event);
  }, [event, editedEvent]);

  const setEditedEventValue = (key, value) => {
    setEditedEvent((prevEvent) => ({ ...prevEvent, [key]: value }));
  };

  const handleDelete = async () => {
    //PULL UP CONFIRMATION
    try {
      const res = await axios.delete(`/api/event/${editedEvent.id}`);
      console.log('Delete event succeded');
      console.log('Delete event succeded');
      fetchEvents();
      onClose();
    } catch (err) {
      console.log('Delete event failed', err);
    }
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    //PATCH REQUEST
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedEvent({ ...event, start: dayjs(event.start), end: dayjs(event.end) });
  };

  //if there's no event, don't render anything
  if (!event) {
    return null;
  }

  return (
    <Dialog open={!!event} onClose={onClose}>
      <DialogActions>
        {isEditing
          ? (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button onClick={handleCancelClick}>Cancel</Button>
                <Button color="error" onClick={handleDelete}>Delete</Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={handleSaveClick}>Save</Button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <IconButton onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={() => setIsEditing(!isEditing)}>
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          )}
      </DialogActions>
      <DialogContent>
        <EventForm event={editedEvent} setEventValue={setEditedEventValue} users={users} />
      </DialogContent>
    </Dialog>


  //   <Dialog open={!!event} onClose={onClose}>
  //     <DialogTitle>
  //       <div style={{
  //         display: 'flex', justifyContent: 'space-between', alignItems: 'center'
  //       }}
  //       >
  //         <IconButton onClick={onClose}>
  //           <CloseIcon />
  //         </IconButton>
  //         <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  //           <IconButton onClick={() => setIsEditing(!isEditing)}>
  //             <EditIcon />
  //           </IconButton>
  //         </div>
  //       </div>
  //     </DialogTitle>
  //     <br />
  //     <DialogContent>
  //       <TextField
  //         label="Event Name"
  //         defaultValue={editedEvent ? editedEvent.title : ''}
  //         variant={isEditing ? 'outlined' : 'standard'}
  //         InputProps={{
  //           readOnly: !isEditing,
  //           disableUnderline: true,
  //         }}
  //       />
  //       <br /><br />
  //       <DateSelect
  //         date={editedEvent ? dayjs(editedEvent.start) : dayjs(new Date())}
  //         label="Start"
  //         setSelectedDate={(date) => setEditedEventValue('start', date)}
  //       />
  //       <DateSelect
  //         date={editedEvent ? dayjs(editedEvent.end) : dayjs(new Date())}
  //         label="End"
  //         setSelectedDate={(date) => setEditedEventValue('end', date)}
  //       />
  //       <br /><br />
  //       <TextField
  //         label="Description"
  //         defaultValue={editedEvent ? editedEvent.description : ''}
  //         variant={isEditing ? 'outlined' : 'standard'}
  //         InputProps={{
  //           readOnly: !isEditing,
  //           style: {
  //             backgroundColor: 'transparent',
  //             disableUnderline: true,
  //           },
  //         }}
  //       />
  //     </DialogContent>
  //     <DialogActions>
  //       {isEditing
  //         ? (
  //           <>
  //             <Button onClick={handleSaveClick}>Save</Button>
  //             <Button onClick={handleCancelClick}>Cancel</Button>
  //           </>
  //         )
  //         : (
  //           <IconButton onClick={handleDelete}>
  //             <DeleteIcon color="error" />
  //           </IconButton>
  //         )}
  //     </DialogActions>
  //   </Dialog>
  );
}

export default EventDialog;


// import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, IconButton } from '@mui/material';
// import { useState, useEffect } from 'react';
// import EditIcon from '@mui/icons-material/Edit';

// function EventDialog({ event, onClose }) {
//   const [open, setOpen] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     setOpen(event !== null);
//   }, [event]);

//   if (event === null) {
//     return null;
//   }

//   return (
//     <Dialog open={!!event} onClose={onClose}>
//       <DialogTitle>{event.title}</DialogTitle>
//       <DialogContent>
//         <DialogContentText>
//           Start: {event.start.toString()}
//           End: {event.end.toString()}
//         </DialogContentText>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Close</Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

// export default EventDialog;
