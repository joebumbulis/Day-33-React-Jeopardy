import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import GameComponent from './game_component'
import Toolbar from './toolbar.js'
import Points from './points.js'


const AppRoot = React.createClass({
  render: function () {
    return (
      <section>
        <Toolbar />
        <GameComponent />
        <Points />
      </section>
    );
  }
});

export default connect(container.allState)(AppRoot)
