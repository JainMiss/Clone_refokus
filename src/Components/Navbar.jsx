// import React from "react";
// import Button from "./Button";

// function Navbar() {
//   return (
//     <div className="max-w-screen-xl  sm:400px md:max-w-2xl flex items-center p-2 mx-auto justify-between border-b-[1px]">
//       <div className="nleft flex items-center ">
//         <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" />

//         <div className="links flex gap-14 ml-20    ">
//           {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
//             elem.length === 0 ? (
//               <span  key={index}   className="w-[2px] h-7 bg-zinc-700"></span>
//             ) : (
//               <a 
//                key={index}
//                className="text-sm flex items-center gap-1 " href="#">
//                 {index === 1 && (
//                   <span
//                     style={{ boxShadow: "0 0 0.45em #00FF19" }}
//                     className="inline-block w-1 h-1  bg-fuchsia-400 rounded-full  "
//                   ></span>
//                 )}

//                 {elem}
//               </a>
//             )
//           )}
//         </div>
//       </div>
//       <Button/>
//     </div>
//   );
// }

// export default Navbar;


import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl flex items-center p-2 mx-auto justify-between border-b-[1px]">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Logo"
          className="w-20 h-auto sm:w-24"
        />

        <div className="links flex gap-4 ml-4 sm:gap-8 sm:ml-10 md:gap-14 md:ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                className="text-xs sm:text-sm flex items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 bg-fuchsia-400 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
