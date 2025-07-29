import { useParams } from "react-router-dom";
import { ProjectBlog } from "../blogs/ProjectBlog";
import Navbar from "../component/Navbar";
import Container from "../component/Container";
import Footer from "../component/Footer";
import GithubIcon from "../component/GithubIcon";
import { ExternalLink } from "lucide-react";
import Markdown from "react-markdown";
import { useEffect } from "react";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = ProjectBlog[projectId];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount

    if (project?.title) {
      document.title = `${project.title} | Rushikesh Thorat`;
    } else {
      document.title = "Project | Rushikesh Thorat";
    }

    // Optional cleanup (restores title on unmount if needed)
    return () => {
      document.title = "Rushikesh Thorat";
    };
  }, [project]);

  if (!project) {
    return (
      <div className="text-center mt-20 text-xl text-gray-800 dark:text-gray-200">
        Project not found.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <article className="py-20 flex flex-col gap-6 items-center px-4 bg-white dark:bg-black transition-colors duration-300">
        {/* Header Section */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-black hero-font">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            {project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:border p-2 rounded hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-200"
              >
                <ExternalLink className="w-4 h-4" /> Live Url
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:border p-2 rounded hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-200"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-4xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full select-none rounded-lg shadow dark:shadow-lg border dark:border-gray-700"
          />
        </div>

        {/* Sections */}
        <div className="w-full max-w-4xl flex flex-col gap-8">
          {project.sections.map((section, idx) => (
            <Container key={idx} title={section.title}>
              {/* Paragraphs */}
              {section.content?.map((para, i) => (
                <div
                  key={i}
                  className="mb-2 props prose-img:select-none prose-p:w-full prose-a:text-[#285ff8] text-gray-800 dark:text-gray-300"
                >
                  <Markdown>{para}</Markdown>
                </div>
              ))}

              {/* List */}
              {section.list && (
                <ul className="list-disc pl-7 flex flex-col gap-2 text-gray-800 dark:text-gray-300">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {/* Features */}
              {section.features && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6">
                  {section.features.map((feature, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-[#121212] rounded-xl shadow p-5 flex flex-col items-start gap-3 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="text-3xl">{feature.icon}</div>
                      <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Images */}
              {section.images && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
                  {section.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Screenshot ${i}`}
                      className="w-full select-none h-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                    />
                  ))}
                </div>
              )}
            </Container>
          ))}
        </div>
      </article>
      <Footer />
    </>
  );
};

export default ProjectPage;
