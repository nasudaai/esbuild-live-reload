//import React from 'react';
import { useState } from 'react';
import { Para } from './components/Para';


export default function App() {
  return (
    <>
      <h1>Hello client render</h1>
      <Counter />
      <Para />
    </>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked me {count} times
    </button>
  );
}