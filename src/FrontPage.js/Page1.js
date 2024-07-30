import React from "react";
import { Icon } from "@iconify/react";
export default function Page1() {
  return (
    <div className="bg-light pt-0">
      <div className="mx-28">
        <div className="flex">
    <div className="w-11/12"></div>

    <div className="mr-auto">
    <ul className="flex mr-auto">
            <li className="flex items-center bg-final text-white px-2">
              <h1 className="text-white text-sm  ml-3 "> 10</h1>
              <span>
                <Icon
                  icon="gravity-ui:triangle-down-fill"
                  className="h-8 mt-1 ml-2 text-white text-sm font-extrabold"
                />
              </span>
            </li>
            <li className="flex items-center">
              <h1 className="text-white text-sm mt-1 ml-4 ">Rows/Page</h1>
            </li>
          </ul>

    </div>



          
        </div>
        <div className="flex text-white mt-40 pb-20">
        <div className="w-11/12"></div>
        <div className="mr-auto">
   <button className="flex bg-violet-400 rounded-lg px-2 py-2"> 
     <span className="rounded-2xl text-sm bg-violet-300 px-2">
               x
              </span>
              <h1 className='text-white text-sm ml-2 '>Need Help?</h1></button>

    </div>

        </div>
      </div>
    </div>
  );
}
