import { useState } from "react";
import "./App.css";
function App() {
  useState();
  let [count, setCount] = useState(0);
  const changeCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
    <button onClick={changeCounter} >Batool Hamdallh {count}</button>

    </>
  );
}

export default App;
