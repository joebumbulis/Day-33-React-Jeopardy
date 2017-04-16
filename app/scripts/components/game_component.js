import React from 'react'
import GameBoard from './game_board.js'
import { connect } from 'react-redux'
import containers from '../containers/all.js'


class GameComponent extends React.Component {
  constructor(props){
    super(props);
    // this.state ={}
  }

// export default React.createClass({
    render () {
      let categoryValues = [{category: 'test1', value: "$200"},
                            {category: "test2", value: "$400"},
                            {category: "test3", value:"$600"},
                            {category: "test4", value:"$800"},
                            {category: "test5", value:"$1000"} ]
      return <div>

              <GameBoard category="columnOne" value={categoryValues} />
            </div>
          };
};
export default connect(containers.allstate)(GameComponent);
