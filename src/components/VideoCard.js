import React from 'react'

const VideoCard = ({eachVideo}) => {
    const {snippet,statistics} = eachVideo
    const {channelTitle, title, thumbnails} = snippet;
    console.log(eachVideo)
  return (
    <div className='p-2 m-2 max-w-64 shadow-lg'>
        <img src={thumbnails.medium.url} alt={title} className='rounded-lg w-30'/>
        <div>
            <p className='font-bold'>{title}</p>
            <p>
                {channelTitle}
            </p>
            <p>{statistics.viewCount} views</p>
        </div> 
    </div>
  )
}

export default VideoCard