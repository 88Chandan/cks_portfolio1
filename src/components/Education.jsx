import React from 'react'
import edu from '../assets/doraread.png'

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: 'Diploma in CSE',
            institution: " Pabitra Mohan Institute of Technology",
            duration: "2024 - 2027",
            score: ''
        },
        {
            id: 1,
            degree: 'Secondary School',
            institution: " ",
            duration: "2023 - 2024 ",
            score: ''
        },

        
    ]
  return (
    <section className='text-white py-20 overflow-hidden' id='education'>
        <div className=' max-w-7xl mx-auto px-6 lg:px-16'>
            <div className='mb-16'>
                <p className='text-primary text-sm uppercase tracking-widest
                 mb-2 font-semibold'
                >Learning Path</p>

                <h2 className='text-4xl md:text-5xl font-extrabold
                 text-fuchsia-200'> Education.</h2>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-16'>
                <div className=' w-full lg:w-5/12 flex justify-center lg:justify-start' 
                data-aos='fade-right'>
                    <div className='relative'>
                        <div className='absolute h-full w-full z-0 p-2 translate-w-4
                         translate-y-4 rounded-2xl shadow-lg border border-b-fuchsia-200'></div>
                         <div className=' relative z-10 bg-blue-700
                          rounded-2xl overflow-hidden border border-b-blue-400'>
                            <img src={edu} alt="education"
                            className=' w-64 h-73 md:w-96 md:h-120 object-cover
                            transform transition-transform duration-500 hover:scale-110' />
                          </div>
                          <div className='absolute -top-4-led'>

                          </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
  )
}

export default Education
