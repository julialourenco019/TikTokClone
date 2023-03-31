import React ,{ useRef, useState} from 'react'
import VideoFooter from "./components/footer/VideoFooter"
import  "./Video.css"

function Video() {
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
       src="
       https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4">
       

        </video>
        {/* side bar*/ }
       <VideoFooter/>
</div>
  )
}

export default Video