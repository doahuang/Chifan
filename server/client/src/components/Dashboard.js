import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to='/survey'><b>+ New Survey</b></Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;