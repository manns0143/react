// state: a component's memory

import { useState } from "react"

export default function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    
    function handleFirstNameChange(e) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }

    return(
        <form>
            <label>
                First Name: 
            </label>
            <input 
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange} />
            <label>
                Last Name: 
            </label>
            <input 
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange} />
            <h3>Hello {firstName} {lastName}</h3>
        </form>
    )
}