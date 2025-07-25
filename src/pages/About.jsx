import React from "react";
import { useRef } from "react";
import Download from "../components/Download";
const About = ({aboutRef}) => {
  return (
    <div className="grid lg:grid-cols-2 lg:h-full">
      <div className="image bg-yelow-400 mt-35 lg:mt-6 h-60 flex justify-center lg:h-160 md:relative md:bottom-8">
        <div className="picture bg-blue-400 border-5  border-blue-200 rounded-full h-50 w-50 flex justify-center overflow-hidden lg:mt-30 ">
          <img
            src="images/Mecrop.jpg"
            alt=""
            className="h-full w-full object-cover border-1px"
          />
        </div>
      </div>

      <div className="text-white bg-amber-20 relative bottom-30 md:bottom-0 ml-3" id="about" ref={aboutRef}>
        <div className="headings mt-20 ">
          <h1>About Me</h1>
          <h4 className="mt-3">Web Developer !</h4>
        </div>
        <div className="mt-8">
          <p>
            Hi, I'm Harsha, a passionate Computer Science Engineering student at
            Sahyadri College of Engineering and Management. I have a strong
            interest in technology and problem-solving, and I’m continuously
            working to improve my skills in the field of web development. I’m
            skilled in modern web technologies. I enjoy building responsive and
            user-friendly web applications that provide real value to users and
            super useful. Apart from coding, I love exploring new tools,
            frameworks, and keeping up with the latest trends in tech. I’m a
            quick learner, highly motivated, and always open to learning from
            real-world projects and experiences. Currently, I'm seeking
            opportunities to apply my knowledge, grow as a full-stack developer,
            and contribute meaningfully to the tech community.
          </p>
        </div>
        <Download/>
      </div>      
    </div>
  );
};

export default About;
