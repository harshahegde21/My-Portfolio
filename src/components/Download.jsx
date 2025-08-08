import React from "react";
import { Button } from "react-bootstrap";

const Download = () => {
  return (
    <div className="ml-5 mt-4 relative bottom-6 md:ml-20 animate-bounce">
      <a href="/Harsha_Resume.pdf" download="Harsha_Resume">
        <Button>Download Resume</Button>
      </a>
    </div>
  );
};

export default Download;
