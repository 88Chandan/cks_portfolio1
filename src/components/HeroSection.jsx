import React from 'react'

const HeroSection = () => {
  return (
    <section className='relative w-full' data-aos='zoom-in-up'>
        <div className='absolute top-0 inset-x-0 h-64 flex items-start'>
            <div className='h-24 w-2/3 bg-linear-to-br from-[#b673e9] 
            blur-2xl invisible opacity-40'></div>
            <div className='h-20 w-3/4 bg-linear-to-r from-[#d7aed0] 
            opacity-40 blur-2xl'></div>
        </div>

        <div className='w-full px-5 sm:px-8 md:px-12 lg:px-8
        max-w-5xl lg:max-w-7xl mx-auto relative'>
            <div className='grid lg:grid-cols-2 gap-10 xl:gap-14
            relative pt-24 lg:max-w-none max-w-2xl
            md:max-w-3xl mx-auto'>
                <div className='lg:py-6'>
                    <div className='text-center lg:text-left'>
                        <h1 className='pt-4 text-white font-bold 
                        text-4xl md:text-5xl lg:text-6xl'>
                            Hi, I'm {' '} 
                            <span className='text-transparent 
                            bg-clip-text bg-linear-to-r from-primary to-cyan-200'>
                                Sai Shreeya
                            </span>
                        </h1>
                    </div>
                    <p className='text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl'>
                        student of PMIT persuing Diploma in CSE branch. Iam in 3rd year.
                    </p>
                    <div className='flex items-center gap-3 pt-9
                    flex-col sm:flex-row sm:w-max lg:max-0'>
                        <button className='px-6 md:px-7 py-3
                        rounded-full relative group w-full sm:w-max
                        flex justify-center'>
                            <span className='absolute inset-0
                            rounded-3xl group-hover:scale-105
                            origin-center transition-all ease-in-out 
                            bg-primary border-2 border-transparent'>
                            </span>
                            <span className='relative flex items-center
                            justify-center text-white'>
                                Hire Me
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
