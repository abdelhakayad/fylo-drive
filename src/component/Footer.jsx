import React from 'react'
import { logo, iconLocation, iconPhone, iconEmail,facebook,twitter,instagram } from '../assets'
import styles from '../Styles'
import { footerInfo, footerLinks, socialMedia } from '../constant'

const Footer = () => {
  return (
    <section className={` bg-footer w-full `}>
    <div className='md:pt-[9rem] pt-[14rem]'>
      
      <div className='p-7'>
        <img src={logo} alt="logo" className='w-[100px] h-[32px] object-contain' />
      </div>

      <div className='grid md:grid-flow-col grid-flow-row p-7 '>

        <div className='flex  items-start '>
          <img src={iconLocation} alt="" className=' w-[12px] object-contain' />
          <p className='px-7 text-white font-openSans font-normal w-[25rem]'>Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      <div className='flex md:pt-0 pt-5 flex-col'>

        {
          footerInfo.map((fi)=>(
            <div key={fi.id} className='flex gap-5 py-2 '>
              <img src={fi.icon} alt="" className='w-[17px] object-contain' />
              <h1 className=' text-white font-openSans font-normal'>{fi.info}</h1>
            </div>
          ))
        }
      </div>

      <div className='flex md:pl-7 md:pt-0 pt-[5rem] flex-col'>

        {
          footerLinks[0].links1.map((fl)=>(
            <div key={fl.id} className='flex gap-5 py-2 '>
              <a className=' text-white font-openSans font-normal' href={fl.link}>{fl.name}</a>
            </div>
          ))
        }
      </div>
      
      <div className='flex md:pl-7 md:pt-0 pt-[2rem] flex-col'>

        {
          footerLinks[1].links2.map((fl)=>(
            <div key={fl.id} className='flex gap-5 py-2 items-start '>
              <a className=' text-white font-openSans font-normal' href={fl.link}>{fl.name}</a>
            </div>
          ))
        }
      </div>
      
      <div className='flex md:pl-7 md:pt-0 pt-[4rem] items-center md:items-start justify-center md:justify-normal'>

        {
          socialMedia.map((sm)=>(
            <div key={sm.id} className='flex h-max'>
              <a className=' p-2 border rounded-full text-white font-openSans font-normal mx-1' 
              href={sm.link}><img src={sm.icon} alt="" className='w-[14px] 
              object-contain  ' /></a>
              
              
            </div>
          ))
        }
      </div>
      


        


      </div>
      </div> 
    </section>
  )
}

export default Footer