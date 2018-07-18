import React from "react";
// import Song from "../components/Song.js";
import Lyrics from "../components/Lyrics.js";
import Form from "../components/Form.js";



class SongContainer extends React.Component{
  constructor(props){
    super(props);
    // this.handleArtistSubmit = this.handleArtistSubmit.bind(this)
    // this.handleTitleSubmit = this.handleTitleSubmit.bind(this)
    this.handleSongSubmit = this.handleSongSubmit.bind(this)

    this.state = {
      artist: "",
      title: "",
      lyrics: ""
    }
  }

  componentDidMount(){
    console.log('componentDidMount');
    const url = 'https://api.lyrics.ovh/v1/adele/hello';
    fetch(url)
    .then(response => response.json())
    .then(lyrics => this.setState({lyrics: lyrics.lyrics}))

    .catch(err => console.error(err));
  }


  handleSongSubmit(details){
    const newArtist= details.artist
    const newTitle= details.title
    this.setState({artist: newArtist, title: newTitle})

    console.log('componentDidMount');
    const url = `https://api.lyrics.ovh/v1/${newArtist}/${newTitle}`;
    fetch(url)
    .then(response => response.json())
    .then(lyrics => this.setState({lyrics: lyrics.lyrics}))

    .catch(err => console.error(err));

  }
  // handleTitleSubmit(title){
  //   const newTitle= this.state.title
  //   this.setState({title: newTitle})
  // }



  render(){
    return(
      <div>
        <h2>Select A Song!</h2>
        <Form
          onSubmitSong={this.handleSongSubmit}
          // onSubmitSong={this.handleArtistSubmit}
          // onSubmitSong={this.handleTitleSubmit}
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
