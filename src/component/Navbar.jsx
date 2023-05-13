import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constant'

const Navbar = () => {
  const [toggle , setToggle] = useState(false);
  return (
    <nav className=' w-full flex py-6 justify-between items-center navbar '>
       <img src={logo} alt='Fylo' className='w-[100px] h-[32px] object-contain' />
       <ul className='list-none sm:flex hidden flex-1 justify-end items-center '>
            {navLinks.map((nav,index) => (
                        <li key={nav.id} className={`font-intro font-normal cursor-pointer text-nwhite ${index === navLinks.length-1 ? 'mr-0' :'mr-10'} `} >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    )
                )
            }
       
       </ul> 

       <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer  '>
          <img src={toggle ? close : menu} alt="menu" className='w-[25px] h-[25px]  object-contain' 
          onClick={()=>setToggle((prev)=>!prev)} />
          <div className={`${toggle? 'flex' : 'hidden'}  p-6 bg-footer leading-[50px]  absolute top-20 right-0 mx-4 my-2 rounded-xl min-w-[140px]`}>
          <ul className='flex flex-col  justify-end items-center flex-1 '>
            {navLinks.map((nav,index) => (
                        <li key={nav.id} className={`font-intro font-normal cursor-pointer text-nwhite  `} >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    )
                )
            }
       
       </ul> 
          </div>
       </div>
    </nav>
  )
}

export default Navbar