import React from 'react'

class Question extends React.Component{
  constructor(props){
    super(props)
  }

render(){
  return (
  <tr>
    {this.props.value.map((item, j)=>{
      return (<td key={j}>{item.value}</td>)
    })}
  </tr>
  )
  }

};

export default Question;
