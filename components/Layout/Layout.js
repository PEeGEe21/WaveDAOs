import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children, connectWallet}) => {
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    const navbarToggler = () =>{
        setShowMobileNavbar(!showMobileNavbar);
    }

  return (
    <div className='h-screen flex flex-row justify-start border-none'>
        <Sidebar showMobileNavbar={showMobileNavbar} setShowMobileNavbar={setShowMobileNavbar}/>
        <div className='bg-[#373636] flex-1  h-full overflow-y-auto'>
            <Header toggleconnectWallet={connectWallet} navbarToggler={navbarToggler}/>
            <div className='px-4 lg:px-8 xl:px-12 py-4 pb-9 mb-12 mt-6 max-w-6xl mx-auto'>
                {children}
            </div>
            
            {/* <Footer/> */}
        </div>
        
        
    </div>
  )
}

export default Layout