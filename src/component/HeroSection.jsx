import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section
        id="hero-section"
        className="relative flex flex-col px-4 sm:px-20 overflow-hidden  dark:text-[#bebebe]"
      >
        <div
          className="absolute z-0 pointer-events-none blur-3xl rounded-full dark:opacity-10"
          style={{
            width: "600px",
            height: "600px",
            top: "20%",
            left: "20%",
            background:
              "radial-gradient(circle at center, rgba(173,216,230,0.52) 0%, rgba(173,216,230,0.52) 60%, transparent 100%)",
            animation: "randomMove 40s ease-in-out infinite",
          }}
        />
        <div className="mt-5 lg:mt-10 flex flex-col lg:flex-row md:justify-between lg:items-center justify-between z-[2]">
          <div className="flex flex-col order-2 lg:order-1">
            <p className="leading-[28px] mb-[10px]">
              <span className="text-xl ">👋</span>
              <span className="text-2xl font-sans  font-thin text-[#8A8888]">
                Hey! I&apos;m Rushikesh Thorat
              </span>
            </p>
            <br />
            <p className="text-[35px] md:text-[60px] lg:text-[70px] leading-[1.5] lg:leading-[1] hero-font font-semibold">
              <span className="font-[100]">I</span>{" "}
              <span className="inline-block animate-build">build</span>,{" "}<br className="block sm:hidden"/>
              <span className="inline-block animate-troubleshoot">
                troubleshoot
              </span>
            </p>
            <br />
            <p className="leading-[0] lg:leading-[1] hero-font text-[35px] md:text-[60px] lg:text-[70px]">
              & continuously{" "}
            </p>
            <br />
            <p className="leading-[1.4] lg:leading-[1] hero-font text-[35px] md:text-[60px] lg:text-[70px] font-semibold">
              <span className="inline-block animate-evolve">evolve...</span>
            </p>
            <p className="font-roboto leading-[1.5] lg:leading-[1.1] text-lg text-gray-500 dark:text-[#8e8e8e] mt-4 lg:pb-5">
              ... making ideas come alive, line by line.
            </p>
          </div>
          <div className="order-1 lg:order-2 mb-8 lg:mb-0">
            <DotLottieReact
              src="/Typing Guy.lottie"
              loop
              autoplay
              className="h-[200px] absolute top-[25px] right-[20px] sm:top-[25px] w-[200px] md:h-[350px] md:w-[350px] md:right-[5px] md:top-[100px] lg:h-[450px] lg:w-[450px] xl:h-[550px] xl:w-[550px] lg:top-[20px]  lg:absolute xl:right-[120px] lg:right-[50px] xl:top-[-20px]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row border-t z-[2] border-gray-200 items-start gap-8 justify-between py-8">
          <div className="w-full lg:w-[50%] flex flex-col gap-5 lg:pr-4">
            <p className="text-lg leading-relaxed font-thin  lg:text-gray-500  dark:text-gray-300">
              A developer turned product builder who traded templates for tools.
              I now craft smart, scalable systems that feel fast and intuitive.
              I believe good UX starts with "what if we just build it better?"
            </p>
            <p>
              Let&apos;s connect:{" "}
              <Link to="mailto:connect@rushikeshthorat.dev" className="hover:underline">
                <strong className="dark:text-white">
                  connect@rushikeshthorat.dev
                </strong>
              </Link>
            </p>
          </div>
          <div className="w-full  lg:block lg:w-[50%] lg:pl-4 mt-8  lg:mt-0">
            <p className="text-lg leading-relaxed lg:text-gray-500 font-thin dark:text-gray-300">
              With{" "}
              <strong className="text-black dark:text-white font-semibold">
                4+ years
              </strong>{" "}
              of shipping real-world apps across{" "}
              <strong className="text-black dark:text-white font-semibold">
                AI, automation
              </strong>
              , and e-commerce. I blend logic with creativity, always aiming to
              make tech feel human. Currently, I build self-serve AI tools and
              product pages that work — and wow.
            </p>
            <div className="mt-5 hidden xl:block">
              <svg
                width="24"
                height="44"
                viewBox="0 0 24 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="12"
                  y1="0"
                  x2="12"
                  y2="56"
                  stroke="#999999"
                  strokeWidth="2"
                />
                <polygon points="6,56 18,56 12,64" fill="#999999" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default HeroSection;
