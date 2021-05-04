import React from "react";
import SearchBar from "./SearchBar";
import giphy from "./apis/giphy";
import GifList from "./GifList";
import GifDetail from "./GifDetail";

class App extends React.Component {
  state = { gifs: [], selectedGif: null };

  componentDidMount() {
    this.onTermSubmit("welcome");
  }

  onTermSubmit = async (term) => {
    try {
      const response = await giphy.get("/search", {
        params: {
          q: term,
        },
      });

      this.setState({
        gifs: response.data.data,
        selectedGif: response.data.data[0],
      });
    } catch (err) {
      console.error("Error response");
      //console.log(err.response.data);
      //console.log(err.response.status);
      //console.log(err.response.headers);
      console.log(err);
    }
  };

  onGifSelect = (gif) => {
    this.setState({ selectedGif: gif });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="ui eleven wide column">
              <GifDetail gif={this.state.selectedGif} />
            </div>
            <div className="ui five wide column">
              <GifList gifs={this.state.gifs} onGifSelect={this.onGifSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
