import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import Template from '../components/Template';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export default function SignUpForm(setIsLoggedIn) {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
})

const [showPassword,setShowPassword]=useState(false);
function changeHandler(event){
    setFormData((prevData)=>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ))
}

function submitHandler(event){
    event.preventDefault();
    if(formData.password!=formData.confirmPassword){
        toast.error('Password do not match');
        return;
    }
    // setIsLoggedIn(true);
    toast.success("Account created");
    const accountData={
        ...formData
    };
    console.log('printing account data');
    console.log(accountData);
    navigate("/dashboard");
}

  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            <div>
            <label>
                <p>First Name<sup>*</sup></p>
                <input
                required
                type='text'
                name='firstName'
                onChange={changeHandler}
                placeholder='Enter first name:'
                value={formData.firstName}
                ></input>
            </label>

            <label>
                <p>Last Name<sup>*</sup></p>
                <input
                required
                type='text'
                name='lastName'
                onChange={changeHandler}
                placeholder='Enter last name:'
                value={formData.lastName}
                ></input>
            </label>
            </div>

            <label>
                <p>Email Address<sup>*</sup></p>
                <input
                required
                type='email'
                name='email'
                onChange={changeHandler}
                placeholder='Enter email Address:'
                value={formData.email}
                ></input>
            </label>

           <div>
           <label>
                <p>Create Password<sup>*</sup></p>
                <input
                required
                type={showPassword?("text"):("password")}
                name='password'
                onChange={changeHandler}
                placeholder='Enter Password:'
                value={formData.password}
                ></input>
                 <span onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword?(<AiOutlineEyeInvisible></AiOutlineEyeInvisible>):(<AiOutlineEye></AiOutlineEye>)};
            </span>
            </label>

            <label>
                <p>Create Password<sup>*</sup></p>
                <input
                required
                type={showPassword?("text"):("password")}
                name='confirmPassword'
                onChange={changeHandler}
                placeholder='COnfirm Password:'
                value={formData.confirmPassword}
                ></input>
                 <span onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword?(<AiOutlineEyeInvisible></AiOutlineEyeInvisible>):(<AiOutlineEye></AiOutlineEye>)};
            </span>
            </label>
           </div>
            <button>Create Account</button>
        </form>
    </div>
  )
}
