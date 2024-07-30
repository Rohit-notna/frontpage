import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Sidebar() {
  const [isSmall, setIsSmall] = useState(true);

  function onClick() {
    setIsSmall(!isSmall);
  }

  return (
    <div className='fixed'>
      <nav 
        className={` ${isSmall ? 'w-16 bg-bgdark ' : 'w-2/12 bg-bglight'} transition-all duration-300 z-10 fixed top-0 left-0 h-full`} 
        onClick={onClick}
      >
        <div className='flex pt-4 items-center mb-4'>
          {!isSmall && (
            <>
              <Icon icon="simple-icons:razorpay" className="h-8 ml-4 text-white text-2xl font-extrabold" />
              <h1 className='text-white text-3xl'>Razorpay</h1>
            </>
          )}
          <Icon 
            icon="pajamas:twitter" 
            className={`h-8 ${isSmall ? 'ml-5 mb-6' : 'ml-0 mb-0'} text-white text-2xl font-extrabold`} 
          />
        </div>

        <div className={`flex flex-col items-start ${isSmall ? 'mt-4' : 'mt-0'}`}>
          <ul className={`${isSmall ? 'hidden' : 'block'}`}>
            <li className='flex items-center'>
              <span>
                <Icon icon="ic:outline-home" className="h-8 ml-4 mt-1 text-white text-lg font-extrabold sm:mt-5" />
              </span>
              <h1 className='text-white text-md mt-1 ml-4 sm:mt-5'>Home</h1>
            </li>
            <li className='flex items-center'>
              <span>
                <Icon icon="material-symbols:arrow-insert" className="h-8 ml-4 mt-1 text-white text-lg font-extrabold sm:mt-5" />
              </span>
              <h1 className='text-white text-md mt-1 ml-4 sm:mt-5'>Payouts</h1> 
              <span className='bg-green-800 mt-5 ml-4 px-2 rounded-lg'>new</span>
            </li>
            <li className='flex items-center'>
              <span>
                <Icon icon="material-symbols-light:account-box" className="h-8 ml-4 mt-1 text-white text-lg font-extrabold sm:mt-5" />
              </span>
              <h1 className='text-white text-md mt-1 ml-4 sm:mt-5'>Account Statement</h1>
            </li>
            <li className='flex items-center'>
              <span>
                <Icon icon="bitcoin-icons:contacts-filled" className="h-8 ml-4 mt-1 text-white text-lg font-extrabold sm:mt-5" />
              </span>
              <h1 className='text-white text-md mt-1 ml-4 sm:mt-5'>Contacts</h1>
            </li>
          </ul>

          <ul className={`flex flex-col items-center ${isSmall ? 'block' : 'hidden'}`}>
            <li className='flex items-center'>
              <span>
                <Icon icon="ic:outline-home" className="h-8 ml-4 text-white text-lg font-extrabold" />
              </span>
            </li>
            <li className='flex items-center mt-4'>
              <span>
                <Icon icon="material-symbols:arrow-insert" className="h-8 ml-4 text-white text-lg font-extrabold" />
              </span>
            </li>
            <li className='flex items-center mt-4'>
              <span>
                <Icon icon="material-symbols-light:account-box" className="h-8 ml-4 text-white text-lg font-extrabold" />
              </span>
            </li>
            <li className='flex items-center mt-4'>
              <span>
                <Icon icon="bitcoin-icons:contacts-filled" className="h-8 ml-4 text-white text-lg font-extrabold" />
              </span>
            </li>
          </ul>
        </div>

<div>
    <hr className='mt-9 mb-4'/>
</div>
        <div className={`flex flex-col items-start ${isSmall ? 'mt-4' : 'mt-0'}`}>
          <ul className={`${isSmall ? 'hidden' : 'block'}`}>
            <li className='flex items-center'>
              <span>
                <Icon icon="mdi:shop-outline"  className="h-8 ml-4 mt-1 text-white text-lg font-extrabold sm:mt-5" />
              </span>
              <h1 className='text-white text-md mt-1 ml-4 sm:mt-5'>Vendor Payments</h1>
            </li>
            <li className='flex items-center'>
              <span>
                <Icon icon="ph:stamp" className="h-8 ml-4 mt-1 text-white text-lg font-extrabold sm:mt-5" />
              </span>
              <h1 className='text-white text-md mt-1 ml-4 sm:mt-5'>Tax payments</h1> 
            </li>
            <li className='flex items-center'>
              <span>
                <Icon  icon="uil:message"  className="h-8 ml-4 mt-1 text-white text-lg font-extrabold sm:mt-5" />
              </span>
              <h1 className='text-white text-md mt-1 ml-4 sm:mt-5'>Payout Links</h1>
            </li>
            <li className='flex items-center'>
              <span>
                <Icon icon="solar:letter-opened-bold"  className="h-8 ml-4 mt-1 text-white text-lg font-extrabold sm:mt-5" />
              </span>
              <h1 className='text-white text-md mt-1 ml-4 sm:mt-5'>Payrolls</h1>
            </li>
            <li className='flex items-center'>
              <span>
                <Icon icon="oui:app-reporting" className="h-8 ml-4 mt-1 text-white text-lg font-extrabold sm:mt-5" />
              </span>
              <h1 className='text-white text-md mt-1 ml-4 sm:mt-5'>Reports</h1>
            </li>
          </ul>

          <ul className={`flex flex-col items-center ${isSmall ? 'block' : 'hidden'}`}>
            <li className='flex items-center'>
              <span>
                <Icon icon="mdi:shop-outline"  className="h-8 ml-4 text-white text-lg font-extrabold" />
              </span>
            </li>
            <li className='flex items-center mt-4'>
              <span>
                <Icon icon="ph:stamp"  className="h-8 ml-4 text-white text-lg font-extrabold" />
              </span>
            </li>
            <li className='flex items-center mt-4'>
              <span>
                <Icon icon="uil:message"  className="h-8 ml-4 text-white text-lg font-extrabold" />
              </span>
            </li>
            <li className='flex items-center mt-4'>
              <span>
                <Icon icon="solar:letter-opened-bold"  className="h-8 ml-4 text-white text-lg font-extrabold" />
              </span>
            </li>
            <li className='flex items-center mt-4'>
              <span>
                <Icon icon="oui:app-reporting" className="h-8 ml-4 text-white text-lg font-extrabold" />
              </span>
            </li>
          </ul>
        </div>



        {!isSmall && (
          <div className='flex mt-40 ml-4 items-center'>
            <h1 className='text-white'>Getrazorpayx</h1>
            <Icon icon="ic:outline-apple"  className="h-8 ml-4 text-white text-2xl font-extrabold" />
            <Icon icon="ion:logo-google-playstore" className="h-8 ml-4 text-white text-2xl font-extrabold" />
          </div>
        )}
      </nav>
    </div>
  );
}
