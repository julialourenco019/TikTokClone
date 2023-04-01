import React ,{ useRef, useState} from 'react'
import VideoFooter from "./components/footer/VideoFooter"
import VideoSidebar from './components/sidebar/VideoSidebar'
import  "./Video.css"

function Video({likes,messages,shares,name, descripition,music,url}) {
  const VideoRef = useRef(null)
  const  [play, setPlay] = useState(false)

  function handdleStart(){
   if(play){
      VideoRef.current.pause()
      setPlay(false)
    }
    else{
      VideoRef.current.play()
      setPlay(true)
   }
    }
  return (
    <div className='Video'>
       
    <video 
       className='video__player'
       ref={VideoRef}
       onClick={handdleStart}
       loop
       src={url}
       >
       

        </video>
        <VideoSidebar
        likes ={likes}
        messages={messages}
        shares={shares}
        />
       <VideoFooter
       name ={name}
       description={ descripition}
       music={music}


         />
</div>
  )
}

export default Video