import { useState, useEffect } from 'react';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Replace with real auth logic (e.g., check cookie, context, etc.)
    setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
  }, []);

  return { isAuthenticated };
} 