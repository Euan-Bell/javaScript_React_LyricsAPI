import React from "react";
// import Song from "../components/Song.js";
import Lyrics from "../components/Lyrics.js";
import Form from "../components/Form.js";



class SongContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      artist: "Adele",
      title: "Hello",
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



  render(){
    return(
      <div>
        <h2>Select A Song!</h2>
        <Form />
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
