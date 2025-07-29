import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import tirmare_jpg from '../assets/images/file.jpg'

const allTestimonials = [
  {
    quote:
      "Rushikesh demonstrated strong dedication and practical thinking during the mini project. A sincere and capable student.",
    name: "Prof. H. M. Tirmare",
    role: "Mini Project Guide, Department of Computer Engineering",
    avatar: tirmare_jpg,
  },
  {
    quote:
      "It was great working with Rushikesh during the hackathon. He handled both frontend and backend challenges confidently.",
    name: "Omkar Kumbhar",
    role: "Hackathon Teammate",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFcj1VS4riyAA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718309590677?e=1756339200&v=beta&t=VCMey1Ht-mDePj2QDBYAYHomX0zljTmFQ99uvsFXxJs",
  },
  {
    quote:
      "Rushikesh shows great potential in engineering real-world solutions. His involvement in the major project was commendable.",
    name: "Prof. C. J. Awati",
    role: "Major Project Mentor",
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQHqUVhqUsFtUw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1604412317536?e=1756339200&v=beta&t=-BR8MVhZLdqO-pZ2ciJ8YMAqrvNLVHUg66ekE1vDOwg",
  },
  {
    quote:
      "Collaborating with Rushikesh was smooth and effective. His ability to debug and think clearly under pressure stood out.",
    name: "Dhiraj Patil",
    role: "Project Teammate",
    avatar: "https://i.pravatar.cc/40?img=14",
  },
  {
    quote:
      "Rushikesh was a dedicated and punctual intern. He delivered all assigned tasks with quality and professionalism.",
    name: "Vault of Code",
    role: "Internship Organization",
    avatar: "https://diy-assets.classplus.co/_next/image?url=https://ali-cdn-diy-public.classplus.co/prod/Screenshot%202023-07-03%20195329_1699366388489.png&w=1920&q=75",
  },
];


const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState(allTestimonials);
  const [, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (mobile) {
        const shuffled = [...allTestimonials].sort(() => 0.5 - Math.random());
        setTestimonials(shuffled.slice(0, 3));
      } else {
        setTestimonials(allTestimonials);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section className="py-20 px-4 sm:px-12 lg:px-24 overflow-x-hidden">
      <div className="flex justify-center">
        <p className="relative w-fit px-3 py-[2px] rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
          Testimonials
        </p>
      </div>

      <h2 className="text-3xl sm:text-4xl font-semibold mb-16 text-center text-gray-800 dark:text-white">
        I&apos;ll stay chill and let my fans spill the tea! ☕🔥
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 w-full sm:w-[45%] lg:w-[30%] flex flex-col justify-between"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm">
              “{testimonial.quote}”
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-gray-900 dark:text-white text-sm font-semibold">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
