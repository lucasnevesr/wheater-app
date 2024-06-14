import { useState } from "react";
import AllCities from "../../cities";
import "./CitieInput.css";

function CitieInput({ setChoicedCities, onUpdate }) {
  const [citieInput, setCitieInput] = useState("");

  function handleChange(event) {
    const inputText = event.target.value;

    setCitieInput(inputText);
  }

  function handleClick(event) {
    const search = AllCities.filter((citie) => citie.EnglishName == citieInput);

    if (citieInput === search[0].EnglishName) {
      setChoicedCities((prevState) => {
        const newCitie = prevState;
        newCitie.push(search[0]);

        return newCitie;
      });
    } else {
      alert("Please search for a valid Citie.");
    }

    onUpdate();
    setCitieInput("");
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1 className="heading">Simple Wheater App</h1>
      <form>
        <input
          className="input-citie"
          onChange={handleChange}
          type="text"
          placeholder="Search for a city"
          value={citieInput}
        />
        <button onClick={handleClick} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CitieInput;
