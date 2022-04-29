import React, { Component, } from 'react';
import './App.css';
import Circles from './Circles';
import CircleSelector from './CircleSelector';  


class App extends Component { 

    state={ 
      button: 1,
      selected: false, 
    }

//  handleClick = (incomingButton) => { 
//     if (this.state.selected) { 
//       this.setState({selected:false})
//     } else { 
//       this.setState({selected:true}) 
//     } 
//     console.log("this works")
//  } 

handleClick = (incomingButton) => {
  this.setState({
    button: incomingButton,
    selected: true
  })
}


  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <div> 
            <table>  
              <tr> 
                <td> 
                 <CircleSelector button={this.state.button} isSelected={this.state.selected} handleSelect={this.handleClick}> </CircleSelector> 
                </td> 
                <td> 
                 <Circles button={this.state.button}> </Circles>
                </td>
              </tr>
            </table>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
