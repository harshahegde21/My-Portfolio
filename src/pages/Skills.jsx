// import React from "react";
// import skillList from "../data/skilldata";
// const Skills = ({ isDark }) => {
//   return (
    
//     <div
    
//       className={`skills md:flex grid-cols-3 bg-[] ${
//         isDark ? "text-white" : "text-black"
//       }  ${isDark ? "border-blue-200" : "border-black"} `}
//       id="skills"
//     >
//         <h1 className="flex justify-center mb-4 ml-34 sm:top-150 sm:absolute  sm:left-110 h-11 sm:h-13 w-25 border-1 rounded-xl   hover:bg-blue-600">
//         Skills
//       </h1>

//       {/* Only for Mobile Devices */}
//       <div className="image mt-45 lg:mt-6 h-60 flex justify-center sm:hidden ">
//         <div className="picture bg-blue-300 border-5 mt-4 rounded-full h-50 w-50 flex justify-center overflow-hidden">
//           <img
//             src="/Harsha-bg-removed.jpg"
//             alt="harsha-photo"
//             className="h-30 w-40 object-cover border-1px"
//           />
//         </div>
//       </div>
//       {/*  */}
    
//       <div className="frontend   sm:mt40  sm:w-140 border-1 rounded-xl ">
//         <h2 className="flex hover:bg-blue-600 sm:mt-5 justify-center sm:relative sm:left-30 sm:rounded-xl lg:justify-start lg:ml-15 border-1 bg-amber-20 sm:w-40">
//           &nbsp;Frontend
//         </h2>
//         {skillList.map((skill, index) =>
//           skill.category == "frontend" ? (
//             <div
//               className="inline-flex md:ml-26 ml-12 bg-amber-20 h-25 w-30 mt-2 "
//               key={index}
//             >
//               <img
//                 src={skill.image}
//                 alt={skill.sName + "-logo"}
//                 className="h-15 md:20"
//               />
//               <p className="align-center sm:mt-16 mt-24 relative right-18 sm:ml-3 ml-1">
//                 {skill.sName}
//               </p>
//             </div>
//           ) : (
//             <div></div>
//           )
//         )}
//       </div>

//       <div className="backend  border-1 rounded-xl ">
//         <h2 className="flex sm:mt-5 sm:relative sm:left-32 justify-center lg:justify-start lg:ml-15 sm:w-40 sm:rounded-xl  border-1  hover:bg-blue-600">
//           &nbsp; Backend
//         </h2>
//         {skillList.map((skill, index) =>
//           skill.category == "backend" ? (
//             <div
//               className="inline-flex ml-12 sm:ml-4  bg-amber-20 h-25 w-30  mt-2"
//               key={index}
//             >
//               <img
//                 src={skill.image}
//                 alt={skill.sName + "-logo"}
//                 className="h-20"
//               />
//               <p className="align-center sm:mt-25 sm:mb-12 mt-24 relative right-18 ml-1">
//                 {skill.sName}
//               </p>
//             </div>
//           ) : (
//             <div></div>
//           )
//         )}
//       </div>

//       <div className={`tools border-1 rounded-xl sm:w-100 `}>
//         <h2 className="flex sm:relative sm:left-14 sm:mt-5 justify-center sm:w-30 sm:rounded-xl lg:justify-start lg:ml-15 border-1  hover:bg-blue-600">
//           &nbsp;&nbsp;Tools
//         </h2>
//         {skillList.map((skill, index) =>
//           skill.category == "tool" ? (
//             <div
//               className="inline-flex ml-12 bg-amber-20 h-25 w-30 mt-2"
//               key={index}
//             >
//               <img
//                 src={skill.image}
//                 alt={skill.sName + "-logo"}
//                 className="h-20"
//               />
//               <p className="align-center mt-24 relative right-18 ml-1">
//                 {skill.sName}
//               </p>
//             </div>
//           ) : (
//             <div></div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };
// export default Skills;


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

