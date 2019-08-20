import React from "react"
import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"

class GifListContainer extends React.Component {

  state={
    gifs: []
  }

  handleSubmit = (e, term) => {
    e.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(gifObj => {
        const { data } = gifObj
        const gifs = data.slice(0, 3).map(gif => {
          return {
            id: gif.id,
            url: gif.images.original.url,
            title: gif.title
          }
        })
        this.setState({
          gifs
        })
      })
  }

  render() {
    return(
      <React.Fragment>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs}/>
      </React.Fragment>
    )
  }
}

export default GifListContainer
