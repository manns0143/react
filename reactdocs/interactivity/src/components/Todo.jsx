// updating arrays in state

import { useState } from 'react'

let nextIdx = 0

export default function Todo() {
    const [todos, setTodos] = useState([])
    const [name, setName] = useState('')

    function addTodo() {
        setTodos([
            ...todos,
            {
                id: nextIdx++,
                name: name
            }
        ])
        setName('')
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return(
        <>
            <h3>Add Todos: </h3>
            <input 
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <button onClick={addTodo}>
                Add
            </button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.name}
                        <button onClick={() => removeTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}