import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // useState hook
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [isNumAllowed, setIsNumAllowed] = useState(false)
  const [isCharAllowed, setIsCharAllowed] = useState(false)

  // useRef hook
  const passwordRef = useRef(null)

  // useCallback hook
  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = ""
    if (isNumAllowed) str += "0123456789"
    if (isCharAllowed) str += "~!@#$%^&*_+"

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)
  }, [length, isNumAllowed, isCharAllowed])

  const copyToClipboard = useCallback(() => {
    // console.log(passwordRef)
    passwordRef.current.select()
    // console.log(window)
    window.navigator.clipboard.writeText(password)
    // alert("password copied to clipboard")
  }, [password])

  // useEffect hook
  useEffect(() => {
    passwordGenerator()
  }, [length, isNumAllowed, isCharAllowed, passwordGenerator])

  return (
    <>
      <h1>Password Generator</h1>
      <div>
        <input 
        type="text"
        value={password}
        ref={passwordRef}
        readOnly />
        <button
        onClick={copyToClipboard}>Copy</button>
      </div>
      <div>
        <input 
        type="range"
        value={length}
        min={4}
        max={32}
        onChange={(e) => setLength(e.target.value)} />
        <label>Length: {length}</label>
        <input 
        type="checkbox"
        checked={isNumAllowed}
        onChange={() => {
          setIsNumAllowed(prev => !prev)
          }} />
        <label>Numbers</label>
        <input 
        type="checkbox"
        checked={isCharAllowed}
        onChange={() => {
          setIsCharAllowed(prev => !prev)
          }} />
        <label>Characters</label>
      </div>
    </>
  )
}

export default App