import React from 'react'
import { Icon } from '@iconify/react';
export default function Navbar1() {
  return (
    <div className='bg-final py-3 px-24'>
       
      <div className='flex  text-white bg-light p-2'>
        <h1 className='text-sm bg-yellow-700 text-black px-2'>Test</h1>
<h1 className='text-sm ml-3'>These are the test payouts and do not affect the actual balance. They are used only for the purpose of integrating events.</h1>
<h1 className='text-sm ml-4 text-button'>Learn more </h1>
    
      </div>



      <div className='flex  mx-auto  text-white text-md mt-2'>
       <div className='w-6/12 '>
       <ul className='flex'>

       <li className='flex items-center'>
              <span>
                <Icon icon="material-symbols-light:rectangle-outline"    className="h-8 mt-1 text-white text-sm font-extrabold" />
              </span>
              <h1 className='text-white text-sm  ml-3 mt-1'>Showing 1-5 payouts</h1>
            </li>
            <li className='flex items-center'>
              <span>
                <Icon icon="radix-icons:dot-filled"    className="h-8 ml-4 mt-1 text-white text-sm font-extrabold " />
              </span>
              <h1 className='text-white text-sm mt-1 ml-4 '>Sort by <span className='text-button'>latest creation date</span></h1>
              <span>
                <Icon icon="uiw:down"    className="h-8 ml-1 mt-1 text-button text-lg font-extrabold " />
              </span>
            </li>
      
       </ul>
       
       
       </div>
       <div className='ml-auto'>
       <ul className='flex'>

       <li className='flex items-center ml-4'>
      
      <Icon icon="ri:restart-line"     className="h-8 mt-1  text-sm font-extrabold text-button" />
      </li>
      <li className='flex items-center ml-4'>
        
      <Icon icon="zondicons:dots-horizontal-triple"     className="h-8 mt-1 text-button text-sm font-extrabold" />
      </li>



       <li className='flex items-center border px-2 mt-1 ml-3 border-button'>
       <span>
         <Icon icon="material-symbols:download-sharp"    className="h-8 mt-1 text-button text-sm font-extrabold" />
       </span>
       <h1 className='text-button text-sm  ml-3   pr-2'> Export</h1>
      
     </li>
    
        <li className='ml-3 flex items-center  px-2 mt-1 bg-button'>
       <span>
         <Icon icon="ic:baseline-plus"  className="h-8 mt-1 text-white text-sm font-extrabold" />
       </span>
       <h1 className='text-white text-sm  ml-3  border-r-2 pr-2'> Payouts</h1>
       <span>
         <Icon  icon="uiw:down"  className="h-8 mt-1 ml-1 text-white text-sm font-extrabold" />
       </span>
     </li>
    
   
  


</ul>


       </div>


      </div>



    </div>
  )
}
