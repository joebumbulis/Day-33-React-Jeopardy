import React from 'react'
import Question from './question'

// export default React.createClass({
class GameBoard extends React.Component{
  constructor(props){
    super(props);
  }

    render() {
      return  (
            <section>
              <table>
                    {this.props.value.map((item, i) => {
                      return (
                        <tbody key={i}>
                          <tr><th>{item.category}</th></tr>
                          <Question question={this.props.value}/>

                        </tbody>
                        )
                    })}

              </table>
            </section>
          )
        }
};

export default GameBoard;
