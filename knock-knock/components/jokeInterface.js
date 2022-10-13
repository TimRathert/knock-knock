import React, { useState, useRef } from 'react'

function jokeInterface(props) {
    const setup = props.setup
    const [ punchline, setPunchline ] = useState('')
    const setSetup = props.setSetup
    const jokeState = props.jokeState
    const setJokeState = props.setJokeState

    const userText = (text) => {
        const newDialog = document.createElement('div')
        newDialog.className = 'self-end m-1 w-fit p-2 shadow-md rounded-lg text-white bg-color2/80'
        const newDialogContent = document.createTextNode(text)
        newDialog.appendChild(newDialogContent)
        props.chatWindow.current.appendChild(newDialog)
    }
    const responseText = async (text, time = 0) => {
        const response = setTimeout(()=>{
            const newDialog = document.createElement('div')
            newDialog.className = 'shadow-md self-start m-1 w-fit p-2 rounded-lg text-white bg-color5/60'
            const newDialogContent = document.createTextNode(text)
            newDialog.appendChild(newDialogContent)
            props.chatWindow.current.appendChild(newDialog)
        }, time)
    }
    const knockknock = async (e) => {
        setJokeState('loading')
        userText('Knock knock')
        responseText('Who\'s there?', 1000)
        setTimeout(() => {setJokeState('setup')}, 1000)
    }
    const jokeCorrect = () => {
        userText('Yes')
        setJokeState('loading')
        setTimeout(()=>{responseText('Of course it is!')},500)
        setTimeout(() => {responseText('Got another one?')}, 1000)
        setJokeState('end')
    }
    const jokeIncorrect = () => {
        userText('No')
        setJokeState('loading')
        setTimeout(()=>{responseText('Oh, whoops...')},500)
        setTimeout(() => {responseText('What is the punchline?')}, 1000)
        setJokeState('newJoke') //
    }
    const newJoke =() => {
       setJokeState('init') 
    }
    const noNewJoke = () => {
        responseText('Well... ok.')
        setJokeState('')
        setTimeout(() => {
            setJokeState('init')
        }, 5000);
    }

    const setupSubmit = async (e) => {
        e.preventDefault();
        setJokeState('loading')
        const data = {setup: setup}
        userText(setup)
        try {
            const response = await fetch(process.env.SETUP_URL, {
                method: 'POST',
                headers:{"Content-Type": 'application/json'},
                body: JSON.stringify(data)
            })
            const newText = await (response.json())
            //console.log(await newText)
            responseText(newText.message)
            setTimeout(() => {responseText('Is this correct?')}, 500)
            setJokeState('punchline')
        }
        catch(e){
            console.log(e)
        }
    }
    const newJokeSubmit = async (e) => {
        e.preventDefault();
        setJokeState('loading')
        const data = {setup: setup, punchline: punchline}
        userText(setup)
        try {
            const response = await fetch(process.env.NEWJOKE_URL, {
                method: 'POST',
                headers:{"Content-Type": 'application/json'},
                body: JSON.stringify(data)
            })
            const newText = await (response.json())
            //console.log(await newText)
            responseText(newText.message)
            setTimeout(() => {responseText('Want to try it out?')}, 500)
            setJokeState('end')
        }
        catch(e){
            console.log(e)
        }
    }

    const handleChange = (e) => {
        setSetup(e.target.value)
    }
    const handlePLChange = (e) => {
        setPunchline(e.target.value)
    }

    if (jokeState == 'init'){ 
        return (
            <div className={`transition-all shadow-lg bg-color2 rounded-lg p-4 w-5/6 md:w-1/2 p-2 md:m-8 text-black flex justify-center `}>
                    <button className={`shadow-md p-2 bg-color4/60 rounded-lg border-0 hover:bg-color5/10 md:m-2 md:text-lg md:border-2 md:border-color5/10`} onClick={ knockknock }>knock knock</button>
            </div>
        )
    }
    if (jokeState == ''){ 
        return (
            <div className={`transition-all shadow-lg bg-color2 rounded-lg p-4 w-5/6 md:w-1/2 p-2 md:m-8 text-black`}>
            </div>
        )
    }
    if (jokeState == 'loading'){ 
        return (
            <div className={`transition-all shadow-lg bg-color2 rounded-lg p-4 w-5/6 md:w-1/2 p-2 md:m-8 text-black`}>
                <i className="fa fa-spinner" aria-hidden="true"></i>
            </div>
        )
    }
    if (jokeState == 'setup'){ 
        return (
            <div className={`transition-all shadow-lg bg-color2 rounded-lg p-4 w-5/6 md:w-1/2 p-2 md:m-8 text-black`}>
                <form onSubmit={ setupSubmit } className={`select-none h-fit items-center flex flex-col justify-around md:flex-row`}>
                    <label className={`md: self-center`} htmlFor='setup'></label>
                    <input onChange = { handleChange } className={`m-2 self-center shadow-md w-5/6 md:w-2/3 !text-[color:black]`} type='text' name='setup' id='setup' placeholder="Who's there?" />
                    <button className={`p-2 bg-color4/60 rounded-lg border-0 shadow-md hover:bg-color5/10 md:m-2 md:text-lg md:border-2 md:border-color5/10`} type='submit'>send</button>
                </form>
            </div>
        )
    }
    if (jokeState == 'punchline'){ 
        return (
            <div className={`flex justify-around transition-all shadow-lg bg-color2 rounded-lg p-4 w-5/6 md:w-1/2 p-2 md:m-8 text-black`}>
                <button className={`p-2 bg-color4/60 rounded-lg border-0 shadow-md hover:bg-color5/10 md:m-2 md:text-lg md:border-2 md:border-color5/10`} onClick={ jokeCorrect }>Yes!</button>
                <button className={`p-2 bg-color4/60 rounded-lg border-0 shadow-md hover:bg-color5/10 md:m-2 md:text-lg md:border-2 md:border-color5/10`} onClick={ jokeIncorrect }>No...</button>

            </div>
        )
    }
    if (jokeState == 'newJoke'){ 
        return (
            <div className={`transition-all shadow-lg bg-color2 rounded-lg p-4 w-5/6 md:w-1/2 p-2 md:m-8 text-black`}>
                <form onSubmit={ newJokeSubmit } className={`select-none h-fit items-center flex flex-col justify-around md:flex-row`}>
                    <label className={`md: self-center`} htmlFor='setup'></label>
                    <input onChange = { handlePLChange } className={`m-2 self-center shadow-md w-5/6 md:w-2/3 !text-[color:black]`} type='text' name='punchline' id='punchline' placeholder='Punchline' />
                    <button className={`p-2 bg-color4/60 rounded-lg border-0 shadow-md hover:bg-color5/10 md:m-2 md:text-lg md:border-2 md:border-color5/10`} type='submit'>send</button>
                </form>
            </div>
        )
    }
    if (jokeState == 'end'){ 
        return (
            <div className={`flex justify-around transition-all shadow-lg bg-color2 rounded-lg p-4 w-5/6 md:w-1/2 p-2 md:m-8 text-black`}>
                <button className={`p-2 bg-color4/60 rounded-lg border-0 shadow-md hover:bg-color5/10 md:m-2 md:text-lg md:border-2 md:border-color5/10`} onClick={ newJoke }>Yes!</button>
                <button className={`p-2 bg-color4/60 rounded-lg border-0 shadow-md hover:bg-color5/10 md:m-2 md:text-lg md:border-2 md:border-color5/10`} onClick={ noNewJoke }>No...</button>

            </div>
        )
    }

}

export default jokeInterface