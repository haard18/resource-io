import { HoverEffect } from "./ui/card-hover-effect";

import { projects } from "../assets/projects";

export function CardHoverEffectDemo() {
  return (
    <div className="mx-auto px-8 w-full bg-gradient-to-r from-black via-gray-900 to-black">
      <HoverEffect items={projects} />
    </div>


  );
}

