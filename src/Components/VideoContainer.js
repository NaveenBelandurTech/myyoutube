import {useEffect,useState} from 'react'
import {YOUTUBE_VIDEO_API} from '../utils/constants'
import VideoCards from './VideoCards'
import {Link} from 'react-router-dom'


const VideoContainer = () => {
  const [video,setVideo] = useState([])

  const GetApiVideo = async () =>{
    try{
   const ResponseVideo = await fetch(YOUTUBE_VIDEO_API)
     const ApiVideo = await ResponseVideo.json()
     setVideo(ApiVideo.items)
    }
    catch(err){
      throw new Error(err)
    }
  
  }

  useEffect(()=>{
    GetApiVideo()
  },[])

  return (
     <div className='flex flex-wrap'>
    {video?.map((data,i)=>{
      {console.log(data,'data')}
     return (
      
  <Link to={`/watch?v=${data.id}`}><VideoCards key={i} item={data} /></Link>
     )
    })}
    </div>
  )
}

export default VideoContainer