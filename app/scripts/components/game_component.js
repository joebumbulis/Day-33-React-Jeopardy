import React from 'react'
import GameBoard from './game_board.js'

// class GameComponent extends React.Component {
//   constructor(props){
//     super(props);
//     // this.state ={}
//   }
// }
export default React.createClass({
    render: function() {
      return <div>
              <GameBoard category="columnOne" one="$200" two="$400" three="$600" four="$800" five="$1000" />
              //this is where I'll add all the data from the API
            </div>
    }
})

// export default connect()(GameComponent)
