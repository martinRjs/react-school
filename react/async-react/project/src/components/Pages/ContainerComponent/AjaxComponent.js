import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterListItem from '../AjaxComponent/CharacterListItem';
import CharacterCardContainer from '../AjaxComponent/CharacterCardContainer';
import CharacterCardListContainer from './CharacterCardListContainer';

export default class AjaxComponent extends Component {
  renderEpisodes() {
    return this.props.episodes.map((episode, index) => <CharacterListItem episode={{ name: episode.name, index: index }} onClick={this.props.setAciveEpisode} key={episode.name} />);
  }
  
  renderCharacters() {
    const { episodes, activeEpisode } = this.props;
    // return episodes.length && episodes[activeEpisode].characters.map((character) => <CharacterCardContainer character={character} key={character.name} />);
    return episodes.length && episodes[activeEpisode].characters.map((character) => <CharacterCardContainer character={character} key={character.name} />);
  }
  
  render() {
    const { episodes, activeEpisode } = this.props;

    return (
      <div className="episode-container">
        <h1>List Of Episodes</h1>
        <ul>
          {this.renderEpisodes()}
        </ul>
        <div className="characters-container">
          <h3>Characters</h3>
          <CharacterCardListContainer characters={episodes[activeEpisode] && episodes[activeEpisode].characters} />
        </div>
      </div>
    );
  };
}

AjaxComponent.propTypes = {
}



