import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'

const SignUpForm = ({setIsLoggedIn}) => {

const [formData, setFormData]=useState({firstname:"" , lastname:"" , email:"", password:"", confirmPassword:""})

function changeHandler(event){
  setFormData((prev)=>({
       ...prev,
       [event.target.name] : event.target.value
  }))
}

let navigate=useNavigate()

   function submitHandler(event){
     event.preventDefault();

     if(formData.password != formData.confirmPassword){
        toast.error("password do not match")
        return
     }

     setIsLoggedIn(true);
     toast.success("Account Created")

     navigate("/dashboard")
   }


  return (

    <div>

      <div>

        <button>Student</button>
        <button>Instructor</button>

      </div>


      <form  onSubmit={submitHandler}>

        <label >
           <p>First Name <sup>*</sup></p>

           <input type="text" 
                  required 
                  name='firstname' 
                  onChange={changeHandler} 
                  placeholder='Enter First Name' 
                  value={formData.firstname} />

        </label>


         <label >
           <p>Last Name <sup>*</sup></p>

           <input type="text" 
                  required 
                  name='lastname' 
                  onChange={changeHandler} 
                  placeholder='Enter Last Name' 
                  value={formData.lastname} />

        </label>


        <label >
           <p>Email <sup>*</sup></p>

           <input type="email" 
                  required 
                  name='email' 
                  onChange={changeHandler} 
                  placeholder='Enter Your Email' 
                  value={formData.email} />

        </label>


        <label >
           <p>Password <sup>*</sup></p>

           <input type="password" 
                  required 
                  name='password' 
                  onChange={changeHandler} 
                  placeholder='Enter your Password' 
                  value={formData.password} />

        </label>


        <label >
           <p>Confirm Password<sup>*</sup></p>

           <input type="password" 
                  required 
                  name='confirmPassword' 
                  onChange={changeHandler} 
                  placeholder='Confirm Password' 
                  value={formData.confirmPassword} />

        </label>


        <button>Create Account</button>


      </form>




    </div>

  )
}
export default SignUpForm