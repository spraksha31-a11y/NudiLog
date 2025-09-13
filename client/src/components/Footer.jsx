import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
        <div>
           <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
           <p className='max-w-[410px] mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sed, est perferendis quis at dignissimos perspiciatis blanditiis, praesentium quod iusto, quia ut beatae repellendus. Placeat dignissimos id similique ullam magnam, assumenda ipsum alias voluptates, quod odio aut sed culpa doloremque consectetur nam, eius deleniti quasi laudantium? Eaque quae voluptatem esse.</p>
        </div>
        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
            {footer_data.map((section,index) => (
                <div key={index}>
                    <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                    <ul>{section.links.map((link,i)=>(
                        <li key={i}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                    </ul>

                </div>


            ))}
            
        </div>

        </div>
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>copyright 2025 © ನುಡಿLog All Rights Reserved</p>
    </div>
  )
}

export default Footer
