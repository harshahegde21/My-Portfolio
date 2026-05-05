import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ButtonsIntro from "../components/ButtonsIntro.jsx";
import Download from "../components/Download.jsx";
const HomePage = ({ aboutRef, isDark }) => {
  const [text1, setText1] = useState("");
  const fullText = " Harsha Hegde";
  const smfullText = "    Hello 👋, Iam";
  const [text2, setText2] = useState("");
  const handleScroll = () => {
    aboutRef.current?.scrollIntoView({ behaviour: "smooth" });
  };

  useEffect(() => {
    let i = 0;
    const timer1 = setInterval(() => {
      if (i < smfullText.length) {
        setText1((prev) => prev + smfullText.charAt(i));
        i++;
      } else clearInterval(timer1);
    }, 100);
    return () => clearInterval(timer1);
  }, []);

  useEffect(() => {
    let j = 0;
    const timer2 = setInterval(() => {
      if (j < fullText.length) {
        setText2((prev) => prev + fullText.charAt(j));
        j++;
      } else clearInterval(timer2);
    }, 100);
    return () => clearInterval(timer2);
  }, []);

  return (
    <div
      className={`sm:grid md:grid lg:grid grid-cols-2  ${
        isDark ? "text-white" : "text-black"
      }  `}
      id="home"
    >
      <div className="intro-texts b-white sm:h-160 lg:h-160 h-60 md:mt-5">
        <div className="texts bg-blu-300 h-70 lg:h-30 lg:w-140 w-80 ml-5 mt-3 relative lg:top-25 lg:ml-20">
          {/* 🔥 Tagline */}
          {/* <p className="uppercase tracking-widest text-sm md:text-base text-blue-500 font-semibold mb-2 animate-pulse">
            Not Just Another Developer
          </p> */}
          <p className="uppercase tracking-widest text-base md:text-lg lg:text-xl text-blue-500 font-semibold mb-2 animate-pulse">
  Not Just Another Developer
</p>

          <h2 className="text-2xl ">{text1} </h2>
          <h1 className="lg:text-5xl font-semibold">{text2} </h1>
          <h2 className="animate-bounce">
            I'm a{" "}
            <b className="text-blue-70 text-[#1E90FF] ">Fullstack Developer</b>
          </h2>
          <div className="inline-flex">
            <img
              src="images/skills/react-original.svg"
              alt="react-logo"
              className="animate-spin h-10 md:h-15 md:w-15 mr-4"
            />
            <img
              src="images/skills/node.png"
              alt="node-logo"
              className="animate-spin h-10 md:h-15 md:w-15 mr-4"
            />
            <img
              src="images/skills/express.png"
              alt="node-logo"
              className="animate-spin h-10 md:h-15 md:w-15 mr-4"
            />
            <img
              src="images/skills/mongodb.svg"
              alt="mongodb-logo"
              className="animate-spin h-10 md:h-15 md:w-15 mr-4"
            />
          </div>
          <p className="lg:mt-6">
            Full-stack developer focused on building clean, scalable apps, with a strong interest in backend development and real-world problem solving—seeking an internship to contribute and grow 🚀
          </p>
        </div>
        <br />
        <br />
        <br />
        <ButtonsIntro />
        <Download />
      </div>

      <div className="image bg-yelow-400 mt-35 lg:mt-0  justify-center lg:h-160 hidden md:block lg:ml-30 ">
        <div className="picture g-blue-400 border-5  border-blue-200 rounded-full h-50 w-50 flex justify-center overflow-hidden lg:mt-30 ">
          <img
            src="/Harsha-bg-removed.jpg"
            alt="Harsha-image"
            className="h-full w-full object-cover border-1px"
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;





