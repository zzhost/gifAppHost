import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Gif Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
