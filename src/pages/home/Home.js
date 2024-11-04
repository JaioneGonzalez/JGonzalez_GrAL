// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles_home.css';

function Home() {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);

  // Function to record an test
  const recordTest = () => {
    axios.post('/api/tests', { test: 'Button clicked' })
      .catch(error => console.error('Error recording test:', error));
  };

  // Function to fetch all recorded tests
  const fetchTests = () => {
    axios.get('/api/interactions')
      .then(response => setTests(response.data))
      .catch(error => console.error('Error fetching tests:', error));
  };

  // Fetch tests when the component mounts
  useEffect(() => {
    fetchTests();
  }, []);

  return (
    <div className="container_home">
      <h1>Web tests</h1>
      <button onClick={() => navigate("/jsonUpload")}>Record Test</button>
      <button onClick={() => navigate("/testList")}>View Tests</button>
      <ul>
        {tests.map((test, index) => (
          <li key={index}>{test}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
