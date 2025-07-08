import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

function AuthPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await axios.post('/login', { username, password });
      // Optionally redirect or update auth state
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="bg-gray-900 rounded-lg shadow p-8 w-full max-w-md border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary">Admin Login</h2>
          <a
            href="/oauth2/authorization/google"
            className="block w-full text-center bg-primary hover:bg-primary-dark text-black font-semibold py-2 px-4 rounded mb-4 transition shadow"
          >
            Login with Google
          </a>
          <div className="text-center text-gray-400 mb-4">or</div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-700 bg-background text-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-black font-semibold py-2 px-4 rounded transition shadow"
            >
              Login
            </button>
            {error && <div className="text-red-400 text-sm text-center">{error}</div>}
          </form>
        </div>
      </main>
    </div>
  );
}

export default AuthPage; 