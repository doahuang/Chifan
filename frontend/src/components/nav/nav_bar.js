import React from 'react'
import { Link } from 'react-router-dom';

import Greeting from '../greeting/greeting_container';

export default () => {
  return (
    <nav>
      <h1><Link to='/'>(食)</Link></h1>
      <Greeting />
    </nav>
  )
}