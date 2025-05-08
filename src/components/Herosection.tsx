import Link from "next/link";
import React from "react";

const Herosection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p--4 relative z-10 w-full text-center">
        <h1>Master the art of music</h1>
        <p>
          Join thousands of students learning from expert instructors through
          structured courses, interactive lessons, and real-world techniques.
          Whether you're a beginner or refining your skills, our platform helps
          you grow your passion for music.
        </p>
        <div className="mt-4 ">
          <Link href="">Explore Courses </Link>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
