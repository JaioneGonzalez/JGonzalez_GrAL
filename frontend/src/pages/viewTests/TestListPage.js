import React, { useState, useEffect } from 'react';
import './styles_view.css';

const TestListPage = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    // Mock list of tests
    const mockTests = [
      { name: 'Test 1' },
      { name: 'Test 2' },
      { name: 'Test 3' },
      { name: 'Test 4' },
      { name: 'Test 5' },
    ];

    // Set the mock tests to the state
    setTests(mockTests);
  }, []);

  return (
    <div className="container">
      <h1>List of Tests</h1>
      <ul className="test-list">
        {tests.map((test, index) => (
          <li key={index} className="test-item">
            {test.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestListPage;