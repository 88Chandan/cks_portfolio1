import React from 'react'

const Footer = () => {
  return (
    <footer className=' mt-8 border z-10 border-t-[#d7c7d6] bg-pink-400
     border-l-transparent border-r-transparent text-white'>
        <div className=' container p-12  justify-between
         flex flex-col items-center gap-4 md:gap-0 md:flex-row'>
            <div className=' text-white text-2xl md:text-3xl font-black cursor-pointer'>
                PORTFOLIO <span className='text-primary'>.</span>
            </div>
            <p className='text-indigo-950 text-sm md:text-base'>All rights reserved.</p>
        </div>

    </footer>
  )
}

export default Footer
