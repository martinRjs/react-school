import React from 'react';
import PropTypes from 'prop-types';

export const RenderCharacter = ({ data }) => {
  const { image, name, species } = data;
  return (
    <div className="Character_Card">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <strong>{species}</strong>
    </div>
  );
};

RenderCharacter.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  })
}
