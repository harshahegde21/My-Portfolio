import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubSection = ({ isDark }) => {
  return (
    <section
      className={`
        relative
        sm:top-0
        top-40
        w-full 
        py-16 md:py-20 
        px-4 
        flex 
        flex-col 
        items-center 
        justify-center
        ${isDark ? "text-white" : "text-black"}
      `}
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        My GitHub Activity
      </h2>

      <div
        className={`
          w-full 
          max-w-4xl 
          rounded-2xl 
          shadow-lg 
          p-4 md:p-6 
          overflow-x-auto
          ${isDark ? "bg-gray-900" : "bg-white"}
        `}
      >
        <GitHubCalendar
          username="harshahegde21"
          blockSize={15}
          blockMargin={5}
          fontSize={14}
          colorScheme={isDark ? "dark" : "light"}
          theme={{
            light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
        />
      </div>
    </section>
  );
};

export default GithubSection;