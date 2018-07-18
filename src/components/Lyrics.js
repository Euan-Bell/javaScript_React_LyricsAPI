import React from 'react';

class Lyrics extends React.Component{

 render(){
  // const altTag = `${this.props.title} by ${this.props.artist} `;

   return (<div className = "lyrics">
     <p>Artist: {this.props.artist}</p>
     <p>Title: {this.props.title}</p>
     <p>Lyrics: {this.props.lyrics}</p>
     </div>)
 }


}

export default Lyrics;
