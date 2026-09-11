import { useState } from "react"

function TodoList() {
    const[InputValue, SetInputValue] = useState()
    const [Todo, SetTodo] = useState([
        {id: 1, name:"example"},
    ])
    const handleAdd = () => {
        const t = {
            id: Date.now(),
            name: InputValue,
            IsCompleted: false,
        }
        SetTodo([...Todo, t])
    }
    const handleRemove = (id) => {
        SetTodo(Todo.filter((t) => t.id !== id))
    }
    return(
        <div className="TodoList">
            <input type="text" 
            value={InputValue} 
            onChange={(e) => SetInputValue(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            {Todo.map((t) => (
                <div   key={2}>
                    <span key={t.id}>{t.name}</span>
                    <button onClick={() => handleRemove(t.id)}> remove</button>
                </div>
                ))}
        </div>
    )
}

export default TodoList