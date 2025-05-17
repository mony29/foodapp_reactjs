import { useState } from "react";

export default function Form() {
  //   const [name, setName] = useState("");
  const [name, setName] = useState({ firstName: "", lastName: "" });

  //   function handleChange(e) {
  //     console.log("You have input something");
  //     // console.log(e);
  //     // console.log(e.target.value);
  //     setName(e.target.value);
  //     console.log("Input: ", e.target.value);
  //   }

  function handleSubmit(e) {
    e.preventDefault(); // prevent default refresh page
    console.log(name);
  }

  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        {/* <input onChange={handleChange} type="text" value={name} /> */}
        {/* <input
          onChange={function demo(e) {
            return handleChange(e);
          }}
          type="text"
          value={name}
        /> */}

        {/* <input onChange={(e) => handleChange(e)} type="text" value={name} /> */}
        {/* most use directly without create function */}
        {/* <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        /> */}

        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />

        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />

        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}
