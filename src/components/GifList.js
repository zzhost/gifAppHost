import React from "react";
import GifItem from "./GifItem";

const GifList = ({ gifs, onGifSelect }) => {
  const renderedList = gifs.map((gif) => {
    return <GifItem key={gif.id} gif={gif} onGifSelect={onGifSelect} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default GifList;
