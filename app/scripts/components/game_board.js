import React from 'react'

export default React.createClass({
    render: function() {
      return  <section>
                <header>
                  <button type="button" name="button">restart game</button>
                </header>
                <table>
                  <tr>
                    <th>cat1</th>
                    <th>cat2</th>
                    <th>cat3</th>
                    <th>cat4</th>
                    <th>cat5</th>
                  </tr>
                  <tr>
                    <td>$200</td>
                    <td>$200</td>
                    <td>$200</td>
                    <td>$200</td>
                    <td>$200</td>
                  </tr>
                  <tr>
                    <td>$400</td>
                    <td>$400</td>
                    <td>$400</td>
                    <td>$400</td>
                    <td>$400</td>
                  </tr>
                  <tr>
                    <td>$600</td>
                    <td>$600</td>
                    <td>$600</td>
                    <td>$600</td>
                    <td>$600</td>
                  </tr>
                  <tr>
                    <td>$800</td>
                    <td>$800</td>
                    <td>$800</td>
                    <td>$800</td>
                    <td>$800</td>
                  </tr>
                  <tr>
                    <td>$1000</td>
                    <td>$1000</td>
                    <td>$1000</td>
                    <td>$1000</td>
                    <td>$1000</td>
                  </tr>
                </table>
            </section>
    }
})

// export default connection()(GameBoard)
