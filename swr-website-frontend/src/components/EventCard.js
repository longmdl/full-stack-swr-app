import React from 'react';
import Registration from './Registration';

function EventCard({ event, isNewest }) {
  return (
    <div className="bg-background dark:bg-background rounded-lg shadow p-6 mb-8 flex flex-col md:flex-row gap-6 border border-gray-800">
      <img
        src={event.coverImageUrl}
        alt={event.title}
        className="w-full md:w-1/3 h-56 object-cover rounded-lg shadow-lg mb-4 md:mb-0 border-2 border-primary"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">{event.title}</h2>
          <p className="text-gray-300 mb-2">{event.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="inline-block bg-primary text-black text-xs px-2 py-1 rounded-full font-semibold">{event.location}</span>
            <span className="inline-block bg-gray-800 text-primary text-xs px-2 py-1 rounded-full font-semibold">
              {new Date(event.eventDateTime).toLocaleString()}
            </span>
          </div>
        </div>
        {isNewest && <Registration currentRegistrations={event.currentRegistrations} />}
      </div>
    </div>
  );
}

export default EventCard; 