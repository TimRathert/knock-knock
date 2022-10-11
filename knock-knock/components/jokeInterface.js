import React, {useState} from 'react'

function jokeInterface() {
    const [ setup, setSetup ] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {setup: setup}
        const formdata = new FormData();
        formdata.append('setup', setup)
        console.log(formdata)
        try {
            const response = await fetch(`http://127.0.0.1:4000/receive`, {
                method: 'POST',
                headers:{"content-type": 'multipart/form-data'},
                body: formdata
                })
            console.log(await response.json())
        }
        catch(e){
            console.log(e)
        }
    }
    const handleChange = (e) => {
        setSetup(e.target.value)
    }    
  return (
    <div className={`bg-color2 m-12 rounded-lg p-4 w-5/6 md:w-1/2 p-2 m-8 text-black`}>
       <form onSubmit={ handleSubmit } className={`select-none h-fit items-center flex flex-col justify-around md:flex-row`}>
          <label className={`md: self-center`} htmlFor='setup'>Who's there?</label>
          <input onChange = { handleChange } className={`m-2 self-center !text-[color:black]`} type='text' name='setup' id='setup' />
          <button className={`p-2 rounded-lg border-0 hover:bg-color5/10 md:m-2 md:text-lg md:border-2 md:border-color5/10`} type='submit'>send</button>
       </form>
    </div>
  )
}

export default jokeInterface