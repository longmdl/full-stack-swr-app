import React, { useState } from 'react';
import { createEvent } from '../services/eventService';

function CreateEventForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [eventDateTime, setEventDateTime] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState(''); // Changed from file to URL
  const [carLink, setCarLink] = useState('');             // Added carLink
  const [trackLink, setTrackLink] = useState('');         // Added trackLink
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('location', location);
      formData.append('eventDateTime', eventDateTime);
      formData.append('coverImageUrl', coverImageUrl); // Appending URL string
      formData.append('carLink', carLink);             // Appending carLink
      formData.append('trackLink', trackLink);         // Appending trackLink

      await createEvent(formData);
      setSuccess('Event created successfully!');

      // Reset all form fields
      setTitle('');
      setDescription('');
      setLocation('');
      setEventDateTime('');
      setCoverImageUrl('');
      setCarLink('');
      setTrackLink('');
    } catch (err) {
      setError('Failed to create event');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg shadow p-6 max-w-xl mx-auto mt-8 space-y-4 border border-gray-800">
      <h2 className="text-xl font-bold mb-4 text-primary">Create New Event</h2>
      
      {/* Existing Fields */}
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
      <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
      <input type="datetime-local" value={eventDateTime} onChange={e => setEventDateTime(e.target.value)} className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
      
      {/* Updated and New Fields */}
      <input type="text" placeholder="Cover Image URL" value={coverImageUrl} onChange={e => setCoverImageUrl(e.target.value)} className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
      <input type="text" placeholder="Car Link" value={carLink} onChange={e => setCarLink(e.target.value)} className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
      <input type="text" placeholder="Track Link" value={trackLink} onChange={e => setTrackLink(e.target.value)} className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
      
      <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-black font-semibold py-2 px-4 rounded transition shadow" disabled={loading}>
        {loading ? 'Creating...' : 'Create Event'}
      </button>

      {success && <div className="text-green-400 text-center">{success}</div>}
      {error && <div className="text-red-400 text-center">{error}</div>}
    </form>
  );
}

export default CreateEventForm;