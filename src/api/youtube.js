import axios from 'axios';

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
        part: 'snippet',
        maxResult: 5,
        key: `AIzaSyCDMhnjR6ybnKm1c8UWEjC4fn6PWedfkUs`
    }
})