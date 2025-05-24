'use client'
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";


export const projects = [
  {
    title: "Sarah Thompson",
    description:
      "A classically trained violinist with over 15 years of experience teaching students of all ages. Specializes in orchestral and solo performance techniques.",
    link: "https://sarahviolin.com",
  },
  {
    title: "Jason Lee",
    description:
      "A professional guitarist and Berklee graduate focusing on modern rock, jazz, and improvisation. Offers personalized lessons for beginner to advanced students.",
    link: "https://jasonleemusic.com",
  },
  {
    title: "Emily Rivera",
    description:
      "A passionate vocal coach and opera singer who helps students build strong vocal foundations and confidence in performance.",
    link: "https://emilyriveravoice.com",
  },
  {
    title: "Marcus Bennett",
    description:
      "A seasoned drummer known for high-energy lessons and expertise in funk, jazz, and studio recording techniques.",
    link: "https://drumwithmarcus.com",
  },
  {
    title: "Natalie Kim",
    description:
      "A piano instructor with a modern approach, integrating music theory, ear training, and digital tools to make learning fun and effective.",
    link: "https://nataliekimpiano.com",
  },
  {
    title: "Daniel Cruz",
    description:
      "A music producer and electronic music instructor who teaches beat-making, sound design, and music production using Ableton Live.",
    link: "https://danielcruzmusic.com",
  },
];

export const CardHoverEffectDemo = () => {
  return (
    <div className="p- md:p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 p-9">
        <div className="p-10 text-center">
          <h2 className=" text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="">Enhance Your Musical Journey</p>
        </div>
        <div className="mt-4 md:mt-10">
   <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>

        </div>

        <div className="mt-10 text-center ">
          <Link href={"/"} className="bg-white text-black p-2">
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};
