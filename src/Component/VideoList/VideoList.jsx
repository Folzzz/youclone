import React from 'react'

import { Grid, } from '@material-ui/core'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onSelectVideo }) => {

    const listOfVideos = videos.map((video, id) => {
       return ( <VideoItem key={id} video={video} onVideoSelect={onSelectVideo} /> )
    })

    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList
