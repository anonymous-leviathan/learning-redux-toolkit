import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../feature/todo/todoSlice';


function AddTodo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todo.todos);

    const addTodoHandler = (e) => {
        e.preventDefault();
        console.log("Adding Todo:", input);
        dispatch(addTodo(input));
        setInput('');
    };

    console.log("Todos from state:", todos);

    return (<div>
            <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
                <input
                    type='text'
                    className='bg-grey-800 rounded border border-grey-700
                 focus:border-indigo-500 forcus:ring-2 focus:ring-indigo-900
                  text-base outline-none text-grey-100 py-1 px-3
                   leading-8 transition-colors duration-200 ease-in-out'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Add a new todo'
                />
                <button
                    type='submit'
                    className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                >
                    Add Todo
                </button>

            </form>
        </div>)
}

export default AddTodo