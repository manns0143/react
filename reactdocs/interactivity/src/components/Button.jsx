// responding to events
// queueing a series of state updates

import { useState } from "react"

export default function Button() {
    const [num, setNum] = useState(0)

    function handleClick() {
        console.log("Button was clicked")
    }

    function handleDouble() {
        // setNum(num + 1)
        // setNum(num + 1)
        setNum(num => num + 1)
        setNum(num => num + 1)
    }

    return (
        // correct ways to pass event handlers
        // <button onClick={handleClick}>
        //     Click Me
        // </button>
        // <button onClick={() => console.log("Button was clicked")}>
        //     Click Me
        // </button>

        // dont call the function, pass the function otherwise the function will execute when the component renders, not on clicking the button
        // <button onClick={handleClick()}>
        //     Click Me
        // </button>
        // <button onClick={console.log("Button was clicked")}>
        //     Click Me
        // </button>

        <>
            <h3>Number: {num}</h3>
            <button onClick={handleDouble}>
                Double
            </button>
        </>
    )
}