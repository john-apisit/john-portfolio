import React from "react";
import { FaCalendarAlt, FaGraduationCap, FaUserFriends } from "react-icons/fa";
import { Element } from "react-scroll";
import DateFormatter from "../DateFormatter";

export const expList = [
  {
    position: "Software Development Lead",
    company: "Lotus’s",
    from: "2020-02-01",
    to: Date(),
    responsibilities: [
      "Lead scrum team 4-6 people. Among 5 cross functional teams",
      "Lead all scrum activities following scrum.org e.g. Sprint Planning. Daily Scrum, Sprint Demo and Retrospective.",
      "Help team develop their tech skills and growth mindset.",
      "Interview, Onboard, 1 on 1.",
      "Get requirement from Product Owner to clarify what user needs. Focus on customer view point.",
      "Plan project timeline with Product Owner.",
      "Design a system design diagram.",
      "Communicate to other cross functional teams for integration plan.",
      "Work with Solution Architect for cross functional team project.",
      "Define API standard.",
      "Define Git Flow standard and CI/CD.",
      "Review code.",
      "Define tech stack",
      {
        title: "Tech stack",
        subTasks: [
          "Programming: Nodejs, Nestjs, Typescript, Vue 3, Tailwind, Jest, Java, Spring Boot",
          "Database: Postgresql, MongoDB",
          "CI/CD: Git, Docker, Kubernetes, Istio, Jenkins",
          "Others: Keycloak, Kafka, Redis, Cognito, API Gateway, Lambda, Kibana, CloudFormation, AWS CodeBuild, Gitlab, Jira, Firebase Auth, Facebook Auth, LINE auth",
        ],
      },
    ],
  },
  undefined,
  undefined,
  {
    position: "Senior Frontend Developer",
    company: "Refinitiv",
    from: "2019-05-01",
    to: "2020-01-31",
    responsibilities: [
      "Work on a scrum team.",
      "Lead some projects and a few members to deliver all tasks of the project in the sprint.",
      "Encourage the team to achieve the goal of the sprint.",
      "Develop boilerplate for Angular projects.",
      "Improve web application performance. e.g. caching HTTP response data into IndexedDB.",
      "Help the team to provide code standards and standard tools for coding.",
      {
        title: "Tech stack",
        subTasks: ["Angular 8", "TypeScript", "LESS style"],
      },
    ],
  },
  {
    position: "Full Stack .NET Programmer",
    company: "Brand New Day",
    from: "2018-07-01",
    to: "2019-04-30",
    responsibilities: [
      "Work on a scrum team.",
      "Maintain and develop web application for Retirement project.",
      "Work on CI/CD process using TeamCity and Bitbucket git source control and SourceTree.",
      "Work on the Jira tool for tracking sprint backlog progress and see the velocity of the team.",
      "Try a Scrum Master role on some sprints.",
    ],
  },
  undefined,
  undefined,
  {
    position: "Full Stack .NET Programmer",
    company: "Thai Beverage Plc",
    from: "2018-01-01",
    to: "2018-06-30",
    responsibilities: [
      "Work on a Scrum team.",
      "Develop web applications for Financial projects.",
      "Design web application infrastructure both front-end and backend.",
      "Introduce Jenkin to the scrum team to perform CI/DI in the DEV environment.",
      "Introduce MongoDB to the scrum team to keep all logs for the web API.",
      "Work with Angular 5 technology and include SCSS and Bootstrap for the front-end part.",
      "Work with .NET MVC 5 and Sql Server and include Entity framework.",
    ],
  },
  {
    position: "Full Stack .NET Programmer",
    company: "Symphony Communication",
    from: "2016-04-01",
    to: "2017-12-31",
    responsibilities: [
      "Develop web applications using .NET MVC 5, JQuery and Oracle to support order and billing systems.",
      "Develop web API to support mobile applications using .NET MVC 5.",
      "Develop cross platform mobile applications using IONIC 3 (Angular 4).",
    ],
  },
  undefined,
  undefined,
  {
    position: "Full Stack .NET Programmer",
    company: "Qi Services",
    from: "2015-04-01",
    to: "2016-04-30",
    responsibilities: [
      "Develop web applications to support eCommerce systems using .NET MVC 5, Angular 1.x and WCF.",
      "Develop and maintain public websites of the company.",
    ],
  },
  {
    position: "Freelance .NET Programmer",
    company: "Home",
    from: "2014-09-01",
    to: "2015-04-30",
    responsibilities: [
      "Develop reports by Reporting Service to support AR and Inventory systems.",
      "Develop web application and web service to support eCommerce system.",
      "using .NET MVC 5, Angular 1.x, SQL Server 2012, Reporting Service and Bootstrap CSS.",
      "Analysis and design application architecture.",
      "Design database.",
      "Develop reports by Reporting Service.",
    ],
  },
  undefined,
  undefined,
  {
    position: "Java Programmer",
    company: "MoCom Group",
    from: "2013-10-01",
    to: "2014-09-30",
    responsibilities: [
      "Develop web sites, web applications and web API to support SMS systems. The main technologies are Java and MySQL.",
      "Find the appropriate technology to use in the project.",
      "Follow SA to get requirements from users.",
      "Design system architecture.",
      "Design database.",
    ],
  },
  {
    position: "Full Stack .NET Programmer",
    company: "Cigna Insurance",
    from: "2012-11-01",
    to: "2013-09-01",
    responsibilities: [
      "Develop web applications and Windows applications to support insurance systems. The projects were developed by C# and ASP.NET.",
      "Develop billing reports by Reporting Service and Crystal Report.",
    ],
  },
  undefined,
  undefined,
  {
    type: "education",
    position: "Computer Engineering",
    company: "Rajamangala University of Technology Thanyaburi (RMUTT)",
    from: "2008-05-01",
    to: "2012-04-30",
  },
];

