
import React, { Component, PropTypes } from 'react';

class HelloYou extends Component {
  constructor(props) {
    super(props);

    const { initialVotes } = props;

    this.state = { votes: initialVotes };
    this.voteUp = this.voteUp.bind(this);
  }

  voteUp() {
    const { votes } = this.state;

    this.setState({ votes: votes + 1 });
  }

  render() {
    const { name, ending } = this.props;

    const {votes} = this.state;

    return <h1>Hi, { name }{ ending }<button onClick={this.voteUp}>{ votes }</button></h1>
  }
}

HelloYou.propTypes = {
  'name': PropTypes.string.isRequired,

  'ending': PropTypes.string,
  'initialVotes': PropTypes.number
};

HelloYou.defaultProps = {
  'ending': '.',
  'initialVotes': 0
};

export default HelloYou;