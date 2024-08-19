import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png";

export default function Login(setIsLoggedIn) {

  return (
    
    <Template
    title="Welcome Back"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    formType="login"
    image={loginImg}
    setIsLoggedIn={setIsLoggedIn}
  />
  )
}
