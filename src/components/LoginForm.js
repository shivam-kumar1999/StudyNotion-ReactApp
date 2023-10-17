import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedIn}) => {

    const [formData , setFormData]= useState({
        email:"" , password:""
    })

    function clickHandler(event){

        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]  : event.target.value
        }))
    }


    const navigate= useNavigate();

    function SubmitHandler(event){
         event.preventDefault();
         setIsLoggedIn(true);
         toast.success("Logged In");

         navigate("/dashboard");
    }


  return (

    <form onSubmit={SubmitHandler} 
         className="flex flex-col w-full  h-110vh  gap-y-4 mt-6"
    >

         <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> Email Address  <sup className='text-pink-200'>*</sup></p>
          
            <input type="email" name='email' required value={formData.email} onChange={clickHandler} placeholder='Enter your Email' 
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            />
         </label>


         <label className='w-full relative' >
            
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> Password <sup className='text-pink-200'>*</sup></p>
            
            
            <input type="Password" name='password' required value={formData.password} onChange={clickHandler} placeholder='Enter your Password' 
                                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            />
        
        
        
            <Link to="#" >
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
            </Link>

        
        
         </label>
   
       <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign in</button>

      
    </form> 
        
    
  
  )
}

export default LoginForm