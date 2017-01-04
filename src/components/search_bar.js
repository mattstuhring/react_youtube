import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar input-group">
        <input
          type="text"
          className="form-control"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button">Search</button>
        </span>
      </div>
    );
  }

}

export default SearchBar;
