import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogContent, DialogActions, Button, IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import axios from 'axios';
import EventForm from './EventForm';

function EventDialog({ event, onClose, fetchEvents, users }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState(null);

  //RENDER IN INITIAL EDITED EVENT
  useEffect(() => {
    setEditedEvent(event);
  }, [event]);

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
  );
}

export default EventDialog;
