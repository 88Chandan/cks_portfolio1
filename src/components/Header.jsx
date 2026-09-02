import React,{ useState } from 'react'

const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const menuItems = [
        {name:'Education',href:'#education'},
        {name:'Certificates',href:'#Certificates'},
        {name:'About Me',href:'#About'},
        {name:'Skills',href:'#Skills'},
        {name:'Projects',href:'#Projects'}

    ]

    const scrollToSection = (href) => {
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
        })
    }

  return (
    <header className='relative z-50 px-6 py-7'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
            {/*Logo*/}
            <div className='text-white text-3xl font-black cursor-pointer'>
                Portfolio <span className='text-primary'>.</span>
            </div>
            
            {/* Navigation */}
            <nav className='hidden md:flex items-center gap-10'>
                <ul className='flex gap-8'>
                    {menuItems.map((item) => {
                        <li key={item.name}>
                            <button 
                            onClick={() => scrollToSection(item.href)}
                            className='text-gray-300 hover:text-#b9c206 
                            text-base font-medium transition-colors'
                            >{item.name}</button>
                        </li>
                    })}
                </ul>
                <button 
                onClick={()=> scrollToSection('#contact')}
                className='bg-primary hover:bg-primary/90
                text-white px-6 py-2.5 rounded-lg text-base
                font-semibold transition-all'>
                    Contact Me
                </button>
            </nav>
           

       </div>
    </header>
  )
}

export default Header