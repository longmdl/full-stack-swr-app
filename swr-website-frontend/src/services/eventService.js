import axios from 'axios';

export const getEvents = () => axios.get('/api/events');

export const createEvent = (formData) =>
  axios.post('/api/events', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }); 