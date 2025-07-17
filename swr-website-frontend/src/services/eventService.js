import axios from 'axios';

const API_URL = 'http://localhost:8080/api/events';

// GET request to fetch all events
export const getEvents = () => {
    return axios.get(API_URL);
};

// POST request to create a new event
export const createEvent = (eventData) => {
    return axios.post(API_URL, eventData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};