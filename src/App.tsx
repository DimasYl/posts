import React, {useState} from 'react';
import './App.css';

function App() {
    let [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
        console.log(count)
    }
    function decrement() {
        setCount(count - 1)
        console.log(count)
    }

    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;
