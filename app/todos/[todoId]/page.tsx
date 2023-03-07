

import { Todo } from '@/typings.t'
import React from 'react'

type pageParams = {
    params: {
        todoId: string
    }
}


const fetchTodo = async (todoId: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60 } })
    const data: Todo = await res.json()
    return data
}

/* @ts-ignore */
async function TodoPage({ params: { todoId } }: pageParams) {
    /* @ts-ignore */
    const todo = await fetchTodo(todoId)


    return (
        <div className='m-5 bg-yellow-200 border-4 shadow-lg p-10 text-black'>
            <p>
                #{todo.id} : {todo.title}
            </p>
            <p>completed: {todo.completed ? "Yes" : "No"}</p>
            <p className='border-t border-black mt-5 text-right'>
                {todo.userId}
            </p>
        </div>
    )
}
export default TodoPage


export async function generateStaticParams() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
    const todos: Todo[] = await res.json()

    const trimTodos = todos.splice(0, 10)

    return trimTodos.map((todo) => ({
        todoId: todo.id.toString()
    }))
}