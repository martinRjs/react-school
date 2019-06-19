import React, { Component } from 'react';
import { RickAndMortyApi } from '../../../services/DataAPI';
import PropTypes from 'prop-types';
import AjaxComponent from './AjaxComponent';

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

  render() {
    return <AjaxComponent {...this.state} setAciveEpisode={this.setAciveEpisode} />
  };
}

AjaxComponentContainer.propTypes = {
  episodes: PropTypes.shape({
    episodes: PropTypes.object,
    activeEpisode: PropTypes.number
  }),
}
