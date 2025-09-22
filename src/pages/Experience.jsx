// import React from "react";
// import experiences from "../data/experience.js";

// const Experience = ({ aboutRef, isDark }) => {
//   return (
//     <div
//       className={`min-h-screen py-12 px-6 ${
//         isDark ? "text-white" : "text-black"
//       }`}
//     >
//       <h2 className="text-3xl font-bold mb-8 border-b-2 border-gray-700 inline-block">
//         Experiences
//       </h2>

//       <div className="grid md:grid-cols-2 gap-8">
//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             className={`rounded-2xl p-6 shadow-lg transition-all duration-300 
//               hover:shadow-xl hover:scale-[1.02] ${
//                 isDark ? "bg-gray-900" : "bg-gray-100"
//               }`}
//           >
//             {/* Role & Heading */}
//             <h3 className="text-xl font-semibold mb-2">
//               {exp.role} @{" "}
//               <span className="text-indigo-400">{exp.heading}</span>
//             </h3>

//             {/* Date */}
//             <p className="text-sm mb-4 opacity-80">{exp.date}</p>

//             {/* ID Card */}
//             {exp.idCard && (
//               <div className="mb-4 flex justify-center">
//                 <img
//                   src={exp.idCard}
//                   alt={`${exp.heading} Contributor ID`}
//                   className="w-[250px] h-[160px] rounded-xl shadow-md border border-gray-600 object-cover"
//                 />
//               </div>
//             )}

//             {/* Projects */}
//             <div
//               className={`text-sm leading-relaxed space-y-2 ${
//                 isDark ? "text-gray-300" : "text-gray-700"
//               }`}
//               dangerouslySetInnerHTML={{ __html: exp.projects }}
//             ></div>

//             {/* Proof Link */}
//             {exp.contribution_dashboard && (
//               <a
//                 href={exp.contribution_dashboard}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-4 inline-block text-indigo-400 underline text-sm"
//               >
//                 View Contribution Dashboard
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React from "react";
import experiences from "../data/experience.js";

const Experience = ({ aboutRef, isDark }) => {
  return (
    <div
      className={` min-h-screen py-12 px-6 mt-35 md:relative md:bottom-49 ${
        isDark ? "text-white" : "text-black"
      }`} id="experience"
    >
      {/* only for mobile devices */}
      <div className="flex justify-center md:hidden">
        <div className="picture bg-blue-300 border-4 mt-4 rounded-full h-40 w-40 flex justify-center overflow-hidden">
          <img
            src="/Harsha-bg-removed.jpg"
            alt="harsha-photo"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-gray-700 inline-block ">
        Experiences
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 shadow-lg transition-all duration-300 
              hover:shadow-xl hover:scale-[1.02] ${
                isDark ? "bg-gray-900" : "bg-gray-100"
              }`}
          >
            <h3 className="text-xl font-semibold mb-2">
              {exp.role} @ <span className="text-indigo-400">{exp.heading}</span>
            </h3>
            <p className="text-sm mb-4 opacity-80">{exp.date}</p>

            {exp.idCard && (
              <div className="mb-4 flex justify-center">
                <img
                  src={exp.idCard}
                  alt={`${exp.heading} Contributor ID`}
                  className="w-[250px] h-[160px] sm:w-[300px] sm:h-[180px] rounded-xl shadow-md border border-gray-600 object-cover"
                />
              </div>
            )}

            <div
              className={`text-sm leading-relaxed space-y-2 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
              dangerouslySetInnerHTML={{ __html: exp.projects }}
            ></div>

            {exp.contribution_dashboard && (
              <a
                href={exp.contribution_dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-white  text-sm border-1 no-underline py-2 px-10 bg-[#0284c7] rounded-xl hover:"
              >
                View Contribution Dashboard
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
