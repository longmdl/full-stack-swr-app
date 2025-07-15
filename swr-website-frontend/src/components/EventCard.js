import React from 'react';
import Registration from './Registration';

function EventCard({ event, isNewest }) {
  // Return null or a placeholder if the event object itself is missing
  if (!event) {
    return null;
  }

  // Safely format the date, providing a fallback if it's not available
  const eventDate = event.eventDateTime
    ? new Date(event.eventDateTime).toLocaleString()
    : 'Date TBD';

  return (
    // Applied the primary border to this main container div
    <div className="bg-background dark:bg-background rounded-lg shadow p-6 mb-8 flex flex-col gap-6 border-2 border-[#3f3e0f]">
      <img
        // Use a fallback image if the cover image URL is missing
        src={event.coverImageUrl ?? 'https://via.placeholder.com/300'}
        alt={event.title ?? 'Event'} // Use fallback alt text
        // Removed border classes from the image tag
        className="w-full aspect-video object-cover rounded-lg shadow-lg"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Use optional chaining and fallbacks for text content */}
          <h2 className="center text-2xl font-bold text-primary mb-2">
            {event.title ?? 'Untitled Event'}
          </h2>
          <p className="text-gray-300 mb-2">
            {event.description ?? 'No description available.'}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {/* Conditionally render location only if it exists */}
            {event.location && (
             <span className="location-badge inline-block bg-primary text-black text-xs px-2 py-1 rounded-full font-semibold">
             {event.location}
           </span>
            )}
            <span className="inline-block bg-gray-800 text-primary text-xs px-2 py-1 rounded-full font-semibold">
              {eventDate}
            </span>
          </div>
        </div>
        <div className="flex gap-4 mt-1">
          {/* These are already safe due to the && operator */}
          {event.carLink && (
            <a
              href={event.carLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-black font-semibold py-2 px-6 rounded-full shadow transition mb-2"
            >
              Car Link
            </a>
          )}
          {event.trackLink && (
            <a
              href={event.trackLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-black font-semibold py-2 px-6 rounded-full shadow transition mb-2"
            >
              Track Link
            </a>
          )}
        </div>
        { <Registration currentRegistrations={event.currentRegistrations} />}
      </div>
    </div>
  );
}

export default EventCard;