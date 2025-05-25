import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const Herosection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
       <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1
        className="mt-36 sm:mt-32 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >Master the art of music</h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
  Join thousands of students learning from expert instructors through
  structured courses, interactive lessons, and real-world techniques.
  Whether you&rsquo;re a beginner or refining your skills, our platform helps
  you grow your passion for music.
</p>

        <div className="mt-4">
      <Button
        // borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <Link href="/courses">Explore Courses </Link>
      </Button>
    </div>
      </div>
     
    </div>
  );
};

export default Herosection;
