import { useState } from "react";
import "./App.css";
import CitieInput from "./Components/CitieInput/CitieInput.jsx";
import CitieCards from "./Components/CitieCards/CitieCards.jsx";

function App() {
  const [choicedCities, setChoicedCities] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  function updateCitieCards() {
    setUpdateTrigger(!updateTrigger);
  }

  return (
    <div>
      <CitieInput
        setChoicedCities={setChoicedCities}
        onUpdate={updateCitieCards}
      />
      <CitieCards choicedCities={choicedCities} />
    </div>
  );
}

export default App;
