import {useState} from "react";

export default function Header () {
    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        setInput("");
    }

    return (
        <header>
            <h1>My To Do List: </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="to-do-item">New Item</label>
                <input type="text" id="to-do-item" name="to-do-item" value={input} onChange={ handleChange }/>
            </form>
        </header>
    )
}

