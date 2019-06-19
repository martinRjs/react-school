import React from 'react';

const CharacterCard = ({ image, name, species }) => (
  <div className="character-card">
    <img src={image} alt="" />
    <ul>
      <li>{name}</li>
      <li>{species}</li>
    </ul>
  </div>
);

export default CharacterCard;