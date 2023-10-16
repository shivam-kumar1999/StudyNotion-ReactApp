import React from 'react'
import Template from '../components/Template';
import signupImg from "../assets/signup.png"

const Signup = ({setIsLoggedIn}) => {
  return (


     <Template 
        title="Welcom BAck"
        desc1="Build skills for today, tommorow and beyond"
        desc2="Education to future proof your career"
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
    
    
    ></Template>


  )
}

export default Signup;