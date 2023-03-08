import React from 'react';

const DoneTask = (props) => {
  return (
    <li>
      <span>{props.title}</span>
      <span>{props.id}</span>
    </li>
  );
};

export default DoneTask;
