import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  // handleInputChange(event) {
  //   this.setState({ term: event.target.value });
  // }

  render() {
    return (
      <div>
        {/* <input onChange={this.handleInputChange.bind(this)} /> */}
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;