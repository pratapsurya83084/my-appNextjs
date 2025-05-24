"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";

export function WavyBackgroundDemo() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex  items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col  items-center justify-center h-full">
    <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold">Meet Our Instructor</h2>
    <p className="text-xl  md:text-2xl text-center py-2">Discover the talented professional who will guide your  musical journey </p>
      <div className="flex flex-row items-center justify-center mb-10 w-full   mt-10">
         <AnimatedTooltipPreview/>
      </div>
      </WavyBackground>
    </div>
  );
}
