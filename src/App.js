import React, { useState } from "react";
import Search from "./Search";

const App = () => {

  const [img, setImg] = useState("");
  const inputEvent = (event) =>{
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };

  return (
    <>
      <div className="container">
      <h2 className="heading-1">Image Search</h2>
        <div className="search">
          <input type="text" placeholder="Search Anything" value={img} onChange={inputEvent} />
          {img === "" ? null : <Search name={img} />}
        </div>
      </div>
    </>
  );
}

export default App;
