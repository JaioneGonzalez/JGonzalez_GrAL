// NavigationTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function NavigationTracker() {
  const location = useLocation();

  useEffect(() => {
    axios.post('/api/navigation', { path: location.pathname });
  }, [location]);

  return null;
}

export default NavigationTracker;