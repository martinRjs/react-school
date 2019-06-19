import React, { Component } from 'react';
import { RickAndMortyApi } from '../../../services/DataAPI';
import CharacterCard from './CharacterCard';

export default class CharacterCardContainer extends Component {
  state = {}

  componentDidMount() {
    RickAndMortyApi.getCharacter(this.props.character.split('/').pop()).then(data => {
      this.setState(data);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.character !== this.props.character) {
      RickAndMortyApi.getCharacter(this.props.character.split('/').pop()).then(data => {
        this.setState(data);
      });
    }
  }

  render() {
    return <CharacterCard {...this.state} />
  }
}