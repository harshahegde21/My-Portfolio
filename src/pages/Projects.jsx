import React, { useRef } from "react";
import myprojects from "../data/projects.js";
import { Button } from "react-bootstrap";
import "../styles/hideScrollbar.css";

const Projects = ({ isDark }) => {
  const scrollRef = useRef();

  return (
    <div className={`projects ${isDark ? "text-white" : "text-black"} relative md:bottom-49`} id="projects">
      <div className="heading ml-4 sm:ml-14">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-sm text-gray-400">Scroll to explore my work &gt;&gt;</p>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden space-x-4 px-4 py-6 scrollbar-hide"
      >
        {myprojects.map((proj, index) => (
          <div
            key={index}
            className="min-w-[50%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%] xl:min-w-[25%] max-w-[320px] flex-shrink-0 bg-gray-800 rounded-2xl p-3"
          >
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-36 sm:h-44 md:h-52 lg:h-48 object-cover rounded-xl mb-3 border border-blue-400"
            />
            <div>
              <span className="text-lg sm:text-xl font-semibold">{proj.name}</span>
              <p className="text-sm mt-1">{proj.desc}</p>
              <div className="mt-2">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tech Stack:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {proj.techstack.split(',').map((tech, idx) => {
                    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-indigo-500'];
                    const color = colors[idx % colors.length];
                    return (
                      <span key={idx} className={`${color} text-white text-xs px-3 py-1 rounded-full shadow-sm`}>
                        {tech.trim()}
                      </span>
                    );
                  })}
                </div>
              </div>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-2 px-4 py-1 bg-amber-400 text-black rounded-md hover:bg-amber-300 mt-2">
                  Code
                  <img
                    src="images/codesrc.svg"
                    alt="code-icon"
                    className="h-5 w-5 object-contain"
                  />
                </Button>
                 
              </a>
              

                 <a href={proj.liveLink} target="_blank" rel="noopener noreferrer">
                <Button className="flex  ml-2 items-center gap-2 px-4 py-1 bg-amber-400 text-black rounded-md hover:bg-amber-300 mt-2">
                  Live Link
                  <img
                    src="images/codesrc.svg"
                    alt="code-icon"
                    className="h-5 w-5 object-contain"
                  />
                </Button>
                 
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
