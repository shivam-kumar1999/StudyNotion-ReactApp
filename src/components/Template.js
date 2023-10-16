import React from 'react'
import frame from '../assets/frame.png'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (

    <div>
          

    <div>

        <h1>{title}</h1>
         <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
         </p>


        {
            formtype ==="signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) :( <LoginForm setIsLoggedIn={setIsLoggedIn}/>)
        };


          
          <div>
              <div></div>
              <p>OR</p>
              <div></div>
          </div>

          <button>
            <p>Sign up with Google</p>
          </button>

 

        
    </div>



     <div>
        <img src={frame} alt="frame" height={504} width={558} loading='lazy' />
        <img src={image} alt="frame" height={500} width={558} loading='lazy' />
     </div>


    </div>

  )
}

export default Template;