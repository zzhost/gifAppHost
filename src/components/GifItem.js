import React from "react";
import "./GifItem.css";

const GifItem = ({ gif, onGifSelect }) => {
  return (
    <div className="gif-item item" onClick={() => onGifSelect(gif)}>
      <img
        className="ui image"
        src={gif.images.fixed_height_still.url}
        alt={gif.title}
      />
      <div className="content">
        <div className="header">{gif.title}</div>
        <div>{gif.username ? `by ${gif.username}` : ""}</div>
        {gif.source ? <a href={gif.source}>Source Link</a> : null}
      </div>
    </div>
  );
};

export default GifItem;
