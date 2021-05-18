import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import GifList from "./GifList";
import GifDetail from "./GifDetail";
import useGifs from "./hooks/useGifs";

const App = () => {
  const [gifs, search] = useGifs("welcome");
  const [selectedGif, setSelectedGif] = useState(null);

  useEffect(() => {
    setSelectedGif(gifs[0]);
  }, [gifs]);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui stackable grid">
        <div className="ui row">
          <div className="ui eleven wide column">
            <GifDetail gif={selectedGif} />
          </div>
          <div className="ui five wide column">
            <GifList gifs={gifs} onGifSelect={setSelectedGif} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
