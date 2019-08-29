import React, { Component } from 'react';

class GifList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.gifData.map(gifDatum =>
            <img src={gifDatum} />
          )}
        </ul>
      </div>
    );
  }

}

export default GifList;
