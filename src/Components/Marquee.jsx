// import React from "react";

// import { motion } from "framer-motion";

// function Marquee({ imagesurls, direction }) {
//   return (
//     <div className="  flex w-full  overflow-hidden ">
//       <motion.div
//         initial={{ x: direction === "left" ? "0" : "-100%" }}
//         animate={{ x: direction === "left" ? "-100%" : "0" }}
//         transition={{ ease: "linear", duration: 15, repeat: Infinity }}
//         className="flex flex-shrink-0 gap-40 py-10 pr-40 "
//       >
//         {imagesurls.map((url, index) => (
//           <img key={index} src={url} className="w-[6vw] flex-shrink-0" />
//         ))}
//       </motion.div>



//       <motion.div
//         initial={{ x: direction === "left" ? "0" : "-100%" }}
//         animate={{ x: direction === "left" ? "-100%" : "0" }}
//         transition={{ ease: "linear", duration: 15, repeat: Infinity }}
//         className="flex flex-shrink-0 gap-40 py-10 pr-40 "
//       >
//         {imagesurls.map((url, index) => (
//           <img key={index} src={url} className="w-[6vw] flex-shrink-0" />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default Marquee;

import React from "react";
import { motion } from "framer-motion";

function Marquee({ imagesurls, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-10 py-10 pr-10"
      >
        {imagesurls.map((url, index) => (
          <img
            key={index}
            src={url}
            className="w-24 h-auto md:w-32 lg:w-40 flex-shrink-0"
            alt={`Logo ${index + 1}`}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-10 py-10 pr-10"
      >
        {imagesurls.map((url, index) => (
          <img
            key={index}
            src={url}
            className="w-24 h-auto md:w-32 lg:w-40 flex-shrink-0"
            alt={`Logo ${index + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
