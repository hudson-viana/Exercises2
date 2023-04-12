import React from "react";
import { useState } from "react";

const Form3 = () => {
  const [value, setValue] = useState([]);

  function handleChange() {
    const FilmList = setValue([value, event.target.value]);
  }

  return (
    <>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" />
      <br></br>

      <label for="year">Year</label>
      <input type="text" name="year" id="year" />
      <br></br>

      <input type="submit" onClick={handleChange} />
      <br></br>

      <h4>Film List</h4>
      <p>{FilmList}</p>
    </>
  );
};

export default Form3;
