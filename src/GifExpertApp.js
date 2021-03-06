import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
  //   const categories = ["One Punsh", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((cat) => (
          <GifGrid category={cat} key={cat} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
