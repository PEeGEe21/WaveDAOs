import React from 'react'
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout/Layout'
import { Tabs } from 'react-tabs'
import Tab from 'react-tabs/lib/components/Tab'
import TabList from 'react-tabs/lib/components/TabList'
import TabPanel from 'react-tabs/lib/components/TabPanel'
import ReturnIcon from '../../../components/Icons/ReturnIcon';
import Link from 'next/link';

const Proposals = () => {
    const router = useRouter();
    const goBack =()=>{
        router.back();
    }
  return (
    <div>
        <Layout>
            <div>
                <div className='flex items-center justify-between mb-6'>
                    <div>
                        <button className='flex items-center bg-[#3F3F3F] gap-2 px-6 py-4 rounded-full' onClick={goBack}>
                            <ReturnIcon /> Back
                        </button> 
                    
                    </div>
                    <div className='flex items-center flex-row gap-3'>
                            
                        <div className='h-14 w-14'>
                            <img src='/spaces-img/image1.svg' className='w-full object-cover rounded-full  '/>
                        </div>

                        <div>
                            <h4 className='mb-1'>Lets go on</h4>
                        </div>
                    </div>            
                </div>
                
                <div className=' w-full mt-3 md:mt-0  relative h-full px-5 '>


               

                            <Tabs>
                                <div className='flex items-center py-4 mb-3 flex-col lg:flex-row'>
                                    <div className='flex-1 w-full'>
                                        <h3 className='section__header'>Proposals</h3>
                                    </div>

                                    <TabList className='flex flex-row items-center justify-start  tabs-header rounded-md gap-3'>
                                        <Tab className=''>
                                            <button className="flex items-center text-sm px-6 py-3 rounded button2 h-12">
                                                All
                                            </button>
                                        </Tab>
                                        <Tab className=''>
                                            <button className="flex items-center text-sm px-6 py-3 rounded h-12 button2">
                                                Pending
                                            </button>
                                        </Tab>
                                        <Tab className=''>
                                            <button className="flex items-center text-sm px-6 py-3 rounded h-12 button2">
                                                Active
                                            </button>
                                        </Tab>
                                        <Tab className=''>
                                            <button className="flex items-center text-sm px-6 py-3 rounded h-12 button2">
                                            Closed
                                            </button>
                                        </Tab>
                                    </TabList>
                                </div>

                                <div className='py-4'>
                                    <TabPanel>
                                        <div className=" w-full mt-3 md:mt-0  relative rounded h-full fade-in">
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                                                    <div className="">
                                                        <div className="px-4 py-6 border border-[#545252] text-white text-sm font-medium rounded-lg flex items-start justify-start flex-col form-check gap-2 cursor-pointer">
                                                            <div className='flex items-start mb-3'>
                                                                <div className='grow'>
                                                                    <h4 className='mb-3 text-sm text-[#E6E5E5]'>Increase Liquidity Pool Token Reserve by 1.5% before the next bull run.</h4>
                                                                    <div className='inline-flex items-center space-x-2'>
                                                                        <span className='text-[#8F8F8F]'>by</span>
                                                                        <span className='inline-flex items-center gap-1'><img src='/spaces-img/image3.svg' className='w-6 h-6'/>0x6tRuldks...v223</span>
                                                                    </div>
                                                                </div>

                                                                <div>
                                                                    <span className='rounded-full px-5 py-2 bg-[#3F3F3F]'>
                                                                       Active
                                                                    </span>
                                                                </div>
                                                                
                                                            </div>

                                                            <div className='flex items-start justify-start flex-col space-y-2'>
                                                                {/* <h5 className=' text-[#E6E5E5] text-sm'>Weighted voting</h5> */} 
                                                                <p className='text-xs text-[#C3C3C3] leading-5'>Egestas feugiat posuere vel diam egestas tortor eget magna elementum. Odio blandit sit egestas tellus. Volutpat gravida laoreet elementum morbi aliquam id quam lorem. Et leo sem malesuada risus a orci nullam mauris faucibus. Integer dignissim nunc odio quis..</p>
                                                            </div>

                                                            <div className='flex items-center justify-between w-full mt-4'>
                                                                <span className='text-[#8F8F8F]'>3 days left</span>
                                                                <span><span className='text-[#8F8F8F] mr-4'>End:</span> Dec 1, 2022 - 10:00am </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="px-4 py-6 border border-[#545252] text-white text-sm font-medium rounded-md flex items-start justify-start form-check gap-2 cursor-pointer">
                                                            <input type="radio" name="vehicle" className="w-8 h-8 text-red-600 checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200"/>

                                                            <span className='flex items-start justify-start flex-col space-y-2'>
                                                                <h5 className=' text-[#E6E5E5] text-sm'>Weighted voting</h5>
                                                                <p className='text-xs text-[#8F8F8F]'>Each voter has the ability to cast their votes across any number of options.</p>
                                                            </span>
                                                        </div>
                                                    </div>

                                            </div>
                                           
                                            
                                        </div>

                                    </TabPanel>
                                    <TabPanel>

                                        <div className=" w-full mt-3 md:mt-0  relative rounded h-full fade-in">
                                            <div className='flex items-center justify-center flex-col gap-4 py-8 max-w-md mx-auto'>
                                                <img src="/Group.svg" />
                                                <p>
                                                No pending proposal yet
                                                </p>

                                                <Link href="/spaces/2/create-proposals" className='w-full rounded-full bg-[#736C77] text-white py-3 mt-4 block text-center'>Create Proposals</Link>
                                            </div>
                                            
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className=" w-full mt-3 md:mt-0  relative rounded h-full fade-in">
                                            <div className='flex items-center justify-center flex-col gap-4 py-8 max-w-md mx-auto'>
                                                <img src="/Group.svg" />
                                                <p>
                                                No active proposal yet
                                                </p>

                                                <Link href="/spaces/2/create-proposals" className='w-full rounded-full bg-[#736C77] text-white py-3 mt-4 block text-center'>Create Proposals</Link>
                                            </div>
                                            
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className=" w-full mt-3 md:mt-0  relative rounded h-full fade-in">
                                            <div className='flex items-center justify-center flex-col gap-4 py-8 max-w-md mx-auto'>
                                                <img src="/Group.svg" />
                                                <p>
                                                No closed proposal yet
                                                </p>

                                                <Link href="/spaces/2/create-proposals" className='w-full rounded-full bg-[#736C77] text-white py-3 mt-4 block text-center'>Create Proposals</Link>
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

export default Proposals