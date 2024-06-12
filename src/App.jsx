import { useState, useEffect } from "react";
import "./App.css";
import CitieInput from "./Components/CitieInput/CitieInput.jsx";
import CitieCards from "./Components/CitieCards/CitieCards.jsx";

function App() {
  const [choicedCities, setChoicedCities] = useState([]);

  useEffect(() => {
    console.log(choicedCities);
  }, [choicedCities]);

  return (
    <div>
      <CitieInput setChoicedCities={setChoicedCities} />
      <CitieCards choicedCities={choicedCities} />
    </div>
  );
}

export default App;
