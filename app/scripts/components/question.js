import React from 'react'


class Question extends React.Component{
  constructor(props){
    super(props)

this.renderAction = this.renderAction.bind(this);
  }

  renderAction(){
    if (this.state.clicked === true){
      return (<span>
                <td></td>
              </span)
    } else {

    }
  }

  if (this.state.checked === true){
        return (<span>
                  <h5>Read</h5>
                  <input type="checkbox" disabled checked="true" />
                </span>);
      } else {
        return (<span>
                  <h5>Mark as Read</h5>
                  <input type="checkbox" onClick={this.handleChecked} checked={this.state.prompt}/>
                </span>);
      }
    },

    render: function(){
      var divClass = ""
      if (this.state.prompt) {
        divClass = "prompt"
      } else {
        divClass = "hidden"
      }


render(){
  return (
  <tr>
    {this.props.question.map((question, j)=>{
      return (<td onClick={this.renderAction} key={j}>{question.value}</td>)
    })}
  </tr>
  )
  }

};

export default Question;
