import React, { useRef, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./components/Navbars.jsx";
import HomePage from "./pages/Homepage.jsx"
import About from "./pages/About.jsx"
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Experience from "./pages/Experience.jsx";


const App = () => {
  const aboutRef= useRef(null);
  const [isdark,setisDark] = useState(true);
  return (
    <div
      className={`main min-h-screen w-full bg-cover bg-center bg-no-repeat m-0 ${isdark ? "bg-[#0A131F]" : "bg-white" }`}>
      <Navbars isDark={isdark} setisDark={setisDark}/>
      <HomePage aboutRef={aboutRef} isDark={isdark} />
      <Experience aboutRef={aboutRef} isDark={isdark}/>
      {/* <About aboutRef={aboutRef}/> */}
      
      <Skills isDark={isdark} />
      <Projects isDark={isdark}/>
      <Contact isDark={isdark}/>
    </div>
  );
};

export default App;
