import React from "react"

const GifList = (props) => {

  const renderGifs = () => {
    return props.gifs.map(gif => <li key={gif.id} ><img src={gif.url} alt={gif.title} /> </li>)
  }
  return (
    <ul>
      {renderGifs()}
    </ul>
  )
}

export default GifList
