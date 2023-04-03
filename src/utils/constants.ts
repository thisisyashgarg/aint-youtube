export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const HAMBURGER_LOGO_URL =
  "https://cdn-icons-png.flaticon.com/512/6065/6065135.png";
export const YOUTUBE_LOGO_URL =
  "https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg";
export const RELATED_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&relatedToVideoId=`;
export const GET_COMMENTS_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=35&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&videoId=`;
export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&q=`;
export const CORS_HEROKU_PROXY = "https://cors-anywhere.herokuapp.com/";
export const VIDEO_DETAILS_FROM_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&id=`;
