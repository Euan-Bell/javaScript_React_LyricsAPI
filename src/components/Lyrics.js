import React from 'react';

class Lyrics extends React.Component{

 render(){
   return (<div className = "lyrics">
     <p className="artist"> Artist: {this.props.artist}</p>
     <p>Title: {this.props.title}</p>
     <p>Lyrics:{this.props.lyrics}</p>

     </div>)
 }


}
export default Lyrics;
