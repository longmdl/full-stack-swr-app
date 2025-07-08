import React from 'react';
import Navbar from '../components/Navbar';
import CreateEventForm from '../components/CreateEventForm';

function AdminDashboard() {
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 text-primary">
        <h1 className="text-2xl font-bold mt-8 mb-4">Welcome, Admin!</h1>
        <CreateEventForm />
        {/* Future: List of events with Edit/Delete */}
      </main>
    </div>
  );
}

export default AdminDashboard; 