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
                                        <div className=" w-full mt-3 md:mt-0  relative overflow-hidden rounded h-full fade-in">
                                            <div className='flex items-center justify-center flex-col gap-4 py-8 max-w-md mx-auto'>
                                                <img src="/Group.svg" />
                                                <p>
                                                    No proposal has been created yet
                                                </p>

                                                <Link href="/spaces/2/create-proposals" className='w-full rounded-full bg-[#736C77] text-white py-3 mt-4 block text-center'>Create Proposals</Link>
                                            </div>
                                            
                                        </div>

                                    </TabPanel>
                                    <TabPanel>

                                        <div className=" w-full mt-3 md:mt-0  relative overflow-hidden rounded h-full fade-in">
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
                                        <div className=" w-full mt-3 md:mt-0  relative overflow-hidden rounded h-full fade-in">
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
                                        <div className=" w-full mt-3 md:mt-0  relative overflow-hidden rounded h-full fade-in">
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