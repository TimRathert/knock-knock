import React, { useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'

function InteractiveWindow(props) {
  useEffect(()=>{
    scroll.scrollToBottom({containerId	: 'interaction-window', smooth:true, isDynamic:true })
    setTimeout(()=>{scroll.scrollToBottom({containerId	: 'interaction-window' })},1000)
  },[props.jokeState]) 
      
  return (
    <div className='transition-all shadow-lg flex flex-col m-8 mb-8 w-5/6 h-72 bg-color1 rounded-lg text-white md:w-1/2 p-2 md:m-8 overflow-y-auto' 
      ref={props.chatWindow} 
      id="interaction-window">
      {/* new text is added here */}
    </div>
  )
}

export default InteractiveWindow