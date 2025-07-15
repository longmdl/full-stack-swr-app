import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';

// The URL of your Spring Boot backend
const API_URL = 'http://localhost:8080/api/events';

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message || 'Error fetching events');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!events.length) return <div>No events found.</div>;

  return (
    <div className="bg-background dark:bg-background p-4 rounded-lg">
      {events.map((event, idx) => (
        <EventCard key={event.id} event={event} isNewest={idx < 2} />
      ))}
    </div>
  );
}

export default EventList;
