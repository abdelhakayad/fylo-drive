import React from 'react'
import {bgDesk, heroPic} from '../assets'
import styles from '../Styles'
const Hero = () => {
  return (
    <header className={`${styles.flexCenter} w-full flex-col`}>
      <img src={heroPic} alt="hero" className='w-[50%] h-[50%] object-contain' />
      <div className=" w-[100vw] h-[80vh] bg-[url('./assets/bg-desk.svg')]  bg-no-repeat bg-bottom bg-contain  ">
      <div className={` ${styles.paddingY} ${styles.flexCenter}  flex-col text-center `}>   
        <h1 className=' font-raleway  text-white font-bold md:text-[35px] text-[22px] md:w-[50%] w-[58%]'>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className='font-openSans  mt-5 text-nwhite md:text-[17px] md:w-[38%] w-[55%]'>
          Fylo stores all your most important files in one secure location.
          Access then wherever you need, share and collaborate with 
          friends family,and co-workers.
        </p>
        <button className='md:mt-5 mt-8 bg-icyan px-16 py-3 rounded-[25px] text-white font-bold' >
          Get Started
        </button>
      
      </div>
        </div>  
    </header>
  )
}

export default Hero