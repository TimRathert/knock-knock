import React from 'react'
import Nav from '../../components/Nav'

function index() {
    localStorage.removeItem('user')
    return (
        <>
        <Nav />
        <div className='flex justify-center'>
            <div className={`flex transition-all justify-center shadow-lg bg-color2 rounded-lg p-4 w-5/6 md:w-1/2 p-2 md:m-8 text-black`}>
                <div classname="">Thinking...</div>
            </div>
        </div>
        </>
    )

}

export default index