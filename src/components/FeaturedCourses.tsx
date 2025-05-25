"use client";
import React from "react";
import CourseData from "../data/music_course.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

// interface Course {
//   id: number;
//   title: string;
//   slug: string;
//   description: string;
//   price: number;
//   instructor: string;
//   isFeatured: boolean;
//   // "image": "/images/courses/guitar-beginner.jpg"
// }

const FeaturedCourses = () => {
  const featuredCourses = CourseData.courses.filter(
    (course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900 ">
      <div>
        <div className="text-center">
          <h2 className="text-green-700 font-bold text-xl text-center">
            Featured Courses
          </h2>
          <p className="text-center font-bold text-3xl mt-2">
            Learn With the Best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course) => {
            return (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-gray-500 p-3">{course.description}</p>

                    <Link
                      href={`/music-production`}
                      className="mt-4 bg-white text-black p-1 px-2 rounded "
                    >
                      Learn More
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center   mt-20  ">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white
hover:bg-gray-100 transition duration-200"
        >
          <button>View All Courses</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
