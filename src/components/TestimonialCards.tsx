"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The Music Instructor Academy completely transformed my teaching career. I learned how to engage students with creative methods and advanced techniques that I never imagined before.",
    name: "Emily Johnson",
    title: "Piano Instructor & Academy Graduate",
  },
  {
    quote:
      "Thanks to Jhon, I now have a structured way to teach even the most complex concepts to beginners. Their pedagogy and support system are truly world-class.",
    name: "Carlos Rivera",
    title: "Guitar Educator & Performer",
  },
  {
    quote:
      "This academy helped me grow not only as a vocalist but also as a mentor. The curriculum is designed to nurture both musicality and teaching confidence.",
    name: "Samantha Lee",
    title: "Vocal Coach & Vocal Techniques Specialist",
  },
  {
    quote:
      "Joining the Music Instructor Academy was the best decision of my professional journey. The faculty is incredibly supportive and the community is inspiring.",
    name: "David Kim",
    title: "Drum Instructor & Rhythm Trainer",
  },
  {
    quote:
      "Before Jhon, I was a performer. After completing the program, I became a mentor. The academy gave me the tools to inspire the next generation of musicians.",
    name: "Rachel Thompson",
    title: "Violinist & Music Theory Educator",
  },
];


export function TestimonialsCards() {
  return (
<div className="h-[40rem] rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden"
     style={{
       backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 5px),
                         linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 5px)`,
       backgroundSize: '40px 40px'
     }}>
  <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 txet-center">What Our Musicians Say</h2>
  <InfiniteMovingCards
    items={testimonials}
    direction="right"
    speed="slow"
  />
</div>


  );
}


