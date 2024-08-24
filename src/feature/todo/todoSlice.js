import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: '1', text: 'todo 1'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("Action dispatched:", action);
            const todo = {
                id: nanoid(), text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            console.log("Remove Todo action:", action);
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;