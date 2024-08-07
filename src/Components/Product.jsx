// import React from "react";
// import Button from "./Button";

// function Product({ val,mover,count }) {
//   return (
//     <div className="w-full h-[23rem] py-20 text-white">
//       <div  onMouseEnter={()=>{mover(count)}}     className="max-w-screen-xl  mx-auto flex items-center justify-between ">
//         <h1 className="text-6xl capitalize font-medium ">{val.title}</h1>
//         <div className="dets w-1/3">
//           <p className="mb-10">{val.description}</p>
//           <div className="flex items-center gap-5">
//             {val.live && <Button />}
//             {val.case && <Button title="Case Study" />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;

import React from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  return (
    <div className="w-full h-auto md:h-[23rem] py-10 md:py-20 text-white">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8"
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl capitalize font-medium mb-4 md:mb-0">
          {val.title}
        </h1>
        <div className="dets md:w-1/2 lg:w-1/3 text-center md:text-left">
          <p className="mb-6 md:mb-10 text-sm md:text-base lg:text-lg">
            {val.description}
          </p>
          <div className="flex justify-center md:justify-start items-center gap-3 md:gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
