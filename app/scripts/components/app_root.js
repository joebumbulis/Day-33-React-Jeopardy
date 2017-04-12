import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import GameComponent from './game_component'

const AppRoot = React.createClass({
  render: function () {
    return (
      <section>
        <GameComponent />
      </section>
    );
  }
});

export default connect(container.allState)(AppRoot)
