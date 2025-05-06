// updating objects in state

import { useState } from "react";

export default function Scorecard() {
    const [person, setPerson] = useState({
        name: {
            first: 'mann',
            last: 'shah'
        },
        score: 90
    })

    function handlePlusClick() {
        setPerson({
            ...person,
            score: person.score + 1
        })
    }

    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            name: {
                ...person.name,
                first: e.target.value
            }
        })
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            name: {
                ...person.name,
                last: e.target.value
            }
        })
    }

    return (
        <>
            <label>
                Score: {person.score}
                <button
                onClick={handlePlusClick}
                >Increase Score</button>
            </label>
            <label>
                First Name: 
                <input
                value={person.name.first}
                onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last Name: 
                <input
                value={person.name.last}
                onChange={handleLastNameChange}
                />
            </label>
            <h3>Hey, {person.name.first} {person.name.last}. Your score is: {person.score}</h3>
        </>
    )
}