import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ButtonsIntro from "../components/ButtonsIntro.jsx";
import Download from "../components/Download.jsx";
const HomePage = ({ aboutRef ,isDark}) => {
  const [text1, setText1] = useState("");
  const fullText = " Harsha Hegde";
  const smfullText = "  Hello 👋, Iam";
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
   
    <div className={`sm:grid md:grid lg:grid grid-cols-2  ${isDark?"text-white":"text-black"} `} id="home">
      <div className="intro-texts b-white sm:h-160 lg:h-160 h-60 md:mt-15">
        <div className="texts bg-blu-300 h-70 lg:h-30 lg:w-140 w-80 ml-5 mt-3 relative lg:top-25 lg:ml-20">
          <h2 className="text-2xl">{text1} </h2>
          <h1 className="lg:text-5xl font-semibold ">{text2} </h1>
          <h2 className="">
            I'm a <b className="text-blue-70 text-[#1E90FF]">Fullstack Developer</b>
          </h2>
          <p className="lg:mt-6">
            I'm a passionate Fullstack developer with a strong interest in building
            clean, responsive, and user-friendly websites. Currently exploring
            modern web technologies and sharpening my full-stack skills. Eager
            to learn, grow, and contribute to real-world projects as a fresher.
          </p>
        </div>
        <br />
        <ButtonsIntro />
           <Download/>
       
      </div>
      <div className="image bg-yelow-400 mt-35 lg:mt-0  justify-center lg:h-160 hidden md:block lg:ml-30 ">
        <div className="picture g-blue-400 border-5  border-blue-200 rounded-full h-50 w-50 flex justify-center overflow-hidden lg:mt-30 ">
          <img
            src="images/Mecrop.jpg"
            alt="Harsha-image"
            className="h-full w-full object-cover border-1px"
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;



