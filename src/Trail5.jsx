import React from "react";
import "./index.css"
import{FaCalendarAlt} from "react-icons/fa"

function Trail5(){
    return(
        <>
             <div className="sm:flex h-full md:pr-2  lg:pr-12  bg-white sm:bg-[#E3D5CA] overflow-x-hidden ">
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
        <div className="w-[94vw]  sm:w-4/5 p-4 ">
            <div className="h-[14vh] lg:h-1/5 sm:h-1/6  ">
                <div className="invisible font-bold md:pl-4 lg:py-8 sm:visible md:py-6 sm:py-4 lg:text-4xl md:text-3xl sm:text-xl h-1/2 bold justify-left">
                    {/* <span className="flex flex-col-reverse invisible sm:visible">YOU HAVE 3 LEAVES LEFT THIS MONTHS </span> */}
                    <span> <div className="h-1/4">
                {/* <div className="py-8 pl-4 text-4xl h-1/2 bold justify-left"></div> */}
                <div className="flex flex-col px-1 pt-6 text-xl sm:pt-16 sm:flex-row sm:text-2xl lg:text-3xl h-1/2 ">
                    <button className="py-2 font-bold sm:pr-4 lg:pr-20 md:pr-12">Apply for Leaves</button>
                    <button className="py-2 font-bold sm:pr-4 lg:pr-20 md:pr-12">Manage Leaves</button>
                    <button className="font-bold">View Status </button>
                    <div><hr/></div>
                </div>
            </div></span>
                <span className="visible sm:invisible"><button className="px-[44%] py-3 my-2 bg-blue-900  text-white  mb-16">Manage Leave</button></span></div>
                
               
            </div>
           
            <div className="py-2 bg-white sm:px-2 md:px-6 sm:h-5/7 ml-4 h-[96vh] my-6 sm:my-2">        
            <div className="grid md:px-4 px-2 py-2  pb-10  sm:bg-white bg-[#E3D5CA] lg:mx-8 md:mx-4 sm:mx-2 sm:px-1 pb-auto h-5/8">  
            <div className="py-4 text-2xl font-bold text-center sm:py-8 sm:text-4xl md:text-left"> Leaves you applied</div>
           <div  className="flex ">
            <span  className="pr-4 text-xl sm:text-2xl md:text-3xl "><FaCalendarAlt/> </span>
            <span className="text-xl font-bold sm:text-3xl">Tuesday,june 25 to Friday june 28 (3 days)</span>
            </div>
           
            <div className="px-2 py-8 lg:pl-4 lg:10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus architecto dolore corporis similique officia enim quo consequuntur cumque quis laboriosam veritatis optio itaque dolorem, exercitationem atque, laborum qui veniam natus.</div>
            <div className="flex flex-col-reverse justify-start py-2 mx-1 md:flex-row">
                    <button className="px-3 py-3 mb-2 text-white bg-black rounded sm:px-12 md:mr-10">Cancel leave</button>
                    <button className="sm:px-12  px-3 py-3 mb-2 text-white bg-[#5983D3] rounded ">Reschedule</button>
             </div>  
            </div> 
         </div>
        </div>
    </div>
        </>
    )
   

}
export default Trail5;


