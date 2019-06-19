import React from 'react';

const CharacterListItem = (episode) => {
  const { name, index } = episode.episode;
  const { onClick } = episode;

  return <li key={index} onClick={() => onClick(index)}><span>{index + 1}</span><span>{name}</span></li>
}

export default CharacterListItem;