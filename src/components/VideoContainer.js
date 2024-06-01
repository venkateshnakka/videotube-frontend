import React,{useState,useEffect}from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const getvideos = async () =>{
    try{
      const data = await fetch(YOUTUBE_VIDEOS_API)
      const json = await data.json()
      setVideos(json.items)
      // console.log(json.items)
    }
    catch(err){
      console.log(err.message)
    }
  }
  useEffect(()=>{
    getvideos()
  },[])
  return (
    <div className='flex flex-wrap'>
      {
        videos?.map((eachVideo)=>{
          return <Link to={"/watch?v="+eachVideo.id}><VideoCard eachVideo={eachVideo} key={eachVideo.id}/></Link>
        })
      }
    </div>
  )
}

export default VideoContainer