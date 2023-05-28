/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Dialog } from '@mui/material';
import dayjs from 'dayjs';
import axios from 'axios';
import EventForm from './EventForm';


function EventDialog({ event, onClose, fetchEvents, users }) {
  const [editedEvent, setEditedEvent] = useState(null);

  // Render initial edited event
  useEffect(() => {
    setEditedEvent(event);
  }, [event]);

  useEffect(() => {
    console.log(editedEvent);
  }, [editedEvent]);

  const setEditedEventValue = (key, value) => {
    setEditedEvent((prevEvent) => ({ ...prevEvent, [key]: value }));
  };

  const handleDelete = async () => {
    //PULL UP CONFIRMATION
    try {
      const res = await axios.delete(`/api/event/${editedEvent.id}`);
      console.log('Delete event succeded');
      fetchEvents();
      onClose();
    } catch (err) {
      console.log('Delete event failed', err);
    }
  };

  const handlePatch = async () => {
    const updatedEvent = {
      ...editedEvent,
      title: editedEvent.title || 'Session',
      selectedUsers: [...editedEvent.selectedUsers].join(',$, ')
    };
    try {
      const res = await axios.patch(`/api/event/${editedEvent.id}`, updatedEvent);
      console.log('Patch event successful');
      fetchEvents();
    } catch (err) {
      console.log('Patch event failed');
    }
  };

  const handleCancelClick = () => {
    setEditedEvent({ ...event, start: dayjs(event.start), end: dayjs(event.end) });
  };

  // If there's no event, don't render anything
  if (!event) {
    return null;
  }

  return (
    <Dialog open={!!event} onClose={onClose} fullWidth maxWidth="xs">
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <button onClick={onClose}>Close</button>
            <button style={{ color: 'red' }} onClick={handleDelete}>Delete</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={handlePatch}>Save</button>
          </div>
        </div>
      </div>
      <EventForm event={editedEvent} setEventValue={setEditedEventValue} users={users} />
      <form noValidate autoComplete="off" style={{ width: '90%' }}>
        <label htmlFor="description">
          Description:
          <br />
          <input
            type="text"
            id="description"
            value={editedEvent ? editedEvent.description : ''}
            onChange={({ target }) => setEditedEventValue(target.id, target.value)}
          />
        </label>
      </form>
    </Dialog>
  );
}

// //NOT WORKING MUI BASE
// function EventDialog({ event, onClose, fetchEvents, users }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedEvent, setEditedEvent] = useState(null);

//   //RENDER IN INITIAL EDITED EVENT
//   useEffect(() => {
//     setEditedEvent(event);
//   }, [event]);

//   const setEditedEventValue = (key, value) => {
//     setEditedEvent((prevEvent) => ({ ...prevEvent, [key]: value }));
//   };

//   const handleDelete = async () => {
//     //PULL UP CONFIRMATION
//     try {
//       const res = await axios.delete(`/api/event/${editedEvent.id}`);
//       console.log('Delete event succeded');
//       console.log('Delete event succeded');
//       fetchEvents();
//       onClose();
//     } catch (err) {
//       console.log('Delete event failed', err);
//     }
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//     //PATCH REQUEST
//   };

//   const handleCancelClick = () => {
//     setIsEditing(false);
//     setEditedEvent({ ...event, start: dayjs(event.start), end: dayjs(event.end) });
//   };

//   //if there's no event, don't render anything
//   if (!event) {
//     return null;
//   }

//   return (
//     <Dialog open={!!event} onClose={onClose}>
//       <DialogActions>
//         {isEditing
//           ? (
//             <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//               <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
//                 <Button onClick={handleCancelClick}>Cancel</Button>
//                 <Button color="error" onClick={handleDelete}>Delete</Button>
//               </div>
//               <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 <Button onClick={handleSaveClick}>Save</Button>
//               </div>
//             </div>
//           ) : (
//             <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//               <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
//                 <IconButton onClick={onClose}>
//                   <CloseIcon />
//                 </IconButton>
//               </div>
//               <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 <IconButton onClick={() => setIsEditing(!isEditing)}>
//                   <EditIcon />
//                 </IconButton>
//               </div>
//             </div>
//           )}
//       </DialogActions>
//       <DialogContent>
//         <EventForm event={editedEvent} setEventValue={setEditedEventValue} users={users} />
//       </DialogContent>
//     </Dialog>
//   );
// }

export default EventDialog;
