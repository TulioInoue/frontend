import style from "./Create.module.css"

import axios from "axios"

export default function Create() {

    const BACKEND = import.meta.env.VITE_BACKEND_URL

    function handleSubmit(element) {
        element.preventDefault()

        const newTodo = {
            "title": element.target[0].value,
            "description": element.target[1].value,
            "priority": element.target[2].value
        }

        console.log(newTodo)


        axios.post(
            `${BACKEND}/create`,
            newTodo
        ).catch(
            error => console.log(error)
        ).then(

            answer => console.log(answer)
        )
        
    }

    return <section id={style.create__post}>
        <form onSubmit={(element) => handleSubmit(element)} id = {style.create__post_form}>
            <div id={style.create_post_form_title}>
                <h2>Create your task</h2>
            </div>
            <section id={style.create_post_form_content}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" id="description" />
                </div>
                <div>
                    <label htmlFor="priority">Priority:</label>
                    <input type="number" min={1} max={5} id="priority" />
                </div>
            </section>
            <div id={style.create_post_form_footer}>
                <button>submit</button>
            </div>
        </form>
    </section>
}