const Qualification = () => {
  return (
    <Element
      name="qualification"
      className="min-h-screen max-w-6xl mx-auto lg:px-32 py-32 lg:py-52"
    >
      <div className="text-gray-300 flex flex-col items-center gap-2 my-auto">
        <h1 className="text-5xl font-bold">Qualification</h1>
        <p className="pt-2 text-gray-400">My personal journey</p>
        <div className="flex flex-row gap-10 pt-10">
          <div className="flex flex-row gap-2 items-center">
            <FaUserFriends size={30} />
            <span className="text-2xl">Work</span>
          </div>
          <div className="flex flex-row gap-2 items-center text-primary">
            <FaGraduationCap size={30} />
            <span className="text-2xl">Education</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full pt-10">
          {expList.map((c, i) => {
            const isLeftItem = (i + 1) % 2 !== 0;
            return (
              <div
                className={`flex flex-col relative pb-4 border-primary ${
                  isLeftItem ? "items-end pr-4 lg:pr-14" : "pl-4 lg:pl-14"
                } ${isLeftItem && i < expList.length - 2 && "border-r-2"}`}
                key={i}
              >
                {c && (
                  <>
                    <h1
                      className={`leading-none text-sm lg:text-xl ${
                        isLeftItem && "text-right"
                      } ${c.type === "education" && "text-primary"}`}
                    >
                      {c.position}
                    </h1>
                    <span className="text-gray-500 mt-1 text-sm lg:text-base">
                      {c.company}
                    </span>
                    <span className="text-gray-500 flex flex-row items-center gap-1 mt-4 text-xs lg:text-base">
                      <FaCalendarAlt />
                      <DateFormatter value={c.from} format={"MMM YYYY"} />
                      -
                      <DateFormatter value={c.to} format={"MMM YYYY"} />
                    </span>
                  </>
                )}
                {isLeftItem && (
                  <div className="w-4 h-4 rounded-full bg-primary top-0 -right-2 absolute"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default Qualification;
