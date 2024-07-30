import React from 'react'
import { Icon } from '@iconify/react';
export default function Navbar() {
  return (
    <div>
        <div className='border-yellow-500 border-t-2 mx-auto text-center bg-bgdark'>
     <span className=' rounded-lg  bg-yellow-500 mb-2 px-8 py-2 text-sm'>Go back to onboarding</span>
        </div>
      <div className='flex  mx-auto bg-bgdark text-white text-md px-24 py-2'>
       <div className='w-6/12 '>
       <ul className='flex'>

       <li className='flex items-center'>
              <span>
                <Icon icon="gis:arrow-o"  className="h-8 mt-1 text-white text-sm font-extrabold" />
              </span>
              <h1 className='text-white text-md  ml-3 '> Payouts</h1>
            </li>
            <li className='flex items-center'>
              <span>
                <Icon icon="bi:slash-lg"  className="h-8 ml-4 mt-1 text-white text-lg font-extrabold " />
              </span>
              <h1 className='text-white text-sm mt-1 ml-4 bg-bglight p-2 rounded-md'>Single</h1>
            </li>
            <li className='flex items-center ml-2'>
            <h1 className='text-white text-sm mt-1 ml-4 '>Bulk</h1>
              <h1 className='text-white text-sm mt-1 ml-1 bg-green-700 rounded-lg px-2 '> new</h1>
            </li>
            <li className='flex items-center ml-4'>
             
              <h1 className='text-white text-sm mt-1 ml-4 '>Tally</h1>
            </li>
            <li className='flex items-center ml-4'>
              
              <h1 className='text-white text-sm mt-1 ml-4 '>Payouts Link</h1>
            </li>
     
      
       </ul>
       
       
       </div>
       <div className='ml-auto'>
       <ul className='flex'>

        <li className='flex items-center border-button border-2 px-2 mt-1 '>
       <span>
         <Icon icon="ic:baseline-plus"  className="h-8 mt-1 text-button text-sm font-extrabold" />
       </span>
       <h1 className=' text-sm  ml-3 border-button text-button border-r-2 pr-2'> Payouts</h1>
       <span>
         <Icon  icon="uiw:down"  className="h-8 mt-1 ml-1 text-button text-sm font-extrabold" />
       </span>
     </li>
    
     <li className='flex items-center ml-4'>
     <Icon  icon="iconamoon:search-bold"   className="h-8 mt-1  text-md text-button font-extrabold" />
     </li>
     <li className='flex items-center ml-4'>
      
     <Icon icon="ri:mic-fill"   className="h-8 mt-1  text-md font-extrabold text-yellow-600" />
     </li>
     <li className='flex items-center ml-4'>
       
     <Icon icon="akar-icons:person"   className="h-8 mt-1 text-button text-md font-extrabold" />
     </li>


</ul>


       </div>


      </div>
      <div>
      <div className='flex  mx-auto bg-light1 text-white text-md px-24 py-3'>
       <div className='w-8/12 '>
       <ul className='flex'>

       <li className='flex items-center'>
            
              <h1 className='text-white text-sm  ml-3 '>Quick Filters : </h1>
            </li>
            <li className='flex items-center ml-4 px-4 bg-light'>
              <span>
                <Icon icon="mdi:tick-circle"    className="h-8  mt-1 text-button text-lg font-extrabold " />
              </span>
              <h1 className='text-button text-sm mt-1 ml-4 '>All Payouts</h1>
            </li>
            <li className='flex items-center ml-4 px-4 bg-light'>
              <span>
                <Icon icon="material-symbols:circle-outline"     className="h-8  mt-1 text-white text-sm font-extrabold " />
              </span>
              <h1 className='text-white text-sm mt-1 ml-4 '>Scheduled for next 2 days</h1>
            </li>
            <li className='flex items-center ml-4 px-4 bg-light'>
              <span>
                <Icon icon="material-symbols:circle-outline"      className="h-8  mt-1 text-white text-sm font-extrabold " />
              </span>
              <h1 className='text-white text-sm mt-1 ml-4 '>Queued (RazorpayX A/c) 1</h1>
            </li>
           
     
      
       </ul>
       
       
       </div>
       <div className='ml-auto flex'>
       <h1 className=' text-sm text-button mt-2 ml-4 '>View More Filters</h1>
       <span>
                <Icon icon="uiw:down"    className="h-8  ml-2 mt-1 text-button text-lg font-extrabold " />
              </span>

      <div>

        
      </div>


       </div>


      </div>


      </div>
    </div>
  )
}
