import React from 'react';
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx'; 
import { ProjectBlog } from '../blogs/ProjectBlog.js'; 
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen py-8 sm:py-16 bg-transparent flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-20">
        {/* Projects Header */}
        <div className="w-full max-w-4xl text-center mb-12">
          <h1 className="hero-font font-semibold text-4xl sm:text-5xl mb-4">Projects</h1>
          <p className="text-gray-600 dark:text-gray-200 text-base sm:text-lg">
            Welcome to my projects section! This is where I showcase my work, from personal explorations to more extensive applications. Each project highlights my problem-solving approach and technical skills. See how I turn ideas into functional solutions and continuously learn new technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
          {Object.entries(ProjectBlog).map(([key, project]) => (
            <div
              key={project.id || key}
              className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-xl shadow-md bg-white dark:bg-black overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold dark:text-white hero-font mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base flex-grow mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies && project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/project/${key}`}
                  className="text-blue-600 dark:text-blue-400 text-sm font-semibold mt-auto hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
