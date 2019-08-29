import React, { Component } from 'react';

class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleInput = e => {
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchQuery(this.state.query)
  }

  render() {
    return (
      <div>
        <form id="searchForm" onSubmit={this.handleSubmit}>
          <input type="text" id="gifSearch" onChange={this.handleInput} />
          <input type="submit" id="submit" />
        </form>
      </div>
    );
  }

}

export default GifSearch;
