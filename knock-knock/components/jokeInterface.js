import React, { useState, useRef } from 'react'

function jokeInterface(props) {
    const setup = props.setup
    const setSetup = props.setSetup
    const jokeState = props.jokeState
    const setJokeState = props.setJokeState

    const userText = (text) => {
        const newDialog = document.createElement('div')
        newDialog.className = 'self-end m-1 w-fit p-2 shadow-md rounded-lg text-white bg-color4/10'
        const newDialogContent = document.createTextNode(text)
        newDialog.appendChild(newDialogContent)
        props.chatWindow.current.appendChild(newDialog)
    }
    const responseText = async (text, time = 0) => {
        const response = setTimeout(()=>{
            const newDialog = document.createElement('div')
            newDialog.className = 'shadow-md self-start m-1 w-fit p-2 rounded-lg text-white bg-color4/10'
            const newDialogContent = document.createTextNode(text)
            newDialog.appendChild(newDialogContent)
            props.chatWindow.current.appendChild(newDialog)
        }, time)
    }
    const knockknock = async (e) => {
        userText('Knock knock')
        responseText('Who\'s there?', 1000)
        setTimeout(() => {setJokeState('setup')}, 1000)
        
    }
    const setupSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('setup', setup)
        try {
            const response = await fetch(process.env.TEST_URL, {
                method: 'POST',
                headers:{"content-type": 'multipart/form-data'},
                body: formdata
                })
            const newText = await response['message']
            console.log(await newText)
            responseText(newText)
        }
        catch(e){
            console.log(e)
        }
    }
    const handleChange = (e) => {
        setSetup(e.target.value)
    }

    if (jokeState == 'init'){ 
        return (
            <div className={`transition-all shadow-lg bg-color2 rounded-lg p-4 w-5/6 md:w-1/2 p-2 md:m-8 text-black flex justify-center `}>
                    <button className={`shadow-md p-2 bg-color4/60 rounded-lg border-0 hover:bg-color5/10 md:m-2 md:text-lg md:border-2 md:border-color5/10`} onClick={ knockknock }>knock knock</button>
            </div>
        )
    }
    if (jokeState == 'setup'){ 
        return (
            <div className={`transition-all shadow-lg bg-color2 rounded-lg p-4 w-5/6 md:w-1/2 p-2 md:m-8 text-black`}>
                <form onSubmit={ setupSubmit } className={`select-none h-fit items-center flex flex-col justify-around md:flex-row`}>
                    <label className={`md: self-center`} htmlFor='setup'></label>
                    <input onChange = { handleChange } className={`m-2 self-center shadow-md w-5/6 md:w-2/3 !text-[color:black]`} type='text' name='setup' id='setup' />
                    <button className={`p-2 rounded-lg border-0 shadow-md hover:bg-color5/10 md:m-2 md:text-lg md:border-2 md:border-color5/10`} type='submit'>send</button>
                </form>
            </div>
        )
    }

}

export default jokeInterface