
import Header from "./components/Header/Header.js";
import List from "./components/List/List.js";
import Completed from "./components/Completed/Completed.js";
import { toDoListData } from "./components/data.js";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(toDoListData);
  const [doneList, setDoneList] = useState(["test"]);

  const displayList = (item, idx) => {
    return <li key={idx}> { item.title } </li> 
  }

  const handleSubmit = (item) => {
    setTodoList([...todoList, {title: item}])
  }

  return (
    <section>
      <Header handleSubmit={ handleSubmit } />
      <List data={ todoList } displayList={ displayList }/>
      <Completed data={ doneList } displayList={ displayList }/> 
    </section>
  );
}

export default App;
