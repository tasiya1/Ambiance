import { useState } from "react"
import ToDoItem from "./ToDoItem"

function ToDoListBlock () {

    const [toDoItems, setToDoItems] = useState<string[]>([])
    const addToDoItem = () => {
        setToDoItems([...toDoItems, ""])
    }

    return (
        <div className="todo-list">
            {toDoItems.map((item, index) => (
                <ToDoItem key={index} />
            ))}
            <div className="empty-todo-area" onClick={() => addToDoItem()}>+ Add task</div>
        </div>    
    )

}

export default ToDoListBlock