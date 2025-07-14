import React from 'react';
import Navbar from '../components/Navbar';
import EventList from '../components/EventList';

function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 text-primary">
        <EventList />
      </main>
    </div>
  );
}

export default HomePage; 