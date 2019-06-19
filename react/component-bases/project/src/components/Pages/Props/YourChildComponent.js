import React from 'react';

export const YourChildComponent = ({ messages, onClick }) => {
  const renderedChildren = messages.map((message) =>
    <div key={message.id}>
      {message.message} <button onClick={() => onClick(message.message)}>Click Me!</button>
    </div>
  );

  return <h1>{renderedChildren}</h1>;
}