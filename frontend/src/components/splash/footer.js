import React from 'react';

export default () => {
  const options = {
    target: '_blank',
    rel: 'noopener noreferrer'
  }
  
  return (
    <footer>
      <a href='https://whosdoa.com' {...options}>
        Portfolio
      </a>
      <a href='https://linkedin.com/in/doahuang' {...options}>
        LinkedIn
      </a>
      <a href='https://github.com/doahuang' {...options}>
        GitHub
      </a>
      <a href='https://angel.co/doahuang' {...options}>
        AngelList
      </a>
    </footer>
  );
}