import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXZtYXBlcnJ5IiwiYSI6ImNsb3hkaDFmZTBjeHgycXBpNTkzdWdzOXkifQ.BawBATEi0mOBIdI6TknOIw';

const Marker = ({ onClick, children, event }) => {
  const _onClick = () => {
    onClick(event.title);
  };
  console.log('Marker', event);
  return (
    <button onClick={_onClick} className="marker" style={{
      backgroundColor: 'black',
      border: '1px solid gold',
      color: 'white',
      padding: '3px',
      textAlign: 'center',
      display: 'inline-block',
      fontSize: '20px',
      margin: '1px',
      borderRadius: '50%',
    }}
    >
      {/* {children} */}
      ⭐
    </button>
  );
};

const Map = () => {
  // what happens when map marker is clicked
  const markerClicked = (title) => {
    window.alert(title);
  };

  const mapContainerRef = useRef(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // initialize map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-87.65, 41.84],
      zoom: 10,
    });

    // get all events
    axios.get('/api/event/all')
      // set state
      .then((eventsResponse) => {
        setEvents(eventsResponse.data);
        console.log('Events', eventsResponse.data);
        return eventsResponse.data;
      })
      .then((eventsArray) => {
        // Add marker to map for each event in events table
        eventsArray.forEach((event) => {
          if (event.lat !== 0 && event.long !== 0) {
            const ref = React.createRef();
            ref.current = document.createElement('div');
            // Render a Marker on new DOM node
            createRoot(ref.current).render(
              <Marker onClick={markerClicked} event={event} />
            );
            // Create a Mapbox Marker at our new DOM node
            new mapboxgl.Marker(ref.current)
              .setLngLat([event.lat, event.long])
              .addTo(map);
          }
        });
      });

    // Add navigation control
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    // Add user geolocation control
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true,
      showUserLocation: true,
    }));

    // Clean up on unmount
    return () => map.remove();
  }, []);

  const mappedEvents = events.map((event, index) => {
    const { title, selectedUsers, street, state, zip, long, lat } = event;
    return (
      <li key={index}>{title}: {street}, {state}, {zip}, {long}, {lat}</li>
    )
  })

  return (
    <div>
      <ul>
        {mappedEvents}
      </ul>
      <div className="map-container" ref={mapContainerRef} style={{ position: 'absolute', top: '400px', bottom: '0', left: '0', right: '0' }} />
    </div>
  );
};

export default Map;

