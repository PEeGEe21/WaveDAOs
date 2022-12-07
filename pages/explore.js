import Link from 'next/link'
import React from 'react'
import { Tabs } from 'react-tabs'
import Tab from 'react-tabs/lib/components/Tab'
import TabList from 'react-tabs/lib/components/TabList'
import TabPanel from 'react-tabs/lib/components/TabPanel'
import DropdownIcon from '../components/Icons/DropdownIcon'
import Layout from '../components/Layout/Layout'

const Explore = () => {
  return (
    <div>
        <Layout>
            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='section__header'>Spaces</h1>

                    <button className="flex items-center text-neutral700 bg-transparent text-sm border-[#545252] border px-5 py-2 rounded-full h-12">
                        <span>

                        </span>
                        Categories
                        <span className='text-sm flex items-center ml-4 pl-3 border-[#545252] border-l'>
                            All
                        <DropdownIcon className="text-sm text-[#545252] "/>
                        </span>
                    </button>
                </div>



                <div>
                        <Tabs>
                            <div className='flex items-center py-4 mb-3 flex-col lg:flex-row'>
                                <p className='mr-2'>All Spaces</p>    
                                <p className='text-sm text-gray-300'>12 Space(s)</p>
                                  
                            </div>


                                <div className='py-4'>
                                    
                                    <TabPanel>

                                        <div className=" w-full mt-3 md:mt-0  relative overflow-hidden rounded h-full fade-in">
                                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-x-12 gap-y-4">
                                            <Link href="/spaces/2">

                                                <div className="flex items-center flex-col justify-center mb-2 gap-4 text-sm w-full border border-[#545252] rounded-md p-3 py-5">
                                                    <div className='h-20 w-20'>
                                                        <img src='/spaces-img/image2.svg' className='w-full object-cover rounded-full  '/>
                                                    </div>
                                            
                                                    <div className=' mt-2'>
                                                        <h4 className='mb-1'>Lets go on</h4>
                                                        <p className="text-[#8F8F8F]">Arts, Grant</p>
                                                        <p className="text-[#8F8F8F]">5k Members</p>
                                                    </div> 
                                                </div>
                                                </Link>

                                                <Link href="/spaces/2">

                                                <div className="flex items-center flex-col justify-center mb-2 gap-4 text-sm w-full border border-[#545252] rounded-md p-3 py-5">
                                                        <div className='h-20 w-20'>
                                                            <img src='/spaces-img/image3.svg' className='w-full object-cover rounded-full  '/>
                                                        </div>
                                                
                                                        <div className=' mt-2'>
                                                            
                                                            <h4 className='mb-1'>Lets go on</h4>
                                                            <p className="text-[#8F8F8F]">Arts, Grant</p>
                                                            <p className="text-[#8F8F8F]">5k Members</p>
                                                        </div>
                                                        
                                                </div>
                                                </Link>
                                                <Link href="/spaces/2">

                                                <div className="flex items-center flex-col justify-center mb-2 gap-4 text-sm w-full border border-[#545252] rounded-md p-3 py-5">
                                                        <div className='h-20 w-20'>
                                                            <img src='/spaces-img/image4.svg' className='w-full object-cover rounded-full  '/>
                                                        </div>
                                                
                                                        <div className=' mt-2'>
                                                            
                                                            <h4 className='mb-1'>Lets go on</h4>
                                                            <p className="text-[#8F8F8F]">Arts, Grant</p>
                                                            <p className="text-[#8F8F8F]">5k Members</p>
                                                        </div>
                                                        
                                                </div>
                                                </Link>
                                                <Link href="/spaces/2">
                                                
                                                <div className="flex items-center flex-col justify-center mb-2 gap-4 text-sm w-full border border-[#545252] rounded-md p-3 py-5">
                                                        <div className='h-20 w-20'>
                                                            <img src='/spaces-img/image5.svg' className='w-full object-cover rounded-full  '/>
                                                        </div>
                                                
                                                        <div className=' mt-2'>
                                                            
                                                            <h4 className='mb-1'>Lets go on</h4>
                                                            <p className="text-[#8F8F8F]">Arts, Grant</p>
                                                            <p className="text-[#8F8F8F]">5k Members</p>
                                                        </div>
                                                        
                                                </div>
                                                </Link>
                                                <Link href="/spaces/2">

                                                <div className="flex items-center flex-col justify-center mb-2 gap-4 text-sm w-full border border-[#545252] rounded-md p-3 py-5">
                                                        <div className='h-20 w-20'>
                                                            <img src='/spaces-img/image9.svg' className='w-full object-cover rounded-full  '/>
                                                        </div>
                                                
                                                        <div className=' mt-2'>
                                                            
                                                            <h4 className='mb-1'>Lets go on</h4>
                                                            <p className="text-[#8F8F8F]">Arts, Grant</p>
                                                            <p className="text-[#8F8F8F]">5k Members</p>
                                                        </div>
                                                        
                                                </div>
                                                </Link>
                                                <Link href="/spaces/2">
                                                
                                                <div className="flex items-center flex-col justify-center mb-2 gap-4 text-sm w-full border border-[#545252] rounded-md p-3 py-5">
                                                        <div className='h-20 w-20'>
                                                            <img src='/spaces-img/image6.svg' className='w-full object-cover rounded-full  '/>
                                                        </div>
                                                
                                                        <div className=' mt-2'>
                                                            
                                                            <h4 className='mb-1'>Lets go on</h4>
                                                            <p className="text-[#8F8F8F]">Arts, Grant</p>
                                                            <p className="text-[#8F8F8F]">5k Members</p>
                                                        </div>
                                                        
                                                </div>
                                                </Link>
                                                <Link href="/spaces/2">
                                                
                                                <div className="flex items-center flex-col justify-center mb-2 gap-4 text-sm w-full border border-[#545252] rounded-md p-3 py-5">
                                                        <div className='h-20 w-20'>
                                                            <img src='/spaces-img/image7.svg' className='w-full object-cover rounded-full  '/>
                                                        </div>
                                                
                                                        <div className=' mt-2'>
                                                            
                                                            <h4 className='mb-1'>Lets go on</h4>
                                                            <p className="text-[#8F8F8F]">Arts, Grant</p>
                                                            <p className="text-[#8F8F8F]">5k Members</p>
                                                        </div>
                                                        
                                                </div>
                                                </Link>
                                                <Link href="/spaces/2">
                                                
                                                <div className="flex items-center flex-col justify-center mb-2 gap-4 text-sm w-full border border-[#545252] rounded-md p-3 py-5">
                                                        <div className='h-20 w-20'>
                                                            <img src='/spaces-img/image7.svg' className='w-full object-cover rounded-full  '/>
                                                        </div>
                                                
                                                        <div className=' mt-2'>
                                                            
                                                            <h4 className='mb-1'>Lets go on</h4>
                                                            <p className="text-[#8F8F8F]">Arts, Grant</p>
                                                            <p className="text-[#8F8F8F]">5k Members</p>
                                                        </div>
                                                        
                                                </div>
                                                </Link>
                                                <Link href="/spaces/2">
                                                
                                                <div className="flex items-center flex-col justify-center mb-2 gap-4 text-sm w-full border border-[#545252] rounded-md p-3 py-5">
                                                        <div className='h-20 w-20'>
                                                            <img src='/spaces-img/image7.svg' className='w-full object-cover rounded-full  '/>
                                                        </div>
                                                
                                                        <div className=' mt-2'>
                                                            
                                                            <h4 className='mb-1'>Lets go on</h4>
                                                            <p className="text-[#8F8F8F]">Arts, Grant</p>
                                                            <p className="text-[#8F8F8F]">5k Members</p>
                                                        </div>
                                                        
                                                </div>
                                                </Link>
                                                <Link href="/spaces/2">
                                                
                                                <div className="flex items-center flex-col justify-center mb-2 gap-4 text-sm w-full border border-[#545252] rounded-md p-3 py-5">
                                                        <div className='h-20 w-20'>
                                                            <img src='/spaces-img/image7.svg' className='w-full object-cover rounded-full  '/>
                                                        </div>
                                                
                                                        <div className=' mt-2'>
                                                            
                                                            <h4 className='mb-1'>Lets go on</h4>
                                                            <p className="text-[#8F8F8F]">Arts, Grant</p>
                                                            <p className="text-[#8F8F8F]">5k Members</p>
                                                        </div>
                                                        
                                                </div>
                                                </Link>
                                                <Link href="/spaces/2">
                                                
                                                <div className="flex items-center flex-col justify-center mb-2 gap-4 text-sm w-full border border-[#545252] rounded-md p-3 py-5">
                                                        <div className='h-20 w-20'>
                                                            <img src='/spaces-img/image7.svg' className='w-full object-cover rounded-full  '/>
                                                        </div>
                                                
                                                        <div className=' mt-2'>
                                                            
                                                            <h4 className='mb-1'>Lets go on</h4>
                                                            <p className="text-[#8F8F8F]">Arts, Grant</p>
                                                            <p className="text-[#8F8F8F]">5k Members</p>
                                                        </div>
                                                        
                                                </div>
                                                </Link>
                                                <Link href="/spaces/2">

                                                
                                                

                                                <div className="flex items-center flex-col justify-center mb-2 gap-4 text-sm w-full border border-[#545252] rounded-md p-3 py-5">
                                                        <div className='h-20 w-20'>
                                                            <img src='/spaces-img/image8.svg' className='w-full object-cover rounded-full  '/>
                                                        </div>
                                                
                                                        <div className=' mt-2'>
                                                            
                                                            <h4 className='mb-1'>Lets go on</h4>
                                                            <p className="text-[#8F8F8F]">Arts, Grant</p>
                                                            <p className="text-[#8F8F8F]">5k Members</p>
                                                        </div>
                                                        
                                                </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </TabPanel>

                                </div>

                                    
                        </Tabs>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Explore