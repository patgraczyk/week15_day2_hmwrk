import React, { Component } from 'react';

const Song = (props) => {
  return (
  <React.Fragment>
    <h3>{props["im:name"]}</h3>
    <p>Title: {props.title.label}</p>
    <p>Artist: {props.["im:artist"].label}</p>

  </React.Fragment>
  )
}

export default Song;


// ["im:name"]
