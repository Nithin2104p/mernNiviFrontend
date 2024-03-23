import React, { useState } from 'react'
import './css/login.css'
const LoginSignup = () => {


  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    email: "",
    phone: "",
    password: ""

  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const login = async () => {
    console.log("login function executed", formData)
    let responseData;
    await fetch('https://canteen-evz0.onrender.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors)
    }
  }
  const signup = async () => {
    console.log("signup function executed", formData)

    let responseData;
    await fetch('https://canteen-evz0.onrender.com/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors)
    }
  }


  return (
    <div className='loginsignup'>
      <div className="loginsignupcontainer">
        <h1 className='signup'>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='name' value={formData.name} onChange={changeHandler} type="text" placeholder='Enter your name' /> : <></>}
          {state === "Sign Up" ? <input type="text" value={formData.rollno} onChange={changeHandler} name='rollno' placeholder='Enter your roll number' /> : <></>}
          {state === "Sign Up" ? <input type="text" value={formData.phone} onChange={changeHandler} name='phone' placeholder='Enter your Mobile Number' /> : <></>}
          <input type="email" value={formData.email} onChange={changeHandler} name="email" id="" placeholder='Enter your mail id' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Enter your password' />
        </div>
        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up" ?
          <p className='login'>Already have an account <span onClick={() => { setState("Login") }}>Login</span></p> :
          <p className='login'>No account ? Create an account<span onClick={() => { setState("Sign Up") }}> Click here</span></p>}
      </div>
    </div>
  )
}

export default LoginSignup
