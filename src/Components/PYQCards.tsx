import { HoverEffect } from "./ui/card-hover-effect";

import { pyqs } from "../assets/pyq";
import { AnimatedTooltipPreview } from "./Tooltip";

export function PYQ() {
  return (
    <div className="mx-auto px-8 w-full bg-gradient-to-r from-black via-gray-900 to-black">
      <HoverEffect items={pyqs} />
      <AnimatedTooltipPreview/>
    </div>


  );
}

