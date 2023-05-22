import React from 'react'
import { useState } from 'react';

function Practice() {
  const[mouse, setMouse] = useState('');
  const[ name, setName] = useState('');
 
  
 const getName = () =>{
  console.log('printed')
 } 

const getname = () =>{
setName("sakib Kamal")

}
const enter = ()=>{
  setMouse("you enterd");
 
}
const changebackground = (e) =>{
e.target.style.background = 'red';
}

  return (
    <div onClick={getName}>
<h1> more Practice more Confidence </h1>

<button onClick={getname} > click to find name </button>
<br/>

<br/>
<button onMouseEnter={enter}> Entering</button>
<br/>
<br/>
<button onMouseOver={changebackground}> hovering</button>
{mouse && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}
      <p> {mouse}</p>
      <p> {name}</p>

    
    </div>
  )
}

export default Practice
