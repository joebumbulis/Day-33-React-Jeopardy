import React from 'react'


class Question extends React.Component{
  constructor(props){
    super(props)
    this.setState({
      clicked: false,
      prompt: false
    })

this.renderAction = this.renderAction.bind(this);
  }

renderAction() {
  console.log("hi");
  this.setState({
    prompt: true
  })

  }


render(){
  var divClass = ""
    if (this.prompt) {
      divClass = "prompt"
    } else {
      divClass = "hidden"
    }

  return (<span>
    <tr>
      {this.props.question.map((question, j)=>{
        return (<td onClick={this.renderAction} key={j}>{question.value}</td>)
      })}
    </tr>
  <div className="{divClass}">
    <h5>
    What is the question
    </h5>
  </div>
  </span>)
  }

};

export default Question;
