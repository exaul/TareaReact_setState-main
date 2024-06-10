import { useState } from 'react';

function createTodos() {
    const todos = [];

    for(let i = 0; i < 10; i++) {
        todos.push({
            id: i,
            content: "ToDo auto generado",
            completed: false
        });
    }

    return todos;
}

function CounterV4() {
    const [todos, setTodos] = useState(createTodos);

    function handleAdd() {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: prevTodos.length,
                content: "Mi ToDo",
                completed: false
            }
        ]);
    }

    return (
        <div>
            <h1>Counter Versión 4</h1>
            {todos.map(todo => (
                <p key={todo.id}>{todo.content}</p>
            ))}
            <button onClick={handleAdd}>Añadir ToDo</button>
        </div>
    );
}

export default CounterV4;