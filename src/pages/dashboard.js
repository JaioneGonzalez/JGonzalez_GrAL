// dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/navigation').then(response => setData(response.data));
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item.path}</div>
      ))}
    </div>
  );
}

export default Dashboard;