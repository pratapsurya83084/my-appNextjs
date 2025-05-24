"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Expert-Led Instruction",
    description:
      "Learn from industry professionals with years of experience in performance, composition, and production. Our instructors are passionate educators who tailor lessons to your skill level and musical goals.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        Expert-Led Instruction
      </div>
    ),
  },
  {
    title: "Structured Curriculum",
    description:
      "Follow a well-organized, step-by-step curriculum that ensures you build foundational skills while progressing to advanced techniques. Ideal for beginners to pros.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
        Structured Curriculum
      </div>
    ),
  },
  {
    title: "Personalized Feedback",
    description:
      "Get one-on-one guidance and performance reviews tailored to your progress. Improve your skills faster with constructive feedback from expert mentors.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        Personalized Feedback
      </div>
    ),
  },
  {
    title: "Performance Opportunities",
    description:
      "Showcase your talent through live recitals, recordings, and online sessions. Gain confidence and experience by performing in front of real audiences.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pink-500 to-rose-500 text-white">
        Performance Opportunities
      </div>
    ),
  },
  {
    title: "Modern Tools & Techniques",
    description:
      "Learn how to use modern music production software, DAWs, and recording techniques to complement your traditional music skills.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-sky-600 text-white">
        Modern Tools & Techniques
      </div>
    ),
  },
  {
    title: "Flexible Learning Options",
    description:
      "Access lessons online or in-person to fit your schedule. We offer both group and private lessons to suit your learning preferences.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        Flexible Learning Options
      </div>
    ),
  },
];


export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-">
        <h1 className="text-center text-4xl font-bold bg-gray-900 p-10 dark:bg-grid-white">Why Choose</h1>
      <StickyScroll content={content} />
    </div>
  );
}
