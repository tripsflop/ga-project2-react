import React from "react";

function Category({ category, handleClick }) {
  return (
    <ul>
      {category.map((entry) => (
        <li key={entry} onClick={() => handleClick({ entry })}>
          {entry}
        </li>
      ))}
    </ul>
  );
}

export default Category;
