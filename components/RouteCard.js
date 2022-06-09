import axios from 'axios'
import jsCookie from 'js-cookie'
import {useEffect,useState} from 'react'
import Image from 'next/image'
function RouteCard() {
   
    return (
      <div className='flex flex-col border-2 focus:ring-blue-300 shadow-md w-full md:w-10/12 lg:w-2/3 mt-3'>
        <div className='h-24 md:h-32 flex'>
            <div className='flex-none md-full  w-24 md:w-32 bg-slate-700 p-2'  relative>
                  <Image width="100%" height="100%" layout="responsive" src={"/img/company1.jpg"}></Image>
            </div>
            <div className='grow h:full m-3 flex  flex mt-4'>
                      <div className='grow flex-col'>
                            <div className='text-lg text-center font-bold w-full'>
                                    7:00AM
                            </div>
                            <div className='text-base text-center w-full'>
                                    Phnom Penh
                            </div>
                      </div>
                      <div className='flex-none w-1/4 text-center'>
                                6H:00
                      </div>
                      <div className='grow flex-col'>
                            <div className='text-lg text-center font-bold w-full'>
                                    2:00PM
                            </div>
                            <div className='text-base text-center w-full'>
                                    Shihanoukville
                            </div>
                      </div>
            </div> 
            <div className='grow md:flex-none md:w-1/4 h:full m-3 flex flex-col mt-4'>
                      <div className='w-full text-center text-base'>
                            Price: 35000 Riel
                      </div>
                      <div className='w-full text-center text-sm text-red-500'>
                            PayBack : 25%
                      </div>
            </div> 
            <div className='hidden md:flex md:flex-none h-full w-full md:w-32' >
                          <button className='w-full md:w-10/12 justify-center bg-cyan-900 text-base text-white h-10 rounded-md focus:ring-2 focus:ring-blue-300 mt-10 '>Book</button>
            </div>
            
        </div>
        <div className='w-full md:w-10/12 lg:w-2/3 bg-white h-10 flex md:hidden'>
        <button className='w-full justify-center bg-cyan-900 text-base text-white h-10 focus:ring-2 focus:ring-blue-300'>Book</button> 
            </div>
      </div>
      
    )
  }
  export default RouteCard;