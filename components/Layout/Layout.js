import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div>
        <Sidebar/>
        <div>
            <Header/>
            <Footer/>
        </div>
        
        
    </div>
  )
}

export default Layout