import React, { useRef, useEffect } from 'react'

function interactiveWindow(props) {
    //function updateScroll(){
    //     props.chatWindow.scrollTop = props.chatWindow.scrollHeight
    // }
  useEffect(()=>{
    props.chatWindow.current.scrollTo({
        bottom: 0,
        behavior: 'smooth',
    })
  },[props.chatWindow.current]) 
      
  return (
    <div className='transition-all shadow-lg flex flex-col m-8 mb-8 w-5/6 h-72 bg-color1 rounded-lg text-white md:w-1/2 p-2 md:m-8 overflow-y-auto' ref={props.chatWindow}>
    </div>
  )
}

export default interactiveWindow