import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
    const [todos, setTodos] = useState(["Todo 1", "Todo 2"]); // Object Destructuring
    return (
        <>
            <TodoList todos={todos} />
            <input type="text" />
            <button>Add Todo</button>
            <button>Clear completed</button>
            <div>0 left to do</div>
        </>
    );
}

export default App;
