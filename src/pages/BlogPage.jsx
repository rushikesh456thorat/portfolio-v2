// src/pages/BlogPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../blogs/blogPosts";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Markdown from "react-markdown";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Import the SyntaxHighlighter component and a few themes
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  duotoneLight,
  duotoneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  // Initial state check to see if the 'dark' class is present on the root element.
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Helper component to render code blocks with syntax highlighting
  const CodeBlock = ({ language, value }) => {
    // Dynamically select the theme based on the component's state
    const theme = isDarkMode ? duotoneDark : duotoneLight;
    const bgColor = isDarkMode ? "#2d2d2d" : "#f8f8f8";

    return (
      <div
        className="rounded-lg p-4 my-6 overflow-x-auto"
        style={{ backgroundColor: bgColor }}
      >
        <SyntaxHighlighter
          language={language}
          style={theme}
          customStyle={{
            backgroundColor: "transparent",
            margin: 0,
            padding: 0,
            fontSize: "0.875rem", // text-sm
          }}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    );
  };

  // A component to render the dynamic content based on its type.
  const renderContent = (content, index) => {
    switch (content.type) {
      case "heading":{
        const HeadingTag = `h${content.level}`;
        return (
          <HeadingTag
            key={index}
            className={`mt-8 mb-4 text-${content.level + 2}xl font-bold`}
          >
            {content.text}
          </HeadingTag>
        );}
      case "paragraph":
        return (
          <div className="props my-6 prose-img:select-none prose-p:w-full prose-a:text-[#285ff8] text-gray-800 dark:text-gray-300">
            <Markdown key={index}>{content.text}</Markdown>
          </div>
        );
      case "image":
        return (
          <img
            key={index}
            src={content.src}
            alt={content.alt}
            className="my-6 rounded-lg shadow-md max-w-full h-auto"
          />
        );
      case "code":
        return (
          <CodeBlock
            key={index}
            language={content.language}
            value={content.code}
          />
        );
      case "list":
        return (
          <ul
            key={index}
            className="list-disc list-inside text-gray-700 dark:text-gray-300 pl-4 my-4"
          >
            {content.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case "blockquote":
        return (
          <blockquote
            key={index}
            className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 my-6"
          >
            <p>"{content.text}"</p>
            {content.author && (
              <p className="mt-2 text-sm font-semibold">— {content.author}</p>
            )}
          </blockquote>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post?.title) {
      document.title = `${post.title} | Rushikesh Thorat Blog`;
    } else {
      document.title = "Blog | Rushikesh Thorat";
    }

    // Use a MutationObserver to listen for changes to the 'class' attribute on the <html> tag.
    // This allows the component's state to automatically update when the theme changes.
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"));
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    // Clean up the observer when the component unmounts.
    return () => observer.disconnect();
  }, [post]);

  if (!post) {
    return (
      <div className="text-center mt-20 text-xl text-gray-800 dark:text-gray-200">
        Blog post not found.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <article className="py-20 flex flex-col gap-6 items-center px-4 bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <div className="w-full max-w-4xl flex flex-col items-start px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="flex items-center text-blue-500 hover:underline mb-8 text-sm"
          >
            <ChevronLeft size={16} className="mr-1" /> Back to Blog
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 dark:text-gray-100 font-extrabold mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span>
              By {post.author.name} on {post.date}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          {post.heroImage && (
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full select-none rounded-lg shadow-md mt-8 border dark:border-gray-700"
            />
          )}
        </div>
        <div className="w-full max-w-4xl mt-8 px-4 sm:px-6 lg:px-8 prose prose-gray dark:prose-invert">
          {post.content.map(renderContent)}
        </div>
      </article>
      <Footer />
    </>
  );
};

export default BlogPage;
