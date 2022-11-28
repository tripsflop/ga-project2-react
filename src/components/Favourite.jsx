import React from "react";

function Favourite({ fav, handleFav }) {
  return (
    <div>
      <h1>Favourite</h1>
      {fav.map((item, index) => (
        <div>
          <h4 key={index}>{item.API}</h4>
          <h5>{item.Description}</h5>
          <h5>{item.Auth}</h5>
          <h5>{item.Cors}</h5>
          <h5>{item.Link}</h5>
          <button
            onClick={() => {
              handleFav({ type: "DEL", payload: { item } });
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favourite;
