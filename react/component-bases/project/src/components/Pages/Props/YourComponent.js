import React from 'react';
import { YourChildComponent } from './YourChildComponent';

const messages = [
  { message: "message1", id: 1 }, 
  { message: "message2", id: 2 }, 
  { message: "message3", id: 3 }, 
  { message: "message4", id: 4 }
];

export const YourComponent = () => {

  const onClick = (message) => {
    alert(message);
  }

  return (
    <YourChildComponent messages={messages} onClick={onClick}/>
  );
};