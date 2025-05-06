// state: a component's memory

import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(5)
    let prev = counter > 0
    let next = counter < 10
    return(
        <>
            <h3>Counter: {counter}</h3>
            <button 
            disabled={!next}
            onClick={() => {
                    if (next) setCounter(counter + 1)
                }
            }>
                Increment
            </button>
            <button 
            disabled={!prev}
            onClick={() => {
                    if (prev) setCounter(counter - 1)
                }
            }>
                Decrement
            </button>
        </>
    )
}