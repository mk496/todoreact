import React from 'react'
import ToDo from './ToDo'

function TodoList({ todos, toggleTodo }) {
    return (
        todos.map(todo => {
            return <ToDo key={todo} todo={todo} toggleTodo={toggleTodo} />
        })
    )
}

export default TodoList
