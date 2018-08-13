import React from "react";
import Lyrics from "../components/Lyrics.js";
import Form from "../components/Form.js";



class SongContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleSongSubmit = this.handleSongSubmit.bind(this)

    this.state = {
      artist: "",
      title: "",
      lyrics: ""
    }
  }

  handleSongSubmit(details){
    const newArtist= details.artist
    const newTitle= details.title
    this.setState({artist: newArtist, title: newTitle})

    console.log('componentDidMount');
    const url = `https://api.lyrics.ovh/v1/${ newArtist}/${ newTitle}`;
    fetch(url)
    .then(response => response.json())
    .then(lyrics => this.setState({lyrics: lyrics.lyrics}))



    .catch(err => console.error(err));

  }

  render(){
    return(
      <div>
        <Form
          onSubmitSong={this.handleSongSubmit}
        />

        <Lyrics
          title={this.state.title}
          artist={this.state.artist}
          lyrics={this.state.lyrics}
        />
      </div>
    )
  }
}

export default SongContainer;
