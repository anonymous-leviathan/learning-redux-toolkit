import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeTodo} from '../feature/todo/todoSlice';


function Todos() {
    const todos = useSelector((state) => state.todo.todos);
    let dispatchType = useDispatch();

    console.log("Todos from state:", todos);

    return (
        <>
            <div>Todos</div>
            <ul className='list-none'>
                {todos.map((todo) => (
                    <li key={todo.id} className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
                        <div className="text-white">{todo.text}</div>
                        <button onClick={(e)=> dispatchType(removeTodo(e))} className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;