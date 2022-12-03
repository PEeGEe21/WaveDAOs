import React from 'react'
import LockIcon from '../Icons/LockIcon'
import ToggleIcon from '../Icons/ToggleIcon'

const Header = () => {
  return (
    <div className='sticky top-0 z-50 py-4 px-6 bg-[#373636] border-b border-[#545252]'>
        <div className='flex items-center justify-between '>
            <div>
                <button className='flex items-center justify-between p-3'>
                    <ToggleIcon/>
                </button>
                
            </div>

            <div className='flex items-center gap-8'>
                <button className='button1 px-7 py-3 flex justify-between items-center gap-5 rounded-full'>
                    <span>
                        <LockIcon/>
                    </span>
                    Connect Wallet
                </button>

                <button className='bg-[#3F3F3F] p-3 rounded-full'>
                    <img src='/sun.svg'/> 
                </button>
            </div>

        </div>
    </div>
  )
}

export default Header