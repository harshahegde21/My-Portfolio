import React from "react";
import skillList from "../data/skilldata";

const Skills = ({ isDark }) => {
  return (
    <div
      className={`skills grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10 relative md:bottom-49 ${
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
      <div className="border rounded-xl p-4">
        <h2 className="text-center font-semibold mb-3 hover:bg-blue-600 rounded-xl">
          Frontend
        </h2>
        {skillList.map(
          (skill, index) =>
            skill.category === "frontend" && (
              <div key={index} className="flex items-center gap-2 mb-2">
                <img src={skill.image} alt={skill.sName} className="h-10 w-10" />
                <p>{skill.sName}</p>
              </div>
            )
        )}
      </div>

      {/* Backend */}
      <div className="border rounded-xl p-4">
        <h2 className="text-center font-semibold mb-3 hover:bg-blue-600 rounded-xl">
          Backend
        </h2>
        {skillList.map(
          (skill, index) =>
            skill.category === "backend" && (
              <div key={index} className="flex items-center gap-2 mb-2">
                <img src={skill.image} alt={skill.sName} className="h-10 w-10" />
                <p>{skill.sName}</p>
              </div>
            )
        )}
      </div>

      {/* Tools */}
      <div className="border rounded-xl p-4">
        <h2 className="text-center font-semibold mb-3 hover:bg-blue-600 rounded-xl">
          Tools
        </h2>
        {skillList.map(
          (skill, index) =>
            skill.category === "tool" && (
              <div key={index} className="flex items-center gap-2 mb-2">
                <img src={skill.image} alt={skill.sName} className="h-10 w-10" />
                <p>{skill.sName}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default Skills;

