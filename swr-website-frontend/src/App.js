// src/App.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import EventCover from './components/EventCover';
import EventDetails from './components/EventDetails';
import Agenda from './components/Agenda';
import Registration from './components/Registration';

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="min-h-screen font-sans transition-colors duration-500">
      <Header>
        <button
          className="ml-auto btn px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow transition-all"
          onClick={() => setDark(d => !d)}
          aria-label="Toggle dark mode"
        >
          {dark ? '🌙 Dark' : '☀️ Light'}
        </button>
      </Header>
      <main className="max-w-2xl mx-auto p-4 py-10">
        <EventCover />
        <EventDetails />
        <Registration />
        <Agenda />
      </main>
    </div>
  );
}

export default App;