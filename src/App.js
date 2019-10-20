import React from 'react';
import './App.css';
import Counter from './counterC/Counter.js';
/* import CounterHooks from './counterHooks/CounterHooks.js'; */


const App = () => {
    return ( 
    <div>
      <div className = "App" >
            This is my Counter App :)
      </div>
    <Counter />  
    {/* <CounterHooks />  */}
    </div>
             

);

}


export default App;
