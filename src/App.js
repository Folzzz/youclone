import React, {Component} from 'react';

import { Grid } from '@material-ui/core';

import youtube from './api/youtube';

import { SearchBar, VideoList, VideoDetails } from './Component'

import './App.css';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount(){
    this.handleSubmit('pdf with react')
  }

  handleSubmit= async (searchTerm) => {
    const response = await youtube.get('search', { params: { q: searchTerm }});
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onSelectVideo = (video) => {
    this.setState({
      selectedVideo: video,
    })
  }

  render() {
    const { selectedVideo, videos } = this.state
    return (
      <div className="App">
        <Grid justify="center" container spacing={10} >
          <Grid item xs={12} >
            <Grid container spacing={10} >
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit}/>
              </Grid>
              <Grid item xs={8} >
                <VideoDetails video={selectedVideo} />
              </Grid>
              <Grid item xs={4} >
                <VideoList videos={videos} onSelectVideo={this.onSelectVideo} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
  
}

export default App;
