import React from "react";
import { PiArrowBendRightUpLight } from "react-icons/pi";
function Button({title="Get Started"}) {
  return (
    <div className="   flex items-center justify-between min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full ">
      <span className="text-xs font-medium">{title}</span>
      <PiArrowBendRightUpLight />
    </div>
  );
}

export default Button;
