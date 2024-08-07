// import React from "react";
// import Card from "./Card";

// function Cards() {
//   return (
//     <div className="w-full  ">
//       <div className="max-w-screen-xl mx-auto  py-20  flex gap-2">
//         <Card width={"basis-1/3"} start={false} para={true} />
//         <Card width={"basis-2/3"} start={true} para={true} hover="true" />
//       </div>
//     </div>
//   );
// }

// export default Cards;

import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 px-4 flex flex-col gap-4 md:flex-row md:gap-4">
        <Card width="w-full md:basis-1/3" start={false} para={true} />
        <Card width="w-full md:basis-2/3" start={true} para={true} hover="true" />
      </div>
    </div>
  );
}

export default Cards;
