import React from 'react';
import Navbar from '../components/Navbar';
import EventList from '../components/EventList';
import LeagueHeader from '../components/LeagueHeader';

function HomePage() {
  return (
    <div>
      <Navbar />
        <LeagueHeader />
        <main className="mt-8 max-w-4xl mx-auto px-4 text-primary">
        <EventList />
      </main>
    </div>
  );
}

export default HomePage;