import axios from 'axios';

const KEY ='AIzaSyCwi-M_OsaKYbZ7VnuxLmveIr5OdOnscFM';



//setup axiox
//preconfigured instaneof axiox with default paramete


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});