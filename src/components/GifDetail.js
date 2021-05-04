import React from "react";
import "./GifDetail.css";

const GifDetail = ({ gif }) => {
  if (!gif) {
    return <div>Loading...</div>;
  }

  // username and Source Link display can be separated to a different component
  return (
    <div>
      <div className="ui embed">
        <video
          key={gif.url}
          autoPlay={true}
          loop={true}
          controls
          width={gif.images.original.width}
          height={gif.images.original.height}
        >
          <source src={gif.images.original.mp4} type="video/mp4" />
          <source src={gif.images.original.webp} type="video/webp" />
          <p>
            Your browser doesn't support HTML5 video. Here is a
            <a href={gif.url}>link to the video</a> instead. And a gif
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </p>
        </video>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{gif.title}</h4>
        <div>{gif.username ? `by ${gif.username}` : ""}</div>
        {gif.source ? <a href={gif.source}>Source Link</a> : null}
        <div>
          <a href={gif.url}>Watch on Giphy</a>
        </div>
      </div>
    </div>
  );
};

export default GifDetail;
