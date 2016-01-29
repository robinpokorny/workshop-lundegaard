
import React from 'react';
import ReactDOM from 'react-dom';

import HelloYou from './hello-you';

class App extends React.Component {
  render() {
    const { ending } = this.props;

    return (
      <div>
        {['Prague', 'Lunde', 'Jarda Jágr'].map((item, index) =>
            <HelloYou
              name={item}
              ending={ending}
              initialVotes={index * 5}
              key={item[0]}
            />
          )
        }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);