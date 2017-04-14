import React from 'react'


class Question extends React.Component{
  constructor(props){
    super(props)
  }

render(){
  return (
  <tr>
    {this.props.question.map((question, j)=>{
      return (<td key={j}>{question.value}</td>)
    })}
  </tr>
  )
  }

};

export default Question;
