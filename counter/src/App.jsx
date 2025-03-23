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

  const [count, setCount] = useState(10)

  function incValue() {
    setCount(count + 1)
    // console.log(count)
  }

  function decValue() {
    setCount(count - 1)
    // console.log(count)
  }

  function incValueBy5() {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1) this does not work

    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
  }

  function decValueBy5() {
    setCount(count => count - 1)
    setCount(count => count - 1)
    setCount(count => count - 1)
    setCount(count => count - 1)
    setCount(count => count - 1)
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={incValue}>Increase counter</button>
      <button onClick={decValue}>Decrease counter</button>
      <button onClick={incValueBy5}>Increase counter by 5</button>
      <button onClick={decValueBy5}>Decrease counter by 5</button>
    </>
  )
}

export default App