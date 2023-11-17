import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const PhotoUpload = (props) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [uploadEvent, setUploadEvent] = useState(null);
  const [userEventId, setUserEventId] = useState(null);
  const [events, setEvents] = useState([{ id: 1, title: 'my event1' }, { id: 2, title: 'fellowship friends' }, { id: 3, title: 'another test' }]);
  //const eventsArr = [];
  const [userEvents, setUserEvents] = useState([]);
  const currUserEvents = useRef(null);
  const onFileChange = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const data = new FormData();
    data.append('uploaded_file', uploadedFile);

    axios.post('/upload', data)
      .then((response) => {
        const uploadUserEventId = events.filter((event) => event.title === uploadEvent)
          .map((event) => event.id);
        axios.post('/upload/photoUrl', { photoUrl: response.data.secure_url, userEventId: uploadUserEventId })
          .then((dbResponse) => console.log('post to db success', dbResponse))
          .catch((err) => console.log('could not post to db', err));
        //console.log('cloudinary SUCCESS', response.data);
        //const userEvent = userEvents.filter((userEvt) => userEvt.eventId === uploadEvent.id);
        //console.log('user events', userEvents);
        //console.log('upload event', uploadEvent);
        //console.log('uploade user event id', uploadUserEventId);
      })
      .catch((err) => console.error('could not post to cloud', err));
  };

  const getUserEvents = () => {
    return axios.get(`/api/event/user/${user.id}`)
      .then(({ data }) => {
        setUserEvents(data);
      })
      //.then(() => setUserEvents(eventsArr))
      .catch((err) => console.log('could not get events', err));
  };
  //getUserEvents();
  useEffect(() => {
    //if (userEvents !== currUserEvents.current) {
    getUserEvents();
    //currUserEvents.current = userEvents;
    //}
  }, []);
  return (
    <div>
      {/* {console.log('state', userEvents)} */}
      <h2>Fellowship Photos</h2>
      <h4>Upload photos from your last fellowship meet up!</h4>
      <form
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="uploaded_file"
          onChange={(e) => onFileChange(e)}
        />
        <select onChange={(event) => setUploadEvent(event.target.value)}>
          {events.length > 0 ? events.map((event) => (
            <option key={event.id}>{event.title}</option>
          )) : <option>nothing</option>}
        </select>
        <button
          type="button"
          onClick={() => onFileUpload()}
        >Upload Photo
        </button>
      </form>
      <h2>See all photos from your attended fellowship events!</h2>
    </div>
  );
};

export default PhotoUpload;
// data.map((event) => {
//   //console.log(event.eventId);
//   return axios.get(`/api/event/${event.eventId}`)
//     .then((eventObj) => {
//       //console.log(eventObj.data);
// /*figure out a way to add to event upload state on each successful get*/
//       //setUplodEvent(() => [...uploadEvent, eventObj.data])
//       // const updateEvents = () => {
//       //   setUserEvents([
//       //     ...userEvents,
//       //     eventObj.data
//       //   ]);
//       // };
//       // updateEvents();
//       //eventsArr.push(eventObj.data);
//       //setUserEvents([...userEvents, eventObj.data]);
//     })
//     //.then(() => setUserEvents(...userEvents, eventsArr))
//     .catch((err) => console.log('could not get eventObj', err));
// });
