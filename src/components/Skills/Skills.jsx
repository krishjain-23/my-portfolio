import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A list of my technical skills and knowledge gained through different
        projects and learning experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.5)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items */}
          <div className="flex flex-wrap items-center gap-2 justify-between w-full">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-center bg-transparent border-2 border-gray-700 rounded-3xl w-[10vw] py-3 sm:py-2 sm:px-2 text-center 
                transition-all duration-300 hover:border-[#8245ec] hover:scale-110 hover:bg-[#1f1f1f]"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-4 h-4 sm:w-6 sm:h-6 mr-1"
                />
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

