
import { toDoListData } from "./components/data.js";
import { useState } from "react";
import "./style.css";

function App() {
  const [todoList, setTodoList] = useState(toDoListData);
  const [input, setInput] = useState("");
  
  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(input);
    setInput("");
}
  const completedItem = (e) => {
    // setTodoList(
    //   todoList.map(
    //     task => task.id !== id 
    //     ? task.completed = !task.completed
    //     : task)
    // )

  }

  const removeItem = () => {

  }
  const displayList = (item, idx) => {
    return (
      <>
    
     { item.completed 
     ? <li key={idx}> { item.title } <button onClick={removeItem}> Remove</button></li> 
     : <li key={idx}> { item.title } <button onClick={completedItem}> Completed</button></li> 
    }
   
     </>
    )
  }

  const handleSubmit = (item) => {
    setTodoList([...todoList, {title: item, completed: false}])
  }

  return (
    <section>
      <header>
            <h1>My To Do List: </h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="to-do-item">New Item</label>
                <input type="text" id="to-do-item" name="to-do-item" value={input} onChange={ handleChange }/>
            </form>
        </header>
      <article>
        <h3>TO DO</h3>
        {
          todoList.filter(x => !x.completed).map(displayList)
        }
      </article>
      <article>
        <h3>COMPLETED</h3>
        {
          todoList.filter(x => x.completed).map(displayList)
        }
      </article>
    </section>
  );
}

export default App;
