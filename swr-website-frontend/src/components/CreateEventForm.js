import React, { useState } from 'react';
import { createEvent } from '../services/eventService';

function CreateEventForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [eventDateTime, setEventDateTime] = useState('');
  const [imageFile, setImageFile] = useState(null);
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
      if (imageFile) formData.append('imageFile', imageFile);
      await createEvent(formData);
      setSuccess('Event created successfully!');
      setTitle('');
      setDescription('');
      setLocation('');
      setEventDateTime('');
      setImageFile(null);
    } catch (err) {
      setError('Failed to create event');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg shadow p-6 max-w-xl mx-auto mt-8 space-y-4 border border-gray-800">
      <h2 className="text-xl font-bold mb-4 text-primary">Create New Event</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={e => setLocation(e.target.value)}
        className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
      <input
        type="datetime-local"
        value={eventDateTime}
        onChange={e => setEventDateTime(e.target.value)}
        className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={e => setImageFile(e.target.files[0])}
        className="w-full text-primary"
      />
      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-black font-semibold py-2 px-4 rounded transition shadow"
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Event'}
      </button>
      {success && <div className="text-green-400 text-center">{success}</div>}
      {error && <div className="text-red-400 text-center">{error}</div>}
    </form>
  );
}

export default CreateEventForm; 