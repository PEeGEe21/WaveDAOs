import Link from 'next/link'
import React from 'react'
import AboutIcon from '../Icons/AboutIcon'
import ExploreIcon from '../Icons/ExploreIcon'
import SpacesIcon from '../Icons/SpacesIcon'

const Sidebar = () => {
  return (
    <div>
        <div className='h-full sidebar flex justify-between shadow-sm scrollbar-change flex-col overflow-y-auto w-60 border-r border-r-[#545252]'>
            <div className='h-full flex flex-col justify-between'>
                <div>

                
                    <div className='logo flex items-center justify-center py-4 mb-3'>
                        <img src='/Logo.svg'/>
                    </div>

                    <div className='flex items-center justify-center mx-auto py-4'>
                        <Link href="/" className='flex items-center justify-between px-6 py-3 gap-5 bg-[#3F3F3F] rounded-full text-sm text-white'>
                            <img src='/Vector.svg'/>
                            Create Space
                        </Link>

                    </div>

                    <div className='nav__inner mt-5'>
                        <div className="flex flex-col justify-between " >

                            <Link href="/" className='hover:bg-[#3F3F3F] transition-all ease-in duration-200 '>
                                <div className='flex items-center gap-3 py-4 px-6 mx-auto border-b border-[#545252] text-sm'>
                                   <span>
                                        <ExploreIcon/>
                                    </span>
                                    
                                    <span className="nav_item">Explore</span> 
                                </div>
                            </Link>
                            <Link href="/spaces" className='hover:bg-[#3F3F3F] transition-all ease-in duration-200 border-b border-[#545252]'>
                                <div className='flex items-center gap-3 py-4 px-6 mx-auto text-sm'>
                                   <span>
                                        <SpacesIcon/>
                                    </span>
                                    
                                    <span className="nav_item">Spaces</span> 
                                </div>
                            </Link>
                            
                        </div>
                    </div>

                </div>

                <div className="about_btn hover:bg-[#3F3F3F] transition-all ease-in duration-200 ">
                    <Link href="/spaces">
                        <div className='flex items-center gap-3 py-4 px-6 mx-auto text-sm'>
                            <span>
                                <AboutIcon/>
                            </span>
                            
                            <span className="nav_item">About</span> 
                        </div>
                    </Link>

                </div>

            </div>
            

        </div>
        
    </div>
  )
}

export default Sidebar