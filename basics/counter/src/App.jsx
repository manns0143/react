import { useState } from 'react'
import './App.css'

function App() {
  // variable value is updating but the ui is not updating
  // let count = 10

  // function incValue() {
  //   count++
  //   console.log(count)
  // }

  // function decValue() {
  //   count--
  //   console.log(count)
  // }

  let [count, setCount] = useState(10)

  function incValue() {
    setCount(count = count + 1)
    console.log(count)
  }

  function decValue() {
    setCount(count = count - 1)
    console.log(count)
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={incValue}>Increase counter</button>
      <button onClick={decValue}>Decrease counter</button>
    </>
  )
}

export default App
