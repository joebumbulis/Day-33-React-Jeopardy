import React from '.react'
// import GameBoard from '.game_board.js'
class GameComponent extends React.Component {
  constructor(props){
    super(props)
    // this.state ={}
  }
}

render(){
  return <div>
          <GameBoard category="one" one="" two="" three="" four="" five="" six=""/>
        </div>
}

export default connect()(GameComponent)
