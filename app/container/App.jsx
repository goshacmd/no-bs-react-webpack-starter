import React, { Component } from 'react';

import Welcome from 'components/Welcome';

class App extends Component {
  render() {
    return (
      <div style={{margin: '0 auto', width: 720}}>
        <Welcome />
      </div>
    );
  }
}

export default App;
