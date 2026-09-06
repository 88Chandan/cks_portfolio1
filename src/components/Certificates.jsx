import React from 'react'

const Certificates = () => {
    const certifications =[
        {
            id: 1,
            title: 'Frontend Development',
            issuer: 'Udemy',
            date:'dec 2025',
            link:'#'
        },
         {
            id: 2,
            title: 'c-programming',
            issuer: 'Coursera / Meta',
            date:'feb 2026',
            link:'#'
        },
         {
            id: 3,
            title: 'Cloud Computing',
            issuer: 'Coursera / Meta',
            date:'june 2026',
            link:'#'
        }
    ]


  return (
    <section id='certificates'
        className='text-white py-20'>
        <div className=' max-w-7xl mx-auto lg:px-16'>
            <div className=' mb-16'>
                <p className='text-fuchsia-300 text-sm uppercase
                 tracking-widest mb-2 font-semibold'>Achivements</p>
                 <h2 className=' text-4xl md:text-5xl font-extrabold
                  text-fuchsia-200'> Certifications.</h2>
            </div>            
        </div>
    </section>
    
  )
}

export default Certificates
