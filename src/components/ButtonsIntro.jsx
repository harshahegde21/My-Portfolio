import React from "react";

const ButtonsIntro = () => {
  return (
    <div className="btns lg:mt-63 lg:ml-14">
      <ul className="flex bg-mber-300 lg:mt-30">
        <li>
          <a
            className="mr-3"
            href="https://www.instagram.com/harsha_hegde_70?igsh=NW9ha25jeDcxMXE0"
          >
            <img
              src="images/insta.png"
              className="h-5 w-5 lg:h-7 lg:w-7"
              alt="instagram-logo"
            />
          </a>
        </li>
        
        <li className="ml-2">
          <button className="mr-3">
            <a href="https://www.linkedin.com/in/harsha-hegde-a22233293">
              <img
                src="images/linked.png"
                className="h-5 w-5  lg:h-7 lg:w-7"
                alt="Linkedin-logo"
              />
            </a>
          </button>
        </li>

        <li>
          <button className="lg:mr-5lg:ml3 mr-3">
            <a href="https://github.com/harshahegde21">
              <img
                src="images/github.png"
                className="h-5 w-5  lg:h-7 lg:w-7"
                alt="Github-logo"
              />
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonsIntro;
