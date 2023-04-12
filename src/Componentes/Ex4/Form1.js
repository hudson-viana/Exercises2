import React, { useState } from "react";

const Form1 = (props) => {
  const [value, setValue] = useState("");

  function handleChange() {
    setValue(event.target.value);
  }

  return (
    <>
      <form>
        <input type="text" value={value} onChange={handleChange} />
        <p>You typed: {value}</p>
      </form>
    </>
  );
};

export default Form1;
