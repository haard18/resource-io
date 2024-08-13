import { HoverEffect } from "./ui/card-hover-effect";

import { pyqs } from "../assets/pyq";

export function CardHoverEffectDemo() {
  return (
    <div className="mx-auto px-8 w-full bg-gradient-to-r from-black via-gray-900 to-black">
      <HoverEffect items={pyqs} />
    </div>


  );
}

