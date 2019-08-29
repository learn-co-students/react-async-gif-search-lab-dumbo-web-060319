import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifData: []
    };
  }

  fetchQuery = (query) => {
    const url = this.parseUrl(query)
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
      gifData: data['data'].map(dat => dat['images']['original']['url'])
    }))
  }

  parseUrl = (q) => {
    return `http://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC&rating=g`
  }

  render() {
    return (
      <div>
        <GifSearch fetchQuery={this.fetchQuery} />
        <GifList gifData={this.state.gifData} />
      </div>
    );
  }

}

export default GifListContainer;
