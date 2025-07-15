import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b border-[#3f3e0f] bg-background text-primary-dark dark:bg-background dark:text-primary-dark shadow-sm">
      <div className="flex items-center gap-2">
        <img src="/sum_logo_1.png" alt="SUM Logo" className="w-12 h-10 object-contain" />
        <span className="logo-font text-primary">Saigon United Motorsports</span>
      </div>

      {/* This div will contain both the social icons and the navigation links */}
      <div className="flex items-center gap-8"> {/* Increased gap here for overall spacing */}
        {/* Social icons - now in their own div for better control */}
        <div className="flex items-center gap-2"> {/* This gap controls spacing between icons */}
          <a href="https://www.facebook.com/sumracingclub" target="_blank" rel="noopener noreferrer">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="text-blue-600 dark:text-blue-400 hover:opacity-80"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="https://discord.gg/8ztWRkkMf8" target="_blank" rel="noopener noreferrer">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="text-[#5865F2] hover:opacity-80"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276c-.598.3428-1.2205.6447-1.8733.8923a.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1835 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1835 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
          </a>
          <a href="https://www.youtube.com/@saigonunitedmotorsports986" target="_blank" rel="noopener noreferrer">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="text-red-600 dark:text-red-400 hover:opacity-80"><path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574a2.994 2.994 0 00-2.112 2.112C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 002.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>

        {/* Navigation links */}
        <div className="flex items-center gap-4"> {/* This gap controls spacing between Home and Admin Panel */}
          <Link to="/" className="hover:underline text-primary">Home</Link>
          <Link to="/auth" className="bg-primary hover:bg-primary-dark text-black font-semibold py-1 px-4 rounded transition shadow">
            Admin Panel
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;