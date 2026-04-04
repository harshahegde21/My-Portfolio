import React from "react";
import experiences from "../data/experience.js";

const Experience = ({ aboutRef, isDark }) => {
  return (
    
    <div
      className={` py-12 px-6 mt-35 md:relative md:bottom-49 ${
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
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`rounded-2xl p-4 shadow-lg transition-all duration-300 
              hover:shadow-xl hover:scale-[1.02] bg-gradient-to-br from-gray-800 to-gray-900 text-white border border-gray-700`}
          >
            <h3 className="text-lg font-semibold mb-2">
              {exp.role} @ <span className="text-indigo-400">{exp.heading}</span>
            </h3>
            <p className="text-xs mb-3 opacity-80">{exp.date}</p>

            {exp.idCard && (
              <div className="mb-3 flex justify-center">
                <img
                  src={exp.idCard}
                  alt={`${exp.heading} Contributor ID`}
                  className="w-[200px] h-[120px] rounded-lg shadow-md border border-gray-600 object-cover"
                />
              </div>
            )}

            <div
              className={`text-xs leading-relaxed space-y-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}
              dangerouslySetInnerHTML={{ __html: exp.projects }}
            ></div>

            {exp.contribution_dashboard && (
              <a
                href={exp.contribution_dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-white text-xs border-1 no-underline py-1 px-6 bg-[#0284c7] rounded-lg hover:bg-[#0369a1] transition-colors"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>

 
    </div>
  );
};

export default Experience;
