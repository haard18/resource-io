import { HoverEffect } from "./ui/card-hover-effect";

import { pyqs } from "../assets/pyq";


export function PYQ() {
  return (
    <div className="mx-auto px-8 w-full bg-gradient-to-r from-black via-gray-900 to-black">
      <h1 className="text-3xl text-center text-white pt-3">
        Previous Year Questions Papers
      </h1>
      <HoverEffect items={pyqs} />


    </div>


  );
}

