import { Todo } from '@/typings.t'
import { log } from 'console'
import Link from 'next/link'
import React from 'react'


const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos:Todo[] = await response.json()
    // console.log("🚀 ~ file: Todolist.tsx:10 ~ fetchTodos ~ this is todoss:", todos)
    return todos
}   


async function Todolist() {
    const todos = await fetchTodos()
  return (
    <>
    {todos.map((todo) =>  (
        <p key={todo.id}>
            <Link href={`/todos/${todo.id}`}>
                Todo: {todo.id}
            </Link>

        </p>
        ))
    }
    </>
  )
}

export default Todolist