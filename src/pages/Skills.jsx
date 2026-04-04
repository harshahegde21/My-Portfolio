import React from "react";
import skillList from "../data/skilldata";

const Skills = ({ isDark }) => {
  return (
    <div
      className={`skills grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10 relative md:bottom-60 ${
        isDark ? "text-white" : "text-black"
      }`}
      id="skills"
    >
      <h1 className="col-span-1 md:col-span-3 text-center text-2xl font-bold mb-6 border p-2 rounded-xl hover:bg-blue-600">
        Skills
      </h1>

      {/* Only for Mobile Devices */}
      {/* <div className="flex justify-center md:hidden">
        <div className="picture bg-blue-300 border-4 mt-4 rounded-full h-40 w-40 flex justify-center overflow-hidden">
          <img
            src="/Harsha-bg-removed.jpg"
            alt="harsha-photo"
            className="h-full w-full object-cover"
          />
        </div>
      </div> */}

      {/* Frontend */}
      <div className="border rounded-xl p-4 bg-black">
        <h2 className="text-center font-semibold mb-3 hover:bg-blue-600 rounded-xl text-white">
          Frontend
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {skillList.map(
            (skill, index) =>
              skill.category === "frontend" && (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-800 text-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img src={skill.image} alt={skill.sName} className="h-8 w-8" />
                  <p className="text-sm font-medium"> {skill.sName}</p>
                </div>
              )
          )}
        </div>
      </div>

      {/* Backend */}
      <div className="border rounded-xl p-4 bg-black">
        <h2 className="text-center font-semibold mb-3 hover:bg-green-600 rounded-xl text-white">
          Backend
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {skillList.map(
            (skill, index) =>
              skill.category === "backend" && (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-800 text-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img src={skill.image} alt={skill.sName} className="h-8 w-8" />
                  <p className="text-sm font-medium"> {skill.sName}</p>
                </div>
              )
          )}
        </div>
      </div>

      {/* Tools */}
      <div className="border rounded-xl p-4 bg-black">
        <h2 className="text-center font-semibold mb-3 hover:bg-purple-600 rounded-xl text-white">
          Tools
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {skillList.map(
            (skill, index) =>
              skill.category === "tool" && (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-800 text-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img src={skill.image} alt={skill.sName} className="h-8 w-8" />
                  <p className="text-sm font-medium">{skill.sName}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
export default Skills;

