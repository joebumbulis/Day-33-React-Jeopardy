import React from 'react'

class Toolbar extends React.Component{
  constructor(props){
    super(props)

this.clickStart = this.clickStart.bind(this);
this.clickReset = this.clickReset.bind(this);
  }

clickStart (){
  console.log("Start clicked");
}
clickReset(){
  console.log("Reset Clicked");
}


  render(){
    return (
      <header>
        <button onClick={this.clickStart} type="button">start game</button>
        <button onClick={this.clickReset} type="button" name="button">restart game</button>
      </header>

    )
  }
};
export default Toolbar
