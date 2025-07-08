import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import axios from 'axios';

function EventFeed() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/events')
      .then(res => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load events');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8 text-primary">Loading events...</div>;
  if (error) return <div className="text-center text-red-400 py-8">{error}</div>;
  if (!events.length) return <div className="text-center py-8 text-primary">No events found.</div>;

  return (
    <div className="bg-background dark:bg-background p-4 rounded-lg">
      {events.map((event, idx) => (
        <EventCard key={event.id} event={event} isNewest={idx === 0} />
      ))}
    </div>
  );
}

export default EventFeed; 