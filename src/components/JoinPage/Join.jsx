import React from 'react'
import { useState } from 'react'

const Join = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const nameChange = (event)=>{
    setName(event.target.value);
  }

  const passwordChange = (event)=>{
    setPassword(event.target.value);
  }

  const onSubmit = ()=>{
    fetch("http://localhost:4000/join",{
      method : "POST",
      headers : { 'Content-Type' : 'application/json'},
      body : JSON.stringify({
        name : name,
        password : password
      })
    }).then(response=>{
      alert("Success")
    })
  }

  return (
    <>
    <form>
      <label>name:</label>
      <input type="text" onChange={nameChange}/>
      <label>password:</label>
      <input type="password" onChange={passwordChange}/>
      <input type="button" value="submit" onClick={onSubmit}/>
    </form>
    </>
  )
}

export default Join