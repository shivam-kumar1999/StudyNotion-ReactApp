import React from 'react'

const Contact = () => {
  return (
    

      <div name='contact' className=' bg-[#000814] w-full h-110vh flex justify-center items-center p-4'>

        <form met className="richblack-100 flex flex-col max-w-[700px] w-full">

             <div className='pb-8 mt-40'>

                <p className='text-5xl font-bold inline border-b-4   mt-10 text-gray-500'>Contact</p>
                <p className='text-gray-500 py-4 text-xl'>Submit the form below or send me an email - shivamkumarhost@gmail.com</p>
             </div>

             <input type="text" placeholder='Name' name="name" className=' rounded-sm text-black-500 my-2 p-2 ' />
             <input type="email" placeholder='Email' name="email"  className='rounded-sm my-2 p-2 bg-[#fafafa] border border-gray-500 '/>
              <textarea placeholder='Message' name="message" id="" cols="30" rows="10" className=' rounded-sm my-2 p-2 bg-[#fafafa] border border-gray-500'></textarea>
                 
                 <button className='text-white font-semibold text-lg  border border-gray-500   px-4 py-2 my-8 mx-auto flex  '>Let's Collaborate</button>


        </form>






    </div>


  )
}

export default Contact