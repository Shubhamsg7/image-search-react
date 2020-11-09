import React from "react";

const Search = (props) => {

    const img =`https://source.unsplash.com/300x400/?${props.name}`;

  return (
    <>
      <div className="img">
        <img src={img} alt="image" />
      </div>
    </>
  );
}

export default Search;
