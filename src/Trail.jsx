import React from "react";
import "./index.css";
import Drop from "./drop";
import DropdownMenu from "./ritik";

function Trail3(){
    return(
        <>
             <div className="flex h-full lg:pr-16 sm:pr-4  bg-white sm:bg-[#E3D5CA] overflow-x-hidden ">
        <div className="hidden sm:grid md:w-1/5 bg-[#0B0808CF] ">
            <div className="   bg-[#0B0808CF] flex flex-col justify-around items-center">
            {/* <button className="px-8 py-2 my-3 text-white bg-[#DAE8E5]">LEAVE</button> */}
            <button className="w-4/5 px-8 py-2  text-white bg-[#5983D3]">LEAVE</button>
            <button className="w-4/5 px-8 py-2 text-white">Balance Leaves</button>
            <button className="w-4/5 px-8 py-2 text-white">Apply for leaves</button>
            <button className="w-4/5 px-8 py-2 text-white">Manage Leave</button>
            <button className="w-4/5 px-8 py-2 text-white">View Status</button>
            </div>
            <div className="  bg-[#0B0808CF]">
                
            </div>
        </div>
        <div className="w-[100vw]  sm:w-4/5 mx-4">
            <div className="h-[6vh] lg:h-1/5 sm:h-1/6 ">
                <div className="invisible font-bold md:pl-4 lg:py-8 sm:visible md:py-6 sm:py-4 lg:text-4xl md:text-3xl sm:text-xl h-1/2 bold justify-left">
                <span className="visible sm:hidden"><button className="my-2 mb-8 text-white bg-blue-900 "> <DropdownMenu/></button></span>
                    <span className="flex flex-col-reverse collapse sm:visible">YOU HAVE 3 LEAVES LEFT THIS MONTHS </span>
                </div>
                
                <div className="flex-col hidden sm:pl-1 sm:flex lg:pl-4 md:pl-2 md:pt-4 sm:pt-4 lg:text-3xl md:text-2xl sm:flex-row sm:text-xl h-1/2 ">
                    <button className="font-bold lg:pr-16 md:pr-4 sm:pr-4">Apply for Leaves</button>
                    <button className="font-bold lg:pr-16 md:pr-4 sm:pr-4">Manage Leaves</button>
                    <button className="font-bold">View Status </button>
                    <div><hr/></div>
                    {/* <div className="h-[10vh] lg:h-1/4 sm:h-1/5 ">
            <div className="visible font-bold md:pl-4 lg:py-8 md:py-6 sm:py-4 sm:invisible lg:text-4xl md:text-3xl sm:text-xl h-1/2 bold justify-left">Ritik </div></div> */}
                </div>
            </div>
           
            <div className="py-2 pt-3 bg-white sm:px-6 sm:h-5/7 sm:ml-4 h-[96vh] my-6 sm:my-2">        
                <div className="py-2 text-2xl font-bold sm:py-1">Designation</div>
                    <input type="text"className="w-full py-2 bg-[#DAE8E5]" ></input> 
                <div className="w-full">
                   <div className="flex flex-col py-2 md:flex-row">
                       <div className="pt-3 md:pt-9 md:w-1/2">
                       <button className="lg:px-8 sm:px-1 py-3 md:w-2/5 w-1/2  sm:text-sm  text-white bg-[#5983D3] font-bold">FULL DAY</button>
                       <button className="lg:px-8 sm:px-1 py-3 md:w-2/5 sm:text-sm w-1/2  text-black bg-[#DAE8E5] font-bold">HALF DAY</button>
                        </div> 
                       <div className="md:w-1/2">
                                    <div className="py-1 font-bold lg:text-2xl sm:text-xl ">No. of Days Leave required</div>
                                    <input type="text"className="w-full py-2 bg-[#DAE8E5]" ></input> 
                       </div>
                    </div>

                    <div className="flex py-2 ">
                       <div className="w-1/2 mx-1">
                                    <div className="py-1 text-2xl font-bold">Start Date</div>
                                    <input type="date"className="w-full py-2 bg-[#DAE8E5]" ></input> 
                        </div> 
                       <div className="w-1/2">
                                    <div className="py-1 text-2xl font-bold">End date</div>
                                    <input type="date"className="w-full py-2 bg-[#DAE8E5]" ></input> 
                       </div>
                    </div>
                    <div className="py-1 text-2xl font-bold">Reason for leave</div>
                    <input type="text"className="w-full py-2 bg-[#DAE8E5] h-36 my-2" ></input> 
                    <div className="flex flex-col-reverse justify-center py-2 mx-3 sm:flex-row sm:justify-end">
                    <button className="invisible px-2 py-3 text-black bg-white rounded sm:px-6 md:px-10 sm:px-8 sm:visible ">Reset</button>
                    <button className="px-2 py-3 text-white bg-blue-900 rounded sm:px-6 sm:bg-black md:px-10 sm:px-8">Apply</button>
                    </div>
                </div>     
         </div>
        </div>
    </div>
        </>
    )
   

}
export default Trail3;


