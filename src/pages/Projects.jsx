
// import React, { useRef } from "react";
// import myprojects from "../data/projects.js";
// import { Button } from "react-bootstrap";
// import "../styles/hideScrollbar.css"; // Custom CSS to hide scrollbars

// const Projects = ({isDark}) => {
//   const scrollRef = useRef();

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({
//       left: 300, // Amount to scroll (adjust as needed)
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className={`projects ${isDark ? "text-white" : "text-black"}`} id="projects">
//       <div className="heading text ml-14">
//         <h2 className="text-3xl font-bold mb-2 ">Projects</h2>
//         <p className="text-sm text-gray-400">Scroll to explore my work &gt;&gt;</p>
//       </div>

//       <div
//         ref={scrollRef}
//         className="flex overflow-x-auto overflow-y-hidden space-x-4 px-4 py-6 text-white scrollbar-hide"
//       >
//         {myprojects.map((proj, index) => (
//           <div
//             key={index}
//             className="min-w-[80%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%] flex-shrink-0 bg-gray-800 rounded-2xl p-4"
//           >
//             <img
//               src={proj.image}
//               alt={proj.name}
//               className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl mb-4 border border-blue-400"
//             />
//             <div className="block items-center justify-between">
//               <span className="text-lg sm:text-xl font-semibold">{proj.name}</span><br />
//               <span className="text-sm sm:text-sm">{proj.desc}</span><br />
//               <span className="text-sm sm:text-sm font-semibold"><b className="font-bold">Tech Stack : </b> {proj.techstack}</span><br></br>
//               <a href={proj.link} target="_blank" rel="noopener noreferrer">
//                 <Button className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-black rounded-md hover:bg-amber-300 mt-2">
//                   Code
//                   <img
//                     src="images/codesrc.svg"
//                     alt="code-icon"
//                     className="h-5 w-5 object-contain"
//                   />
//                 </Button>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;


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
            className="min-w-[85%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%] flex-shrink-0 bg-gray-800 rounded-2xl p-4"
          >
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl mb-4 border border-blue-400"
            />
            <div>
              <span className="text-lg sm:text-xl font-semibold">{proj.name}</span>
              <p className="text-sm mt-1">{proj.desc}</p>
              <p className="text-sm font-semibold mt-1">
                <b className="font-bold">Tech Stack: </b> {proj.techstack}
              </p>
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
