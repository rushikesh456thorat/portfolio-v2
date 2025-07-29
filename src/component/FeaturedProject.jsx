import React from "react";
import Notrious from "../assets/images/notrious.png";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const FeaturedProject = () => {
  return (
    <>
      <div className="max-w-5xl w-full px-4 mx-auto flex flex-col gap-6">
        <div className="text-gray-500 font-semibold">Project</div>

        <div className="w-full">
          <img
            className="rounded-2xl w-full"
            src={Notrious}
            alt="Notrious UI"
          />
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-2 dark:text-white">
            Auto-generate product pages with AI
          </h1>
          <p className="text-[16px] leading-relaxed font-thin w-full lg:text-gray-800 dark:text-gray-300">
            A powerful AI tool that helps Shopify sellers instantly turn any
            product link into a polished product page. With just a URL from
            sites like Amazon, Flipkart, or Shopify, Notrious extracts key
            product info and visuals, then formats them into customizable
            templates ready to publish. Sellers can preview, tweak, and import
            directly into their store—no manual work or design skills needed.
          </p>
        </div>
        <div>
          <Link
            className="text-blue-500 flex items-center gap-2 w-fit hover:text-blue-700 font-semibold"
            to="/project/notrious"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
