import { ChevronUpIcon, CodeIcon } from "@heroicons/react/outline";
import React from "react";
import {
  FaCode,
  FaLanguage,
  FaReact,
  FaRegHeart,
  FaRegMoon,
} from "react-icons/fa";
import { Element } from "react-scroll";
import ProgressBar from "./ProgressBar";

export const skills = [
  {
    group: "Programming",
    caption: "10+ years",
    icon: <FaRegHeart className="text-primary hover:animate-pulse" size={28} />,
    techList: [
      { name: "Nodejs", score: 90 },
      { name: "Nestjs", score: 90 },
      { name: "Typescript/JavaScript", score: 90 },
      { name: "Vue 3", score: 90 },
      { name: "Tailwind", score: 90 },
      { name: "Angular", score: 80 },
      { name: "React", score: 60 },
      { name: "Flutter", score: 50 },
    ],
  },
  {
    group: "Languages",
    caption: "",
    icon: <FaLanguage className="text-primary hover:animate-pulse" size={28} />,
    techList: [
      { name: "Thai", score: 100 },
      { name: "English", score: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <Element
      name="skills"
      className="min-h-screen max-w-6xl mx-auto lg:px-32 py-32 lg:py-52"
    >
      <div className="text-gray-300 flex flex-col items-center gap-2 my-auto">
        <h1 className="text-5xl font-bold">Skills</h1>
        <p className="pt-2 text-gray-400">My technical level</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full pt-10">
          {skills.map((c, i) => (
            <div className="flex flex-col" key={i}>
              <div className="flex flex-row gap-2 items-center">
                {c.icon}
                <div className="flex flex-col gap-2 flex-1 pl-2">
                  <h1 className="text-xl font-bold">{c.group}</h1>
                  <p className="text-sm text-gray-400">{c.caption}</p>
                </div>
                <ChevronUpIcon className="text-primary w-6" />
              </div>

              <div className="flex flex-col gap-2 lg:pl-11 pt-8">
                {c.techList.map((t, i) => (
                  <div className="flex flex-col mb-4" key={i}>
                    <div className="flex flex-row">
                      <span className="flex-1">{t.name}</span>
                      <span className="text-gray-400">{t.score}%</span>
                    </div>
                    <ProgressBar completed={t.score} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skills;
