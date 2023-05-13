import React from 'react'
import styles from '../Styles'
import { features } from '../constant'
import '../index.css'
const Features = () => {
  return (
    <section className={`bg-main  ${styles.flexCenter}  flex-col`}>
      
      <div className='grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-4 gap-4 '>
        

        {
          features.map((ft) => (
            <div key={ft.id} className=' flex flex-col items-center justify-center'>
              <img src={ft.icon} />
              <h1 className=' text-white text-[18px] font-raleway font-bold mt-7 mb-2'>{ft.title}</h1>
              <p className='text-nwhite font-openSans text-center max-w-[49%] mb-12'>{ft.content}</p>
            </div>
          )
          ) 
        }
       
      </div>
    </section>
  )
}

export default Features