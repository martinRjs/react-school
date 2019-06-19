import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RenderCharacter } from '../Render/YourComponent';

export class CharacterPolling extends Component {
  state = { characterShowedUp: [{ name: 'Rick', amount: 0 }] }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.onSearch();

      const { name } = this.props.data;
      let state = this.state.characterShowedUp;

      const index = this.state.characterShowedUp.findIndex((c) => c.name === name);

      //this can receive a function!! :o ... params: prevState
    }, 2000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data.id !== this.props.data.id) {
      this.setState((prevState) => {
        const csu = prevState.characterShowedUp;
        if (index === -1 && name) {
          return {
            characterShowedUp: [...csu, { name: name, amount: 1 }]
          }
        } else if (name) {
          return {
            characterShowedUp: [...csu.slice(0, index),
            Object.assign({}, csu[index], { amount: csu[index].amount + 1 }),
            ...csu.slice(index + 1)]
          }
        }
      }, () => console.log(this.state));
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="Character_Card">
        <h2>Poll Characters</h2>
        {
          this.state.characterShowedUp.length &&
          <ul className="list">
            {
              this.state.characterShowedUp.map(({ name, amount }) => {
                return <li key={name}>{`${name}: ${amount}`}</li>;
              })
            }
          </ul>
        }
        <RenderCharacter data={data} />
      </div>
    );
  };
}

CharacterPolling.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
  onSearch: PropTypes.func.isRequired,
}
