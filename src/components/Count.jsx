import React, { useState }from 'react';
import './Count.css';

function Count() {
    const [count,setCount] = useState(0);

    function Increase () {
        setCount((prev) => prev + 1);
    }

    function Decrease () {
        setCount((prev) => prev - 1);
    }

    function Reset () {
        setCount(0);
    }

  return (
    <div className="wraper">
    <div className="count">Count : {count}</div>
    <div className="wraper-count">
    <button onClick={() => Increase()}>+</button>
    <button onClick={() => Decrease()}>-</button>
    <button onClick={() => Reset()}>Reset</button>
    </div>
    </div>
  )
}

export default Count