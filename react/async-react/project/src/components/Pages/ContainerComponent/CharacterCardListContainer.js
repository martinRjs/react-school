import React, { Component, Fragment } from 'react';
import { RickAndMortyApi } from '../../../services/DataAPI';
import CharacterCard from '../AjaxComponent/CharacterCard';

export default class CharacterCardListContainer extends Component {
  state = {
    characters: {}
  }

  componentDidMount() {
    this.updateCharacters();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.characters && prevProps.characters.length !== this.props.characters.length) {
      this.updateCharacters();
    }
  }

  async updateCharacters() {
    const characterPromises = this.props.characters ? this.props.characters.map((character) => {
      if (this.state.characters[character]) {
        return Promise.resolve(this.state.characters[character]);
      }

      return RickAndMortyApi.getCharacter(character.split('/').pop());
    }) : [];

    const characters = await Promise.all(characterPromises);

    debugger;
    this.setState({
      characters: characters.reduce((acc, cur) => {
        acc[cur.url] = cur;
        return acc;
      }, {})
    });
  }

  render() {
    return <Fragment>{Object.values(this.state.characters).map((character) => <CharacterCard {...character} key={character.id} />)}</Fragment>
  }
}

//Object.assign({}, ['a','b','c']); // {0:"a", 1:"b", 2:"c"}