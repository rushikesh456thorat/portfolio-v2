import React from 'react';
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { LayoutGrid, CalendarDays, Clock } from "lucide-react";


const Blog = () => {
 
  const allBlogs = Object.values({});
  const currentBlogs = allBlogs; 

  return (
    <>
      <Navbar />
      <section className="min-h-screen relative overflow-hidden py-8 sm:py-16 bg-transparent flex flex-col">
        <div className="mt-5 flex flex-col lg:flex-row justify-between z-[2] px-4 sm:px-8 md:px-16 lg:px-20 items-center lg:items-start">
          <div className="flex flex-col w-full lg:w-[50%] gap-4 text-center lg:text-left">
            <h1 className="hero-font font-semibold text-4xl sm:text-5xl">Blog</h1>
            <p className="text-gray-600 dark:text-gray-200 text-base sm:text-lg">
              This is where I share my latest discoveries, delve into new
              concepts, and reflect on topics that are currently shaping my
              perspective. Each post offers insights from my ongoing learning
              journey.
            </p>
          </div>
          <DotLottieReact
            src={"/Learning.lottie"}
            loop
            autoplay
            className="h-[200px] sm:h-[250px] lg:h-[300px] w-full sm:w-[400px] md:w-[500px] lg:w-[600px] mt-8 lg:mt-0"
          />
        </div>

        <div className="flex items-center gap-2 px-4 sm:px-8 md:px-16 lg:px-20 mt-8 sm:mt-[-30px]">
          <LayoutGrid className="w-4 h-4" />
          <span className="font-semibold text-lg">Explore All</span>
        </div>

        <div className="px-4 sm:px-8 md:px-20 lg:px-28 mt-6 space-y-6 w-full max-w-[1000px] mx-auto">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => (
              <div
                key={blog.title} // Assuming title is unique, or add an 'id' to your blog objects
                className="flex flex-col md:flex-row gap-6 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md bg-white dark:bg-black p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full md:w-[260px] h-[200px] md:h-[160px] object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white hero-font">
                      {blog.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm sm:text-base">
                      {/* Accessing the description from the first section's content array or a top-level 'description' */}
                      {blog.description || (blog.sections && blog.sections.length > 0 && blog.sections[0].content && blog.sections[0].content.join(' '))}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mt-4 text-gray-600 dark:text-gray-400 items-center">
                    {blog.date && (
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {blog.date}
                      </div>
                    )}
                    {blog.readTime && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.readTime}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 flex flex-col items-center justify-center bg-white dark:bg-black rounded-xl shadow-lg border border-gray-300 dark:border-gray-700">
              <DotLottieReact
                src={"/coming soon.lottie"} 
                loop
                autoplay
                className="h-[150px] w-[150px] mb-4"
              />
              <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl font-medium">
                I'm brewing some fresh content! New blogs coming soon...
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                Stay tuned for exciting insights and discoveries!
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;