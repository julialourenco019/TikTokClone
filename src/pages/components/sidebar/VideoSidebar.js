import React , { useState }from 'react'
import "./VideoSidebar.css"
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
function VideoSidebar({likes,messages,shares}) {
    
    const [ liked, setliked] = useState(false)
    function handdleLike(){
        setliked(!liked)
    }
  return (
    <div className='videoSidebar'>
        <div 
        
        className='videoSidebar_options'
        onClick={handdleLike}
        >
            { liked ? <FavoriteSharpIcon fontSize='large'/> :  <FavoriteBorderSharpIcon fontSize='large'/>}
         
          <p>{ liked ? likes + 1 : likes}</p>
         
        </div>
        <div className='videoSidebar_options'>
          <ChatRoundedIcon  fontSize='large'/>
          <p>{messages}</p>
         
        </div>
        <div className='videoSidebar_options'>
          <ShareRoundedIcon  fontSize='large'/>
          <p>{ shares}</p>
         
        </div>
        
        </div>
  )
}

export default VideoSidebar