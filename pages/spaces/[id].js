import { useRouter } from 'next/router';
import React from 'react'
import DropdownIcon from '../../components/Icons/DropdownIcon';
import EditIcon from '../../components/Icons/EditIcon';
import ReturnIcon from '../../components/Icons/ReturnIcon'
import Layout from '../../components/Layout/Layout'

const SpaceDetail = () => {
    const router = useRouter();
    const goBack =()=>{
        router.back();
    }
  return (
    <div>
        <Layout>
            <div>
                <div>
                   <button className='flex items-center bg-[#3F3F3F] gap-2 px-6 py-4 rounded-full' onClick={goBack}>
                        <ReturnIcon /> Back
                    
                    </button> 
                
                </div>


                <div className=' w-full mt-3 md:mt-0  relative overflow-hidden rounded h-full px-5 '>
                    {/* <div className='absolute h-full border border-[#E4E7EC] inset-0 z-0 mx-auto w-[0.5px] hidden md:block'></div> */}

                    <div className='flex  py-6 w-full gap-6 relative'>
                        <div className=' mt-9 py-6 w-8/12 border-r border-[#3F3F3F] px-10'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center flex-row gap-3'>
                                        
                                        <div className='h-14 w-14'>
                                            <img src='/spaces-img/image1.svg' className='w-full object-cover rounded-full  '/>
                                        </div>

                                    <div>
                                        <h4 className='mb-1'>Lets go on</h4>
                                        <p className="text-[#8F8F8F]">5k Members</p>
                                    </div>
                                </div>
                                
                                <div>
                                    <button className='text-[#CF95F2] flex items-center flex-row gap-3'>
                                        <EditIcon />
                                        Edit
                                    </button>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <div className='space-y-5 py-6'>

                                
                                <div>
                                    <label className='flex flex-col gap-3'>Description of space</label>
                                    <textarea className="w-full border border-[#3F3F3F] focus:outline-none active:outline-none p-3  placeholder-text-primary bg-transparent rounded-lg textarea placeholder-text-sm text-[#8F8F8F] " aria-placeholder="Leave a note for your client" rows="5" id="description">
                                    Nulla interdum odio lectus quis donec nulla egestas lectus at. Risus sollicitudin venenatis vitae natoque ut netus. Sit sed a sagittis vel nibh viverra dui odio. Urna auctor mauris eu et pellentesque erat. Imperdiet dui viverra sit phasellus. 
                                    </textarea>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label>Category</label>
                                    <div className='space-x-4'>
                                        <button className="px-8 py-4 bg-[#3F3F3F] text-white text-sm font-medium rounded-full uppercase">
                                            Art
                                        </button>
                                        <button className="px-8 py-4 bg-[#3F3F3F] text-white text-sm font-medium rounded-full uppercase">
                                        Grants
                                        </button>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label>Website</label>
                                    <div className='space-x-4'>
                                        <input type="text" value="https://letsgoon.com" className='w-full h-12 rounded-full bg-transparent text-[#8F8F8F] border border-[#3F3F3F] px-4 focus:border-[#8F8F8F] active:border-[#8F8F8F] focus:outline-none transition duration-150 ease-in-out' readOnly/>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label>Terms of service</label>
                                    <div className='space-x-4'>
                                        <input type="text" value="https://termsandservice" className='w-full h-12 rounded-full bg-transparent text-[#8F8F8F] border border-[#3F3F3F] px-4 focus:border-[#8F8F8F] active:border-[#8F8F8F] focus:outline-none transition duration-150 ease-in-out' readOnly/>
                                    </div>
                                </div>
</div>
                                <div className='w-full flex items-center justify-center my-6'>
                                    <button className='flex items-center justify-center'>
                                        view more 
                                        <DropdownIcon/>
                                    </button>
                                </div>


                                <div className='space-y-6'>
                                    <div className='mb-4'>
                                       <h5>Controller address</h5>
                                        <p className='text-xs text-[#8F8F8F]'>The user account with control over the space's settings is the space controller. </p> 
                                    </div>

                                    <div className='flex items-center justify-start gap-3 rounded-full border border-[#545252] px-4 py-3 '>

                                        <img src='/spaces-img/image3.svg' className='h-8 w-8'/>
                                        0x6tRtdgji7644780bxsdgi098rewwdgi09986hgdwq4t7v223
                                    </div>

                                    <div  className='w-full relative border border-[#545252] rounded-lg py-3  '>
                                        <button className='flex items-center justify-between  px-4 py-4 w-full text-white'>
                                            Partners

                                            <DropdownIcon/>
                                        </button>

                                        <div className='px-4 py-2'>
                                            <div className='pb-3 text-sm text-[#E6E5E5]'>Address</div>
                                            
                                            <div className='flex items-center justify-start gap-3 rounded-full border border-[#545252] px-4 py-3 mb-3 text-sm'>

                                                0x6tRtdgji7644780bxsdgi098rewwdgi09986hgdwq4t7v223
                                            </div>
                                            <div className='flex items-center justify-start gap-3 rounded-full border border-[#545252] px-4 py-3 text-sm '>
                                                0x6tRtdgji7644780bxsdgi098rewwdgi09986hgdwq4t7v223
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full relative border border-[#545252] rounded-lg py-3  '>
                                        <button className='flex items-center justify-between  px-4 py-4 w-full text-white'>
                                        Creators

                                            <DropdownIcon/>
                                        </button>

                                        <div className='px-4 py-2'>
                                            <div className='pb-3 text-sm text-[#E6E5E5]'>Address</div>
                                            
                                            <div className='flex items-center justify-start gap-3 rounded-full border border-[#545252] px-4 py-3 mb-3 text-sm'>

                                                0x6tRtdgji7644780bxsdgi098rewwdgi09986hgdwq4t7v223
                                            </div>
                                            <div className='flex items-center justify-start gap-3 rounded-full border border-[#545252] px-4 py-3 text-sm mb-3 '>
                                                0x6tRtdgji7644780bxsdgi098rewwdgi09986hgdwq4t7v223
                                            </div>
                                            <div className='flex items-center justify-start gap-3 rounded-full border border-[#545252] px-4 py-3 text-sm '>
                                                0x6tRtdgji7644780bxsdgi098rewwdgi09986hgdwq4t7v223
                                            </div>
                                        </div>
                                    </div>



                                    <div className='w-full relative border border-[#545252] rounded-lg py-3  '>
                                        <button className='flex items-center justify-between  px-4 py-4 w-full text-white'>
                                            Socials

                                            <DropdownIcon/>
                                        </button>

                                        <div className='px-4 py-2 space-y-6'>
                                            <div>
                                                <div className='pb-3 text-sm text-[#E6E5E5]'>GitHub</div>
                                                <div className='flex items-center justify-start gap-3 rounded-full border border-[#545252] px-4 py-3 '>
                                                    <img src='/spaces-img/image3.svg' className='h-8 w-8'/>
                                                    https://githubbook.com
                                                </div>
                                            </div>
                                            <div>
                                                <div className='pb-3 text-sm text-[#E6E5E5]'>Twitter</div>
                                                <div className='flex items-center justify-start gap-3 rounded-full border border-[#545252] px-4 py-3 '>
                                                    <img src='/spaces-img/image3.svg' className='h-8 w-8'/>
                                                    https://letsgoon.com
                                                </div>
                                            </div>
                                            <div>
                                                <div className='pb-3 text-sm text-[#E6E5E5]'>Discord</div>
                                                <div className='flex items-center justify-start gap-3 rounded-full border border-[#545252] px-4 py-3 '>
                                                    <img src='/spaces-img/image3.svg' className='h-8 w-8'/>
                                                    https://letsgoon.com
                                                </div>
                                            </div>
                                            
                                            
                                           
                                        </div>
                                    </div>




                                    {/* <div  className='w-full relative'>
                                        <button className='flex items-center justify-between  rounded-lg border border-[#545252] px-4 py-3 w-full'>
                                        Creators
                                            <DropdownIcon/>
                                        </button>
                                    </div> */}
                                    
                                    <div  className='w-full relative'>
                                        <button className='flex items-center justify-between  rounded-lg border border-[#545252] px-4 py-3 w-full'>
                                        Proposal Settings
                                            <DropdownIcon/>
                                        </button>
                                    </div>
                                    <div  className='w-full relative'>
                                        <button className='flex items-center justify-between  rounded-lg border border-[#545252] px-4 py-3 w-full'>
                                        Treasury
                                            <DropdownIcon/>
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                        <div className='w-4/12'>
                            <div className='rounded-lg p-4 border border-[#8F8F8F] sticky top-0 text-sm'>
                                <h5 className=''>Proposals</h5>

                                <div className='mt-5 pt-5'>
                                    <h4 className='text-center mb-5 text-[#CF95F2]'>View all Proposals</h4>

                                    <button className='w-full rounded-full bg-[#736C77] text-white py-3'>Create Proposals</button>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
                
            </div>
        </Layout>
    </div>
  )
}

export default SpaceDetail