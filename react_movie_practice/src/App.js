import { useState, useEffect } from "react";


function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  }
  console.log(toDos);

  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          value={toDo} 
          onChange={onChange} 
          type="text" 
          placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {/* key값을 정해줘야 하므로 index를 넣어 줌 */}
        {toDos.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
