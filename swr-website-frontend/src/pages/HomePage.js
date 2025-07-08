import React from 'react';
import Navbar from '../components/Navbar';
import EventFeed from '../components/EventFeed';

function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 text-primary">
        <EventFeed />
      </main>
    </div>
  );
}

export default HomePage; 