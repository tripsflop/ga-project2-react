import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Content from "./Content";
import Favourite from "./Favourite";
import { useReducer } from "react";

function Link() {
  const favsReducer = (state, action) => {
    const x = [];
    switch (action.type) {
      case "ADD":
        return [...state, action.payload.item];

      case "DEL":
        for (let i = 0; i < state.length; i++) {
          if (state[i].Link !== action.payload.item.Link) {
            x.push(state[i]);
          }
        }
        return x;

      default:
        return state;
    }
  };

  const [fav, dispatch] = useReducer(favsReducer, []);
  console.log(fav);

  const handleFav = (item) => {
    dispatch(item);
  };

  return (
    <main>
      <Routes path="/">
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="content"
          element={<Content fav={fav} handleFav={handleFav} />}
        />
        <Route
          path="favourite"
          element={<Favourite fav={fav} handleFav={handleFav} />}
        />
      </Routes>
    </main>
  );
}

export default Link;
