"use client";
import { AnimatedTooltip } from "../Components/ui/animated-tooltip";
import dev from "../assets/images/dev.jpeg";
import dhairya from "../assets/images/dhairya.jpeg";
import haard from "../assets/images/Haard.jpeg";
import mandar from "../assets/images/mandar.jpeg";

const people = [
  {
    id: 1,
    name: "Dev Patil",
    designation: "Frontend Wizard",
    image: dev,
  },
  {
    id: 2,
    name: "Dhairya Chawda",
    designation: "Ui/UX Designer",
    image: dhairya,
  },
  {
    id: 3,
    name: "Haard Solanki",
    designation: "Prodigy",
    image: haard,
  },
  {
    id: 4,
    name: "Mandar Nikam",
    designation: "Ui/UX Designer",
    image: mandar,
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}