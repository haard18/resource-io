"use client";
import { AnimatedTooltip } from "../Components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Dev Patil",
    designation: "Frontend Wizard",
    image:
      "src/assets/images/dev.jpeg",
  },
  {
    id: 2,
    name: "Dhairya Chawda",
    designation: "Ui/UX Designer",
    image:
      "src/assets/images/dhairya.jpeg",
  },
  {
    id: 3,
    name: "Haard Solanki",
    designation: "Prodigy",
    image:
      "src/assets/images/Haard.jpeg",
  },
  {
    id:4,
    name:"Mandar Nikam",
    designation:"Bhau",
    image:"src/assets/images/mandar.jpeg"
  }

];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
