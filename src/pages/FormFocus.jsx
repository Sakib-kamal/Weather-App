import React, { useState } from 'react'

function FormFocus() {
  const [user, setUser] = useState({
    fname: '',
    email: '',
    userId: '',
    password: '',
    reEnterPassword: '',

  });

  function handleEnter(event) {
    console.log(event.key)
    if (event.key === 'ArrowDown' || event.key === 'Enter') {
      const form = event.target.form;

      console.log(form);
      const index = [...form].indexOf(event.target);
      console.log(index)
      form[index + 1].focus();
      event.preventDefault();
    }
     
      const name = event.target.name;
      const value = event.target.value;
      //console.log(name, value);
      setUser({
        ...user, 
        [name]: value
      })
      console.log(user);
      event.preventDefault();
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);

  }

  return (


    <div className='form-style'>
      <form onSubmit={handleSubmit}>
        <label htmlFor=" Enter first name"></label>
        <input type="text" name='fname'  placeholder=' first name' onChange={(e) => handleEnter(e)} />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <input type="text" name='email' value={user.email}  placeholder=' email ' onKeyDown={(e) => handleEnter(e)} />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <input type="text" name='userId' value={user.userId}  placeholder='userId' onKeyDown={(e) => handleEnter(e)} />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <input type="text" name='password' value={user.password}  placeholder=' password ' onKeyDown={(e) => handleEnter(e)} />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <input type="text" name='reEnterPassword' value={user.reEnterPassword}  placeholder=' reEnterPassword' onKeyDown={(e) => handleEnter(e)} />
        <br /><br /><br /><br />

        <button > Submit </button>



      </form>

    </div>
  )
}

export default FormFocus