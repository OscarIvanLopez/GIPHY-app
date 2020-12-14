import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

function GifGrid({ category }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then(setImages);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
            // <li key={id}>{title}</li>
        ))}
      </div>
    </>
  );
}

export default GifGrid;
