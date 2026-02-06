  const API_KEY = process.env.REACT_APP_YOU_TUBE_API

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY




export const GOOGLE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&q="

export const OFFSET_LIVE_CHAT = 20