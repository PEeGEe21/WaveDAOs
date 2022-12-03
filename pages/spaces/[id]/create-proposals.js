import React from 'react'
import ReturnIcon from '../../../components/Icons/ReturnIcon'
import Layout from '../../../components/Layout/Layout'
import { useRouter } from 'next/router';


const createproposals = () => {
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
                    <div className='flex-1 w-full mb-5'>
                        <h3  className='section__header'>                Create Proposals</h3>
                    </div>





                </div>
            </div>
        </Layout>
    </div>
  )
}

export default createproposals