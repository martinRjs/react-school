import React, { Component } from 'react';
import { RickAndMortyApi } from '../../../services/DataAPI';
import PropTypes from 'prop-types';
import CharacterCardContainer from './CharacterCardContainer';
import CharacterListItem from './CharacterListItem';

export class AjaxComponentContainer extends Component {
  state = {
    episodes: [],
    activeEpisode: 0
  }

  setAciveEpisode = (activeIndex) => {
    this.setState({
      episodes: [...this.state.episodes],
      activeEpisode: activeIndex
    })
  }

  componentDidMount() {
    RickAndMortyApi.getEpisodes().then(data => {
      this.setState({ episodes: data.results });
    });
  }

  renderEpisodes() {
    return this.state.episodes.map((episode, index) => <CharacterListItem episode={{ name: episode.name, index: index }} onClick={this.setAciveEpisode} key={episode.name} />);
  }

  renderCharacters() {
    const { episodes, activeEpisode } = this.state;
    return episodes.length && episodes[activeEpisode].characters.map((character) => <CharacterCardContainer character={character} key={character.name} />);
  }

  render() {
    return (
      <div className="episode-container">
        <h1>List Of Episodes</h1>
        <ul>
          {this.renderEpisodes()}
        </ul>
        <div className="characters-container">
          <h3>Characters</h3>
          {this.renderCharacters()}
        </div>
      </div>
    );
  };
}

AjaxComponentContainer.propTypes = {
  episodes: PropTypes.shape({
    episodes: PropTypes.object,
    activeEpisode: PropTypes.number
  }),
}
