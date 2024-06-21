import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/video1.mp4'
export const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null)

    const closePlayer = (e) =>{
        if (e.target === player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`Video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
<video src={video} autoPlay muted control></video>
    </div>
  )
}
