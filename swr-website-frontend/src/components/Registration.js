import React from 'react';

function Registration({ currentRegistrations }) {
  return (
    <div className="mt-4 p-4 bg-gray-900 rounded-lg text-center border border-gray-800">
      <button className="bg-primary hover:bg-primary-dark text-black font-semibold py-2 px-6 rounded-full shadow transition mb-2">
        Register Now
      </button>
      <div className="text-primary text-sm mt-1">
        Current Registrations: <span className="font-bold">{currentRegistrations ?? 0}</span>
      </div>
    </div>
  );
}

export default Registration; 