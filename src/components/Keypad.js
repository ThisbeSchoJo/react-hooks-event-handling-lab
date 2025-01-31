// Code Keypad Component Here
import React from 'react'

function Keypad(){
    function handleChange() {
        console.log('Entering password...')
    }
    return <input onChange={handleChange} type="password" />

}

//render an input with the right type
//on that input, add an event handler that listens for the change event
//when that event fires, console.log('Entering password...')


export default Keypad;