import React,{useRef, useState} from 'react';
import { Table } from 'react-bootstrap';

function Form() {
const [record , setRecord] = useState([]);
    const [user , setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        userId: "",
        stack : "",
        password : "",
        reEnterPassword : "",
        say : ""



})
   
    const lName = useRef(null);
    const email = useRef(null);
    const userId = useRef(null);
    const stack = useRef(null);
    const reEnterPassword = useRef(null);
    const password = useRef(null);
    const gotonext = useRef(null);
    const gotosubmit = useRef(null);
   // const {lName , email, userId, stack, reEnterPassword, password, gotonext, gotosubmit}= useRef(null);
    
 const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name , value);

    setUser({
        ...user ,
        [name] : value

    })

    console.log(user);

 }
 const  handleSubmit = (e)=>{
    e.preventDefault();
    const newRecord = { ...user,  id : new Date().getTime().toString() };
    setRecord([ ...record , newRecord]);
    console.log(record);
    // alert("hi")

    setUser({fname: "", lname: "", email: "", userId: "", stack : "", password : "", reEnterPassword : "", say : ""});


       }
    


    const GoTolastname =(event)=>{
        if( event.key === "Enter" || event.key === "ArrowDown"){
            lName.current.focus();
            event.preventDefault();
        }
    } 
    const GoToemail =(event)=>{
        if( event.key === "Enter" || event.key === 'ArrowDown'){
            email.current.focus();
            event.preventDefault();

        }
    } 
    const GoToUserId =(event)=>{
        if( event.key === "Enter" || event.key === 'ArrowDown'){
            userId.current.focus();
            event.preventDefault();
        }
    } 
    const GoTostack =(event)=>{
        if( event.key === "Enter" || event.key === 'ArrowDown'){
            stack.current.focus();
            event.preventDefault();
        }
    }
    const GoTopassword =(event)=>{
        if( event.key === "Enter" || event.key === 'ArrowDown' ){
            password.current.focus();
            event.preventDefault();
        }
    }
    const GoToreEnterpassword =(event)=>{
        if( event.key === "Enter" || event.key === 'ArrowDown'){
            reEnterPassword.current.focus();
            event.preventDefault();
        }
    }
    const GoToNext =(event)=>{
        if( event.key === "Enter" || event.key === 'ArrowDown'){
            gotonext.current.focus();
            event.preventDefault();
        }
    }
    const GoToSubmit =(event)=>{
        if( event.key === "Enter" || event.key === 'ArrowDown'){
            gotosubmit.current.focus();
            //event.preventDefault();
        }
    }
  

  return (
    <div>
        <h2> Please provide correct information </h2>
        <br/>
    <div>
<form onSubmit={handleSubmit}>
<input type="text" name = 'fname' value = {user.fname} placeholder='first name'  onKeyPress={GoTolastname} onChange={handleChange} />
<br/><br/><br/><br/>
<input ref={lName} type="text" name = 'lname' value = {user.lname} placeholder=' last name' onKeyPress={GoToemail} onChange={handleChange}/>
<br/><br/><br/><br/>
<input ref={email} type="text" name = 'email' value = {user.email} placeholder=' email ' onKeyPress={GoToUserId} onChange={handleChange}/>
<br/><br/><br/><br/>
<input  ref={userId} type="text" name = 'userId' value = {user.userId} placeholder='userId' onKeyPress={GoTostack} onChange={handleChange}/>
<br/><br/><br/><br/>
<input  ref={stack}  type="text"  name = 'stack' value = {user.stack} placeholder=' stack ' onKeyPress={GoTopassword} onChange={handleChange}/>
<br/><br/><br/><br/>
<input ref={password} type="password" name = 'password'  value = {user.password} placeholder=' password ' onKeyPress={GoToreEnterpassword} onChange={handleChange}/>
<br/><br/><br/><br/>
<input ref={reEnterPassword} type="password" value = {user.reEnterPassword} name = 'reEnterPassword' placeholder=' reEnterPassword' onKeyPress={GoToNext} onChange={handleChange}/>
<br/><br/><br/><br/>
<input ref={gotonext} type="text" value = {user.say} name = 'say' placeholder=' Say some thing' onKeyPress={GoToSubmit} onChange={handleChange}/>
<br/><br/>
<button ref={gotosubmit}  > Submit </button>

</form>
    </div>
<div className='userdata-style'>
<Table striped bordered hover>
                <tbody>
                    <tr>
                    <th> FULL NAME </th>
                    <th> USER ID </th>
                    <th>EMAIL</th>
                    <th>STACK</th>
                    <th>PASSWORD</th>
                    <th>ABOUT</th>
                    </tr>
{record.map((value) =>{
  return(
    <tr>
      <th>{value.fname + " " + value.lname}</th>
    <th>{value.userId}</th>
    <th>{value.email}</th>
    <th>{value.stack}</th>
    <th>{value.password}</th>
    <th>{value.say}</th>
    </tr>
   
  )

})}
 </tbody>
 </Table>

</div>



    </div>
  )
}

export default Form