import React from 'react'
import styles from '../Styles'
import {teamPic} from '../assets'
import Teamdetails from './Teamdetails'





const Works = () => {
  return (
    <section className={`bg-main pb-[50px] ${styles.flexCenter} w-[100vw]`}>
      <div className=' flex md:flex-row flex-col gap-[4rem] ml-20 mt-[70px] justify-center items-center '> 
        <img src={teamPic} className='w-[50%] h-[50%]'/>
        <div className='flex flex-col gap-4'>
        <h1 className='text-white md:text-[35px] text-[20px] md:w-[50%] w-full leading-[45px] font-bold font-raleway'>Stay productive, wherever you are</h1>
        <p className='text-nwhite text-[16px] w-[80%] '>Never let location be an issue when acceesing your files. Fylo has you
           covered for all of your file storage needs.
           
        </p>
        <p className='text-nwhite text-[16px] w-[90%] '>
           Securely share files and folders with friends, family and colleagues for live
           collaboration. No email attachements required.
        </p>
        <div>
           <Teamdetails/>
        </div> 
           
 
           
        </div>  
      </div>
    </section>
  )
}

export default Works