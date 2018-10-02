import React, { Component } from 'react';
import SongsList from '../components/SongsList'

class SongsBox extends Component {
  constructor(props){
    super(props)
    this.state= {
      songs:[],
      currentSong: null
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data})
    });
    request.send();
  }

  render(){
    return(
      <div>
        <h3> Top 20 Songs on ITunes </h3>
        <SongsList />
      </div>
    )
  }
}


export default SongsBox;
