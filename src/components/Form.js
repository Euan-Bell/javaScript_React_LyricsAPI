import React from "react";


class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      artist: ""
    }
  }

  render(){
    return(
      <form className="form">
        <input
          type="text"
          placeholder="Artist Name"
          value={this.state.artist}
        />
        <input
          type="text"
          placeholder="song title"
          value={this.state.title}
          />
          <input type="submit" value="post"/>
      </form>
    )
  }
}
export default Form;
