import React from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Form } from 'react-bootstrap';

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/apidata');

 }
 const handleChange = () => {
  navigate('/cards');
 }  
 const practice = () => {
  navigate('/practice');
 }  
 const register = () => {
  navigate('/register');
 }  
 const weather = () => {
  navigate('/weather');
 }  
 const userdata = () => {
  navigate('/userdata');
 } 
 const formfocus = () => {
  navigate('/formfocus');
 }   
 const focus = () => {
  navigate('/focus');
 }    
     
    

  return (
    <div>
        <h1> Assesment 1 </h1>
        <br/>
        <br/>
        <Form.Group className="mb-3">
        <Form.Label> Name</Form.Label>
        <Form.Control placeholder="Sakib Kamal" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ID </Form.Label>
        <Form.Control placeholder="KTI1781" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Company</Form.Label>
        <Form.Control placeholder="KIWI TECH" disabled />
      </Form.Group>
<br/>
<div className='button-style'>
      <button onClick={handleClick} > View Assignment </button>
<br/> 

<button onClick={handleChange} > View Cards </button>
<br/>
<button onClick={register} > Register </button>
<br/>
<button onClick={weather} > Go to weather </button>
<br/>
<button onClick={practice} > practice page </button>
<br/>
<button onClick={userdata} > Registered User </button>
<br/>
<button onClick={formfocus} > New Form </button>
<br/>
<button onClick={focus} > useing useRef Form </button>
<br/>


</div>
    </div>

  )
  }


export default Home