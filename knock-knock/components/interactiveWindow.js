import React from 'react'

function interactiveWindow(props) {
  return (
    <div className='transition-all shadow-lg flex flex-col m-8 mb-8 w-5/6 h-72 bg-color1 rounded-lg text-white md:w-1/2 p-2 md:m-8 overflow-y-auto' ref={props.chatWindow}>
    </div>
  )
}

export default interactiveWindow