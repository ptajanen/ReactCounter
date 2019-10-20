import React, {useState} from 'react'; /*nimi*/
import './CounterHooks.css'; /*polun kanssa */

   
    const CounterHooks = () => {
        const [counter, setCounter] = useState(1000);

        const addHandler = () => {
            setCounter(counter + 1);
        };
        const removeHandler = () => {
            setCounter(counter - 1);
        };
        const resetHandler = () => {
            setCounter(1000);
        }
         return (
            <div>
                <div className = {this.state.counter % 2 === 0 ? "circle even" : "circle odd"}></div>
                <h2>{counter}</h2>
            <div className="buttons">
                <button onClick={addHandler}>ADD ONE</button>
                <button onClick={removeHandler}>REMOVE ONE </button>
                <button onClick={resetHandler}>RESET </button>
            </div> 

            </div>
        )
    }
    
    export default CounterHooks;