// src/services/eventService.js
import axios from 'axios';
const API_URL = 'http://localhost:8080/api/events';

// GET request to fetch all events
export const getEvents = () => axios.get(API_URL);

// POST request to create a new event (JSON)
export const createEvent = (eventData) =>
    axios.post(API_URL, eventData);
