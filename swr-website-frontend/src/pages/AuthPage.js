import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../contexts/AuthContext';


// A placeholder for the Navbar if you don't have one.
const Navbar = () => (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto">
        <div className="text-white font-bold text-xl">SUM Administrator Panel</div>
      </div>
    </nav>
);

function AuthPage() {
  //navigate to AdminDashboard
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  // State to toggle between Login and Register views
  const [isLoginView, setIsLoginView] = useState(true);

  // Form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for handling feedback
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  /**
   * Toggles the view between login and registration forms.
   * Resets all form fields and error/success messages.
   */
  const handleToggleView = () => {
    setIsLoginView(!isLoginView);
    // Reset state when toggling
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
    setSuccess(null);
  };

  /**
   * Handles the form submission for both login and registration.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // --- Registration Logic ---
    if (!isLoginView) {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }
      try {
        // Use your actual registration endpoint
        await axios.post('http://localhost:8080/api/auth/register', { username, password });
        setSuccess('Account created successfully! Switching to login.');
        // Optionally switch to login view automatically
        setIsLoginView(true);
      } catch (err) {
        setError(err.response?.data?.message || 'Registration failed. Please try again.');
      }
      return;
    }

    // --- Login Logic ---
    try {
      // Use your actual login endpoint
      const resp = await axios.post('http://localhost:8080/api/auth/login', { username, password });
      // On successful login, you would typically redirect the user
      // or update the application's authentication state.

      //tell your auth context you’re logged in (store token, etc.)
      login(resp.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${resp.data.token}`;
      setSuccess('Login successful! Redirecting...');

      navigate('/admin');
    } catch (err) {
      setError('Invalid username or password.');
      console.error('Login error:', err);
      console.error('Response data:', err.response?.data);
      console.error('Status:', err.response?.status);
      setError(
          err.response?.data?.error
          || err.response?.data?.message
          || 'Something went wrong'
      );
    }
  };

  return (
      <div className="bg-gray-900 text-gray-100 min-h-screen">
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4">
          <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              {isLoginView ? 'Admin Login' : 'Create Account'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full border border-gray-600 bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
              />
              <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full border border-gray-600 bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
              />
              {/* --- Confirm Password field for Registration View --- */}
              {!isLoginView && (
                  <input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      className="w-full border border-gray-600 bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                  />
              )}
              <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                {isLoginView ? 'Login' : 'Register'}
              </button>
              {/* --- Display Error and Success Messages --- */}
              {error && <div className="text-red-400 text-sm text-center pt-2">{error}</div>}
              {success && <div className="text-green-400 text-sm text-center pt-2">{success}</div>}
            </form>

            {/* --- Toggle Button --- */}
            <div className="text-center mt-6">
              <p className="text-gray-400">
                {isLoginView ? "Don't have an account?" : "Already have an account?"}{' '}
                <button
                    type="button"
                    onClick={handleToggleView}
                    className="font-semibold text-blue-500 hover:text-blue-400 focus:outline-none"
                >
                  {isLoginView ? 'Sign Up' : 'Login'}
                </button>
              </p>
            </div>
          </div>
        </main>
      </div>
  );
}

export default AuthPage;
