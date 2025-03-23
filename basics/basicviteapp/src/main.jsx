import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Button from './Button.jsx'

const anotherElement = " More Hello World "

const reactElement = React.createElement(
  "a",
  { href: "https://google.com "},
  " Hello World ",
  anotherElement
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //  <App />
  //   <Button />
  reactElement
  // </StrictMode>
)