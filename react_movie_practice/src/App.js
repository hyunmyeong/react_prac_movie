import { useState, useEffect } from "react";

function Hello() {

  useEffect(function(){
    console.log("I'm here!");
    return function() {
      console.log("bye!");
    }
  },[]);

  useEffect(() => {
    console.log("I'm here!");
    return () => console.log("bye!");
  },[]);
  return <h1>Hello</h1>
}

function App() {

  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)

  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div> 
  );
}

export default App;
