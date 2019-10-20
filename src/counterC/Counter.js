import React, {Component} from 'react'; /*nimi*/
import './Counter.css'; /*polun kanssa */

class Counter extends Component {
     state = {
        counter: 100 /* voi lisätä muitakin pilkulla erotettuna*/
    }
    
    addHandler = () => {
      this.setState ({
        counter: this.state.counter + 1
        })
    }

    removeHandler = () => {
      if (this.state.counter > 0) {
        this.setState ({
        counter: this.state.counter - 1
        })
      }
    }
  
    resetHandler = () => {
      this.setState ({
        counter: 100
      })
    }
      
  render() {
    return (<div className = 'container'>
      <div className = {this.state.counter % 2 === 0 ? "circle even" : "circle odd"}>
                <h2 className = 'number'>{this.state.counter}</h2>
               
      </div>
      
      <div className = 'buttons'>  
      <button onClick = { this.addHandler } > Add One </button>        
      <button onClick = { this.removeHandler } > Remove One </button>
      <button onClick = { this.resetHandler } > Reset to 100 </button>
    </div>       
    </div>
    );
  }
}


export default Counter;