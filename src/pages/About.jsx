import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import MyPhoto from "../assets/images/me.webp";
import LinkedInIcon from "../component/LinkdInIcon";
import { Mail, Code } from "lucide-react";
import GithubIcon from "../component/GithubIcon";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col w-full items-center px-4 pt-12 pb-20 text-gray-800 dark:text-gray-200 bg-white dark:bg-black transition-colors duration-300">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            className="w-40 h-40 object-cover border-4 border-gray-300 dark:border-gray-700 rounded-full shadow-md"
            src={MyPhoto}
            alt="Rushikesh Thorat"
          />
        </div>

        {/* Intro Text */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
          Hey, I’m Rushikesh 👋
        </h1>
        <p className="text-center text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
          A developer turned product builder — I craft fast, functional tools
          with clean UX and sharp thinking.
        </p>

        {/* About Content */}
        <section className="max-w-3xl w-full text-base sm:text-lg leading-7 text-gray-700 dark:text-gray-300 space-y-8">
          <p>
            My journey into tech started not with a roadmap, but with
            curiosity...
          </p>
          <p>
            Today, I’m building <strong>Notrious</strong> — an AI-powered tool
            that turns product links into Shopify pages...
          </p>
          <p>
            I believe great design starts with understanding, not aesthetics...
          </p>
          <p>
            Outside of code, you’ll find me sketching interfaces, tweaking
            setups...
          </p>
          {/* New paragraph about LeetCode solutions */}
          <p>
            My dedication to problem-solving is also reflected in my competitive
            programming journey, where I've tackled and solved{" "}
            <strong>300+ LeetCode challenges</strong>, honing my algorithmic
            thinking and data structure skills. You can view my{" "}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              resume here
            </a>
            .
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">Some fast facts:</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Big believer in simplicity that scales.</li>
              <li>Love clean, intentional UI with just the right motion.</li>
              <li>Exploring how AI blends into real workflows.</li>
              <li>Always up for building something new — fast.</li>
            </ul>
          </div>
          {/* Technologies Section */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">
              Technologies & Tools I Use
            </h2>
            <ul className="flex flex-wrap gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "MongoDB",
                "Firebase",
                "Git",
                "Figma",
                "Vercel",
              ].map((tech) => (
                <li
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-600"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Exploring Section */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Currently Exploring</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              I’m diving deeper into:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>AI integrations into product workflows</li>
              <li>Serverless architecture with edge functions</li>
              <li>Design systems & motion design in React</li>
            </ul>
          </div>
          {/* Open Source Contributions */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Open Source Contributions
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              I’ve contributed to{" "}
              <a
                href="https://github.com/saadeghi/daisyui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                daisyUI
              </a>
              , a popular Tailwind CSS component library that enhances developer
              productivity and UI consistency. Open source has helped me grow,
              and I enjoy giving back to tools I use in real-world projects.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full mt-16 px-4 sm:px-10 text-center">
          <div className="max-w-4xl mx-auto py-16 backdrop-blur-md bg-white/5 dark:bg-black/5 transition-all duration-300 rounded-2xl">
            {" "}
            {/* Added rounded-2xl for consistency */}
            <h2 className="text-3xl sm:text-4xl font-bold hero-font leading-snug mb-6">
              <span className="block">Code Your Dreams</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-yellow-400 dark:via-pink-500 dark:to-purple-500">
                Let’s Build Something Amazing!
              </span>
            </h2>
            <div className="mt-4 flex flex-col items-center gap-2">
              <a
                href="https://calendar.app.google/hDgdmnXr1JBNtvne7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 text-base font-medium rounded-xl border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform"
              >
                Fix a Meeting
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm text-center leading-snug">
                You’ll get a Google Meet link instantly after booking. If no
                time works, feel free to email me at{" "}
                <a
                  href="mailto:connect@rushikeshthorat.dev"
                  className="underline hover:text-blue-600 dark:hover:text-blue-400"
                >
                  connect@rushikeshthorat.dev
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-6 right-6 z-50 flex flex-row flex-wrap justify-center gap-4 p-3 rounded-full shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700">
        <a
          href="https://github.com/rushikesh456thorat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-200 transform hover:scale-125"
          aria-label="GitHub Profile"
        >
          <GithubIcon size={28} />
        </a>
        <a
          href="https://linkedin.com/in/rushikesh-thorat-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-transform duration-200 transform hover:scale-125"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon size={28} />
        </a>

        <a
          href="https://leetcode.com/u/rushikeshthorat456/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-transform duration-200 transform hover:scale-125"
          aria-label="LeetCode Profile"
        >
          <Code size={28} />
        </a>
        <a
          href="mailto:connect@rushikeshthorat.dev"
          className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-transform duration-200 transform hover:scale-125"
          aria-label="Send me an email"
        >
          <Mail size={28} />
        </a>
      </div>

      <Footer />
    </>
  );
};

export default About;
