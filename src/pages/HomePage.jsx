import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import FeaturedProject from "../component/FeaturedProject";
import TestimonialSection from "../component/TestimonialSection";
import  Footer  from "../component/Footer";


const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="relative overflow-hidden py-20 px-4 sm:px-16 lg:px-28 bg-transparent flex flex-col items-center">
        <div className="flex animate-marquee-track  gap-10 sm:gap-16 w-max">
          {/* One full loop of content */}
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex gap-10 select-none  sm:gap-16">
              <span className="text-[2.5rem] sm:text-[5rem] lg:text-[8rem] hero-font font-[550] text-gray-600 dark:text-gray-400">
                Featured Projects
              </span>
              <span className="text-[2.5rem] sm:text-[5rem] lg:text-[8rem] hero-font font-[550] text-transparent stroke-text dark:stroke-text-dark">
                Featured Projects
              </span>
              <span className="text-[2.5rem] sm:text-[5rem] lg:text-[8rem] hero-font font-[550] text-gray-600 dark:text-gray-400">
                Featured Projects
              </span>
              <span className="text-[2.5rem] sm:text-[5rem] lg:text-[8rem] hero-font font-[550] text-transparent stroke-text dark:stroke-text-dark">
                Featured Projects
              </span>
            </div>
          ))}
        </div>
        <FeaturedProject />
      </section>
      <TestimonialSection />
      <Footer/>
    </>
  );
};

export default HomePage;
