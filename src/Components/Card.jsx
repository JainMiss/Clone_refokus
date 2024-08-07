// import React from "react";
//  import {motion} from 'framer-motion'
// import { IoIosArrowRoundForward } from "react-icons/io";


// function Card({ width, start, para ,hover="false"}) {
//   return (
//     <motion.div  whileHover={{backgroundColor: hover==="true" && "#7443ff",padding:"25px"}} 
//       className={`bg-zinc-800  p-5 rounded-xl     ${width}  min-h-[30rem] flex flex-col justify-between `}>
//       <div className="w-full ">
//         <div className="w-full flex justify-between items-center ">
//           <h3>one heading</h3>
//           <IoIosArrowRoundForward />
//         </div>

//         <h1 className="text-3xl font-medium mt-5">Whatever Heading</h1>
//       </div>

//       <div className="down w-full mt-60 ">
//         {start === true && (
//           <>
//             <h1 className="text-6xl font-semibold tracking-tight  leading-none ">
//               Start a Project
//             </h1>
//             <button className=" py-2 px-5 mt-5 rounded-full border-[1px]] border-zinc-50">
//               Contact us
//             </button>
//           </>
//         )}

//         {
//         para === true && (

//           <p className="text-sm text-zinc-500 font-medium ">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </p>



//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default Card;


import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
    whileHover={{backgroundColor: hover==="true" && "#7443ff",padding:"25px"}}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">One Heading</h3>
          <IoIosArrowRoundForward className="text-xl" />
        </div>

        <h1 className="text-2xl md:text-3xl font-medium mt-2 md:mt-5">
          Whatever Heading
        </h1>
      </div>

      <div className="w-full mt-8 md:mt-12">
        {start === true && (
          <>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-none mb-4">
              Start a Project
            </h1>
            <button className="py-2 px-5 rounded-full border border-zinc-50 text-white">
              Contact Us
            </button>
          </>
        )}

        {para === true && (
          <p className="text-sm md:text-base text-zinc-500 font-medium mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
