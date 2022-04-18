import {useState} from "react";

export default function Header ({ handleSubmit }) {
    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(input);
        setInput("");
    }

    return (
        <header>
            <h1>My To Do List: </h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="to-do-item">New Item</label>
                <input type="text" id="to-do-item" name="to-do-item" value={input} onChange={ handleChange }/>
            </form>
        </header>
    )
}

