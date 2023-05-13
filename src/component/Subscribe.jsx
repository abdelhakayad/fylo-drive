import React, { isValidElement, useState } from 'react'
import styles from '../Styles'
const Subscribe = () => {
  

    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const Char= /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    
    const handleSubmit = () => {
        if (!email.match(Char)) {
        setErrorMessage('Please enter a valid email address')
        } else {
          setErrorMessage(null)
        }
    }
  
  return (
    <section className={`${styles.flexCenter} w-full md:mt-[18%] mt-[40%] relative `}>
      <div className='flex flex-col items-center w-[58%] py-5 rounded-[5px] bg-intro absolute  '>
        <h1 className='font-raleway font-bold text-white md:text-[25px] text-[19px] pb-3'>Get early acces today</h1>
        <p className='  text-nwhite text-center w-[70%] md:w-[66%] pb-8'>it only takes a minute to sign up and our free starter tier is externely generous. if you have any 
          questions, our support team would be happy to help you.</p>
        
        <div className='flex w-full  flex-col'>
        <div  className='pb-4 flex w-full justify-center flex-col md:flex-row  items-center gap-8'>

          <input value={email} onChange={handleEmailChange} className='py-3 px-8 rounded-[23px] text-black md:w-[50%] w-[80%] focus: outline-none ' type="text" placeholder='email@example.com'  />
          <button  onClick={handleSubmit} type="submit"  className=' bg-iblue px-7 py-3 md:w-[30%] w-[80%] rounded-[25px] text-white font-bold'>Get Started For Free</button>
        </div> 
        <h1 className='text-ered font-bold md:pl-[100px] pl-[75px] '>{errorMessage}</h1>
         
      </div>
        </div> 
    </section>
  )
}

export default Subscribe