import React from "react";


class Form extends React.Component{
  constructor(props){
    super(props);
    this.handleArtistChange=this.handleArtistChange.bind(this)
    this.handleTitleChange=this.handleTitleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)

    this.state = {
      title: "",
      artist: ""
    }
  }

  handleArtistChange(event){
    this.setState({artist: event.target.value})
    console.log(event.target.value);
  }

  handleTitleChange(event){
    this.setState({title: event.target.value})
    console.log(event.target.value);
  }
  handleSubmit(event){
    event.preventDefault()
    const artist = this.state.artist.trim()
    const title = this.state.title.trim()
    if (!title || !artist) {
      return
    }
    this.props.onSubmitSong({artist: artist, title: title})
    this.setState({artist: "", title: ""})
  }

  render(){
    return(
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Artist Name"
          value={this.state.artist}
          onChange={this.handleArtistChange}
        />
        <input
          type="text"
          placeholder="Song Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
          />
          <input type="submit" value="Find Me: Lyrics"/>
      </form>
    )
  }
}
export default Form;
