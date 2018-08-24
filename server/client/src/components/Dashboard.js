import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to='/survey'><h3>New Survey</h3></Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;