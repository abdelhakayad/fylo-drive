import React from 'react'
import styles from '../Styles'
import {bgQuotes} from '../assets'
import { feedBack } from '../constant'

const Feedback = () => {
  return (
    <section className={`bg-main pt-[60px] ${styles.flexCenter} flex md:flex-row flex-col  relative md:ml-10 `}>
     <img src={bgQuotes} className="absolute md:top-11 top-11 md:left-[35px] xl:left-[15rem] left-[100px] w-[30px] h-[30px] z-0 " /> 
     
     {
        feedBack.map((fbk)=>(
          <div key={fbk.id} className='bg-intro relatvie pl-9 md:py-10 py-8 xl:w-[25%] w-[30%] rounded-[3px] md:mr-5 mb-6 z-30 '>
             <p className='text-nwhite font-openSans md:w-[88%]  w-[86%] md:text-[16px] text-[15px]  pb-3 '>{fbk.content}</p>
             <div className='flex gap-2 items-center'>
              <img src={fbk.icon} alt="" className='w-[30px] h-[30px] rounded-full'/>
             <div className='flex flex-col'>
              <h2 className='font-bold text-white'>{fbk.name}</h2>
              <h6 className='text-nwhite'>{fbk.title}</h6>
              </div>
             </div>
           </div>
        ))
     }
     
    </section>
  )
}

export default Feedback