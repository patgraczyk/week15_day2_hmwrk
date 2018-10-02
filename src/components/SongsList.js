import React, { Component } from 'react';
import Song from './Song'

const SongsList = (props) =>{
  render() {
     var songsNodes = this.props.data.map(function(song) {
       return (
         <Song title={props.title.label} key={song.id}>
           {song.["im:artist"].label}
         </Song>
       );
     });

    return(
      <div className="songsList">
      {commentNodes}
    </div>
    )
  }

export default SongsList;
