import React from 'react'
import Layout from '../../../../components/Layout/Layout'
import { useRouter } from 'next/router';
import ReturnIcon from '../../../../components/Icons/ReturnIcon';
import HorizontalIcon from '../../../../components/Icons/HorizontalIcon';
import ShareIcon from '../../../../components/Icons/ShareIcon';
import Link from 'next/link';
import DropdownIcon from '../../../../components/Icons/DropdownIcon';
import EditIcon from '../../../../components/Icons/EditIcon';


const ProposalDetail = () => {
    const router = useRouter();
    const goBack =()=>{
        router.back();
    }
  return (
    <div>
      <Layout>
        <div>
                  <div className='flex items-center justify-between mb-6 flex-wrap'>
                    <div>
                        <button className='flex items-center bg-[#3F3F3F] gap-2 px-6 py-4 rounded-full' onClick={goBack}>
                            <ReturnIcon /> Back
                        </button> 
                    
                    </div>
                    <div className='flex items-center justify-evenly gap-8 flex-wrap'>

                      <div className='flex items-center flex-row gap-3'>  
                          <img src='/spaces-img/image1.svg' className='h-14 w-14 object-cover rounded-full  '/>
                          <div>
                            <h4 className='mb-1'>Lets go on</h4>
                          </div>
                      </div>

                      <div class="relative  flex items-center md:justify-end font-normal  text-[#EEF0F2] leading-tight border border-[#545252] rounded-full bg-[#3F3F3F]">
                          <span class="flex items-center rounded-full text-sm  justify-start py-2 px-5 ">
                              <span class="h-2 w-4 text-green-500 rounded-full text-center">
                                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="3" cy="3" r="3" fill="currentColor"/>
                                  </svg>
                              </span>
                              Active
                          </span>
                      </div>
                      <div>
                        <button className='bg-[#3F3F3F] rounded-full p-3'>
                          <ShareIcon/> 
                        </button>
                        
                      </div>
                      <div>
                        <button className='bg-[#3F3F3F] rounded-full p-3'>
                          <HorizontalIcon/>
                        </button>
                        
                      </div>
                    </div>
                                
                  </div>


                  <div className='mt-3 w-full  md:mt-8  relative rounded h-full px-5 '>
                    {/* <div className='absolute h-full border border-[#E4E7EC] inset-0 z-0 mx-auto w-[0.5px] hidden md:block'></div> */}

                    <div className='flex  py-6 w-full gap-6 relative'>
                        <div className='  py-6 w-8/12 border-r border-[#3F3F3F] px-10'>
                            <div className='flex items-center justify-between'>
                              <div className='grow'>
                                  <h4 className='mb-3 text-2xl text-[#E6E5E5]'>Increase Liquidity Pool Token Reserve by 1.5% before the next bull run.</h4>
                                  <div className='inline-flex items-center space-x-2'>
                                      <span className='text-[#8F8F8F]'>by</span>
                                      <span className='inline-flex items-center gap-1 text-xs'><img src='/spaces-img/image3.svg' className='w-6 h-6'/>0x6tRuldks...v223</span>
                                  </div>
                              </div>
                            </div>

                            <div className='mt-5'>
                                <div className='space-y-7 py-6'>

                                
                                  <div>
                                      <div className='mb-3 text-sm'>
                                        <h5>Discussion URL</h5>
                                      </div>

                                      <textarea className="w-full border border-[#545252] focus:outline-none active:outline-none p-3  placeholder-text-primary bg-transparent rounded-lg textarea placeholder-text-sm text-[#8F8F8F] " rows="5" id="description" defaultValue="Nulla interdum odio lectus quis donec nulla egestas lectus at. Risus sollicitudin venenatis vitae natoque ut netus. Sit sed a sagittis vel nibh viverra dui odio. Urna auctor mauris eu et pellentesque erat. Imperdiet dui viverra sit phasellus. ">
                                      
                                      </textarea>
                                  </div>

                                  <div className=''>
                                      <div className='mb-3'>
                                        <h5 className='text-sm'>Discussion URL</h5>
                                      </div>

                                      <div className='flex items-start justify-start gap-4 rounded-xl border border-[#545252] px-4 py-4'>

                                          <img src='/link.svg' className='h-12 w-12 p-3 rounded-full bg-[#3F3F3F]'/>
                                          <span className='text-[#A4A1A1] w-8/12'>
                                            Nulla interdum odio lectus quis donec nulla egestas lectus at.
                                          </span>
                                          
                                      </div>
                                  </div>

                                  <div className=''>
                                      <div className='mb-3'>
                                        <h5 className='text-sm'>Votes</h5>
                                      </div>

                                      <div class="flex flex-col voting_table">
                                      <div class="overflow-x-auto ">
                                        <div class="py-2 inline-block min-w-full ">
                                          <div class="overflow-x-auto">
                                            <table class="min-w-full">
                                              <thead class="border-b border-[#545055]">
                                                <tr>
                                                  <th scope="col" class="text-sm font-medium text-[#6A6A6A] px-6 py-4 text-left">
                                                  Wallet Address
                                                  </th>
                                                  <th scope="col" class="text-sm font-medium text-[#6A6A6A] px-6 py-4 text-left">
                                                  Vote
                                                  </th>
                                                  <th scope="col" class="text-sm font-medium text-[#6A6A6A] px-6 py-4 text-left">
                                                  Voting Power
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr class="border-b border-[#545055] text-[#CBCBCB]">
                                                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center justify-start gap-2">
                                                    <img src='/spaces-img/image2.svg' className='h-8 w-8'/>
                                                    <span className='text-[#A4A1A1] w-8/12'>
                                                    0xskdf...s505
                                                    </span>
                                                  </td>
                                                  <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    For
                                                  </td>
                                                  <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    300 USDC
                                                  </td>
                                                </tr>
                                                <tr class="border-b border-[#545055] text-[#CBCBCB]">
                                                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center justify-start gap-2">
                                                    <img src='/spaces-img/image6.svg' className='h-8 w-8'/>
                                                    <span className='text-[#A4A1A1] w-8/12'>
                                                    0xgsD4...234e
                                                    </span>
                                                  </td>
                                                  <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    For
                                                  </td>
                                                  <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    300 USDC
                                                  </td>
                                                </tr>
                                                <tr class="border-b border-[#545055] text-[#CBCBCB]">
                                                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center justify-start gap-2">
                                                    <img src='/spaces-img/image3.svg' className='h-8 w-8'/>
                                                    <span className='text-[#A4A1A1] w-8/12'>
                                                    0xd5as..SD45
                                                    </span>
                                                  </td>
                                                  <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    Against
                                                  </td>
                                                  <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    300 USDC
                                                  </td>
                                                </tr>
                                                <tr class="border-b border-[#545055] text-[#CBCBCB]">
                                                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center justify-start gap-2">
                                                    <img src='/spaces-img/image7.svg' className='h-8 w-8'/>
                                                    <span className='text-[#A4A1A1] w-8/12'>
                                                    0xWmd5...789j
                                                    </span>
                                                  </td>
                                                  <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    Abstain
                                                  </td>
                                                  <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    300 USDC
                                                  </td>
                                                </tr>
                                                <tr class="border-b border-[#545055] text-[#CBCBCB]">
                                                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center justify-start gap-2">
                                                    <img src='/spaces-img/image9.svg' className='h-8 w-8'/>
                                                    <span className='text-[#A4A1A1] w-8/12'>
                                                    0xsae4...4F67
                                                    </span>
                                                  </td>
                                                  <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    For
                                                  </td>
                                                  <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    300 USDC
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>


                                    

                                </div>

                            </div>


                        </div>
                        <div className='w-4/12'>
                          {/* basic-voting */}
                          <div className='basic-voting space-y-9'>
                            <div className=' p-4   transition-all duration-200 ease-linear text-sm'>
                                <h5 className=''>Voting Details</h5>

                                <div className='space-y-4 mt-5'>
                                  <div className='flex items-center justify-between w-full'>
                                    <span className='w-6/12 text-[#8F8F8F]'>Begins</span>
                                    <span className='w-6/12 flex justify-start'>Dec 1, 2022 - 10:00am</span>
                                  </div>
                                  <div className='flex items-center justify-between w-full'>
                                    <span className='w-6/12 text-[#8F8F8F]'>Ends</span>
                                    <span className='w-6/12 flex justify-start'>Dec 1, 2022 - 10:00am</span>
                                  </div>
                                  <div className='flex items-center justify-between w-full'>
                                    <span className='w-6/12 text-[#8F8F8F]'>Voting type</span>
                                    <span className='w-6/12 flex justify-start'>basic Voting</span>
                                  </div>
                                    
                                </div>
                            </div>


                            <div className=' p-4 border border-[#49494C] rounded-2xl transition-all duration-200 ease-linear text-sm'>
                                <h5 className=''>Vote</h5>

                                <div className='space-y-3 mt-5'>
                                  <div className='flex items-center justify-between w-full gap-3'>
                                    <button className='w-full rounded-full px-6 py-4 border border-[#545252] text-left'>For</button>
                                    
                                  </div>
                                  <div className='flex items-center justify-between w-full gap-3'>
                                    <button className='w-full rounded-full px-6 py-4 border border-[#545252] text-left'>Against</button>
                                  </div>
                                  <div className='flex items-center justify-between w-full gap-3'>
                                    <button className='w-full rounded-full px-6 py-4 border border-[#545252] text-left'>Abstain</button>
                                  </div>
                                  <div className='w-full '>
                                      <button className='button1 px-7 py-3 flex justify-center items-center text-center gap-5 rounded-full w-full'>
                                      Cast your vote
                                      </button>
                                  </div>
                                    
                                </div>
                                
                            </div>

                            <div className=' p-4 border border-[#49494C] rounded-2xl transition-all duration-200 ease-linear text-sm'>
                                <h5 className=''>Results so far</h5>

                                <div className='flex items-center justify-center py-4'>
                                  <img src='/basic_voting.svg'/>
                                </div>


                                <div className='grid grid-cols-1 gap-4 mt-3 px-5 py-4'>
                                  <div className='flex items-center justify-start w-full gap-3'>
                                    <span className='w-3 h-4 px-2 bg-[#B869E8]'></span>
                                    <span className='text-left'>For</span>
                                  </div>
                                  <div className='flex items-center justify-start w-full gap-3'>
                                    <span className='w-3 h-4 px-2 bg-[#F35DB7]'></span>
                                    <span className='text-left'>Abstain</span>
                                  </div>
                                  <div className='flex items-center justify-start w-full gap-3'>
                                    <span className='w-3 h-4 px-2 bg-[#EDA460]'></span>
                                    <span className='text-left'>Against</span>
                                  </div>
                                  
                                    
                                </div>
                                
                            </div>

                          </div>


                          {/* weighted-voting */}
                          <div className='weighted-voting space-y-9'>
                            <div className=' p-4   transition-all duration-200 ease-linear text-sm'>
                                <h5 className=''>Voting Details</h5>

                                <div className='space-y-4 mt-5'>
                                  <div className='flex items-center justify-between w-full text-sm'>
                                    <span className='w-6/12 text-[#8F8F8F]'>Begins</span>
                                    <span className='w-6/12 flex justify-start'>Dec 1, 2022 - 10:00am</span>
                                  </div>
                                  <div className='flex items-center justify-between w-full'>
                                    <span className='w-6/12 text-[#8F8F8F]'>Ends</span>
                                    <span className='w-6/12 flex justify-start'>Dec 1, 2022 - 10:00am</span>
                                  </div>
                                  <div className='flex items-center justify-between w-full'>
                                    <span className='w-6/12 text-[#8F8F8F]'>Voting type</span>
                                    <span className='w-6/12 flex justify-start'>Weighted Voting</span>
                                  </div>
                                    
                                </div>
                            </div>


                            <div className=' p-4 border border-[#49494C] rounded-2xl transition-all duration-200 ease-linear text-sm'>
                                <h5 className=''>Vote</h5>

                                <div className='space-y-3 mt-5'>
                                  <div className='flex items-center justify-between w-full gap-3'>
                                    <button className='w-8/12 rounded-full px-6 py-4 border border-[#545252] text-left'>Ditto</button>
                                    <span className='w-4/12 flex rounded-full px-6 py-4 border text-center justify-center border-[#545252]'>50 %</span>
                                  </div>
                                  <div className='flex items-center justify-between w-full gap-3'>
                                    <button className='w-8/12 rounded-full px-6 py-4 border border-[#545252] text-left'>Not at all</button>
                                    <span className='w-4/12 flex rounded-full px-6 py-4 border text-center justify-center border-[#545252]'>30 %</span>
                                  </div>
                                  <div className='flex items-center justify-between w-full gap-3'>
                                    <button className='w-8/12 rounded-full px-6 py-4 border border-[#545252] text-left'>In between</button>
                                    <span className='w-4/12 flex rounded-full px-6 py-4 border text-center justify-center border-[#545252]'>20 %</span>
                                  </div>
                                  <div className='flex items-center justify-between w-full gap-3'>
                                    <button className='w-8/12 rounded-full px-6 py-4 border border-[#545252] text-left'>You dont say</button>
                                    <span className='w-4/12 flex rounded-full px-6 py-4 border text-center justify-center border-[#545252]'>10 %</span>
                                  </div>
                                  <div className='w-full '>
                                      <button className='button1 px-7 py-3 flex justify-center items-center text-center gap-5 rounded-full w-full'>
                                      Cast your vote
                                      </button>
                                  </div>
                                    
                                </div>
                                
                            </div>

                            <div className=' p-4 border border-[#49494C] rounded-2xl transition-all duration-200 ease-linear text-sm'>
                                <h5 className=''>Results so far</h5>

                                <div className='flex items-center justify-center py-4'>
                                  <img src='/spaces-img/Group.svg'/>
                                </div>


                                <div className='grid grid-cols-2 gap-4 mt-3 px-5 py-4'>
                                  <div className='flex items-center justify-start w-full gap-3'>
                                    <span className='w-3 h-4 px-2 bg-[#B869E8]'></span>
                                    <span className='text-left'>Ditto</span>
                                  </div>
                                  <div className='flex items-center justify-start w-full gap-3'>
                                    <span className='w-3 h-4 px-2 bg-[#EDA460]'></span>
                                    <span className='text-left'>In between</span>
                                  </div>
                                  <div className='flex items-center justify-start w-full gap-3'>
                                    <span className='w-3 h-4 px-2 bg-[#F35DB7]'></span>
                                    <span className='text-left'>Not at all</span>
                                  </div>
                                  <div className='flex items-center justify-start w-full gap-3'>
                                    <span className='w-3 h-4 px-2 bg-[#6A8AFF]'></span>
                                    <span className='text-left'>You dont say</span>
                                  </div>
                                    
                                </div>
                                
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

export default ProposalDetail