import React, {useState} from 'react';

const Counter = () => {
    let [count, setCount] = useState(0)
    let [value, setValue] = useState('Hi')

    function increment() {
        setCount(count + 1)
        console.log(count)
    }
    function decrement() {
        setCount(count - 1)
        console.log(count)
    }
    return (
        <div>
            <h1>{count}</h1>
            <h1>{value}</h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;