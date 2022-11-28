import React from "react";

function Card({ items, checked, fav, handleFav }) {
  //If no results
  if (items == null) {
    return <div>Nothing to see here...</div>;
  }

  function filterByAuth(item) {
    if (item.Auth == "" && checked.null) {
      return true;
    }
    if (item.Auth == "OAuth" && checked.oAuth) {
      return true;
    }
    if (item.Auth == "apiKey" && checked.apikey) {
      return true;
    }
    return false;
  }

  function filterByHttp(item) {
    if (item.HTTPS == true && checked.https) {
      return true;
    }
    return false;
  }

  const authFiltered = items.filter(filterByAuth);
  const httpFiltered = authFiltered.filter(filterByHttp);

  //if no results return refine query

  return (
    <div>
      {httpFiltered.map((item, index) => (
        <div key={index}>
          <h4>{item.API}</h4>
          <h5>{item.Description}</h5>
          <h5>{item.Auth}</h5>
          <h5>{item.Cors}</h5>
          <h5>{item.Link}</h5>
          {fav.findIndex((fav) => fav.Link === item.Link) === -1 ? (
            <button
              onClick={() => {
                handleFav({ type: "ADD", payload: { item } });
              }}
            >
              Add
            </button>
          ) : (
            <button
              onClick={() => {
                handleFav({ type: "DEL", payload: { item } });
              }}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
