import React from 'react';

function Registration({ currentRegistrations }) {
  return (
    <div className="mt-4 p-4 bg-gray-900 rounded-lg text-center border border-gray-800">
      <a 
  href="https://discord.gg/Ds8yPuNAE9"
  target="_blank" 
  rel="noopener noreferrer"
  class="register-btn"
>
  Register Now
</a>
      <div className="text-primary text-sm mt-1">
        Join our Discord channel to register! <span className="font-bold"></span>
      </div>
    </div>
  );
}

export default Registration; 