import React from 'react'

function jokeInterface() {

  return (
    <div className={`bg-color2 m-12 rounded-lg p-4 w-5/6 md:w-1/2 p-2 m-8`}>
       <form action='' method='post' className={`select-none h-fit items-center flex flex-col justify-around md:flex-row`}>
          <label className={`md: self-center`} for='setup'>Who's there?</label>
          <input className={`m-2 self-center text-black`} type='text' name='setup' id='setup' />
          <button className={`p-2 rounded-lg border-0 hover:bg-color5/10 md:m-2 md:text-lg md:border-2 md:border-color5/10`} type='submit'>send</button>
       </form>
    </div>
  )
}

export default jokeInterface