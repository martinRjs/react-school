import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RenderCharacter } from '../Render/YourComponent';

export class SearchCharacter extends Component {
  state = { search: '' }

  handleSubmit = (e) => {
    this.props.onSearch(this.state.search);
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { data } = this.props;

    return (
      <div className="Character_Card">
        <h2>Search character by name</h2>
        <input type="text" className="search" value={this.state.search} onChange={this.handleChange} />
        <button className="btn-search" onClick={this.handleSubmit}>Search</button>
        <RenderCharacter data={data} />
      </div>
    );
  };
}

SearchCharacter.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
  onSearch: PropTypes.func.isRequired,
}
