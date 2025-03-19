import sytle from "./Read.module.css";

import { useState, useEffect } from "react"
import axios from "axios"

export default function Read() {

    const [todos, setTodos] = useState([])

    const BACKEND = import.meta.env.VITE_BACKEND_URL

    useEffect(() => {
        axios.get(`${BACKEND}/get-todos`)
        .then(response => {
            console.log(response)
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    function deleteTodos(id) {
        setTodos(current => {
            let newCurrent = [...current]
            return newCurrent.filter(todo => todo.id !== id)
        })
        axios.delete(`${BACKEND}/delete/${id}`)
        .then(response => {
            alert("post eliminado com sucesso")
        })
        .catch(error => console.log(error))
    }

    return <section id={sytle.todos}>
        {todos.map((todo) => <div className={sytle.todo} key={todo.id}>
            <div className={sytle.todo__title}>
                <h2>{todo.title}</h2>
                <button onClick={() => deleteTodos(todo.id)}>
                    <i className="fi fi-rs-trash"></i>
                </button>
            </div>
            <div className={sytle.todo__body}>
                <h3>Priority: {todo.priority}</h3>
                <div>
                    <p>{todo.description}</p>
                </div>
            </div>
            
        </div>)}
    </section>
}