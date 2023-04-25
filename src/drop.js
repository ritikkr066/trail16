import * as React from 'react';
import { useState } from 'react';
// import 


const Drop = () => {
//  const [foodState,setFoodstate]=useState();
 return (

   <div>

     <select className='grid  justify-center items-center align-middle w-[90vw] px-12 py-4 text-2xl text-black bg-blue-700'>

       <option className='text-xl ' value="Trail5.jsx">Apply For Leaves</option>
       {/* <option value="View Status"></option> */}


       <option  className='text-xl 'value="Trail4.jsx">Manage Leaves</option>

       <option  className='text-xl ' value="View Status">View Status</option>

     </select>

   </div>

 );

};

export default Drop;