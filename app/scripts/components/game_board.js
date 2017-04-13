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
              <header>
                <button type="button" name="button">restart game</button>
              </header>
              <table>
                    {this.props.value.map((item, i) => {
                      return (
                        <tbody key={i}>
                          <tr><th>{item.category}</th></tr>
                          <Question questions={this.props.value}/>

                        </tbody>
                        )
                    })}

              </table>
            </section>
          )
        }
};
//
//           table
//             api.categories.map((category) => {
//               <tr><th>category.name</th></tr>
//               <tr><td>
//                 <Category category={category} />
//                   // New component
//                     this.props.category.questions.map((question) => {
//                       // New Component
//                         <Question body={question.body} answer={question.answer} />
//                           render () {
//                             let question = ""
//                             if (this.state.clicked) {
//                               question = <div>{this.props.question}</div>
//                             }
//
//                             return (
//                               <div>
//                                 <div onClick={this.clickHandler}>{this.props.value}</div>
//                                 {question}
//                               </div>
//                             )
//                           }
//
//                 })
//
//               </td></tr>
//             })
//
//
//
//                 <table>
//                   <tbody>
//                   <tr>
//                     <th>cat1</th>
//                     <th>cat2</th>
//                     <th>cat3</th>
//                     <th>cat4</th>
//                     <th>cat5</th>
//                   </tr>
//                   <tr>
//                     <td>$200</td>
//                     <td>$200</td>
//                     <td>$200</td>
//                     <td>$200</td>
//                     <td>$200</td>
//                   </tr>
//                   <tr>
//                     <td>$400</td>
//                     <td>$400</td>
//                     <td>$400</td>
//                     <td>$400</td>
//                     <td>$400</td>
//                   </tr>
//                   <tr>
//                     <td>$600</td>
//                     <td>$600</td>
//                     <td>$600</td>
//                     <td>$600</td>
//                     <td>$600</td>
//                   </tr>
//                   <tr>
//                     <td>$800</td>
//                     <td>$800</td>
//                     <td>$800</td>
//                     <td>$800</td>
//                     <td>$800</td>
//                   </tr>
//                   <tr>
//                     <td>$1000</td>
//                     <td>$1000</td>
//                     <td>$1000</td>
//                     <td>$1000</td>
//                     <td>$1000</td>
//                   </tr>
//                   </tbody>
//                 </table>
//             </section>
//     }
// };

export default GameBoard;
