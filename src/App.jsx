import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cities from "./cities.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log("Cities");
  console.log(Cities);

  useEffect(() => {
    setCount(Cities);
  }, [setCount]);

  return (
    <div>
      <h1>Simple Wheater App</h1>
    </div>
  );
}

export default App;
