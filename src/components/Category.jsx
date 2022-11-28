import React from "react";

function Category({ category, handleClick }) {
  return (
    <ul>
      {category.map((entry, index) => (
        <li key={index} onClick={() => handleClick({ entry })}>
          {entry}
        </li>
      ))}
    </ul>
  );
}

export default Category;
