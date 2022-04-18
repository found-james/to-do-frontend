
import Header from "./components/Header/Header.js";
import List from "./components/List/List.js";
import Completed from "./components/Completed/Completed.js";
import { toDoListData } from "./components/data.js";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(toDoListData);
  const [doneList, setDoneList] = useState([]);

  const displayList = (item, idx) => {
    return <li key={idx}> { item.title } </li>
  }

  return (
    <section>
      <Header />
      <List data={ todoList } displayList={ displayList }/>
      {/* <Completed />  */}
    </section>
  );
}

export default App;
