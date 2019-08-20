import React from "react"

class GifSearch extends React.Component {

  state={
    searchTerm: ""
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <form onSubmit={(e) => {this.props.handleSubmit(e, this.state.searchTerm)}}>
        <input name="searchTerm"
               type="text"
               value={this.state.searchTerm}
               onChange={this.handleChange} />
        <input type="submit" value="Get Ya Gif"/>
      </form>
    )
  }
}

export default GifSearch
