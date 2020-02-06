import React, {Component} from 'react';
import {HelloComponent} from 'jfront-component';

class App extends Component {
  render() {
    return (
      <div>
        <p>
          To get started in dev mode, edit <code>App.js</code> or <code>LibComponent.js</code> and save to reload.
        </p>
        <HelloComponent>
          JFront
        </HelloComponent>
      </div>
    );
  }
}

export default App;
