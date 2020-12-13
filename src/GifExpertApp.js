import React, { useState } from "react";

export const GifExpertApp = () => {
  //   const categories = ["One Punsh", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState([
    "One Punsh",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    
    setCategories(["Asi es",...categories])
  };
  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>agregar</button>
      <ol>
        {categories.map((cat) => {
          return <li key={cat}>{cat}</li>;
        })}
      </ol>
    </div>
  );
};
