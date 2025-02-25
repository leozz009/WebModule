import React from 'react'
import { useState } from 'react';

export const AppCounter = () => {
    const [counter, setCounter] = useState(1);
  return (
    <div>
        <h2>
            Counter: { counter }
        </h2>
        <button className='btn btn-success m-2 p-3' onClick={ () => setCounter(counter + 1)}>Agrega 1</button>
        <button className='btn btn-dark m-2 p-3' onClick={ () => setCounter(counter - counter)}>Reset</button>
        <button className='btn btn-danger m-2 p-3' onClick={ () => setCounter(counter - 1)}>Resta 1</button>

        
    </div>
  )
}
