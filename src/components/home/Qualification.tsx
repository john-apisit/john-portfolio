import React from "react";
import { FaCalendarAlt, FaGraduationCap, FaUserFriends } from "react-icons/fa";
import { Element } from "react-scroll";
import DateFormatter from "../DateFormatter";

export const expList = [
  {
    position: "Freelance",
    company: "Remote",
    from: "2025-05-01",
    to: Date(),
    responsibilities: [
      "Designed and built Fast Habit, a cross-platform habit tracker app using Flutter (frontend) and Supabase (backend).",
      "Utilized Cursor AI to accelerate development, improve code quality, and iterate faster.",
      "Created user interface and experience designs independently in Figma, ensuring a clean and intuitive product.",
      "Implemented features including habit tracking, daily reflections, AI chat coaching, and subscription management with in-app purchases.",
      "Integrated authentication systems (Firebase, Apple, Google) and deployed app on App Store and Google Play Store.",
      "Designed scalable database schema, optimized Supabase queries, and monitored usage costs.",
      "Produced marketing materials, wrote App Store/Play Store listings, and tested growth strategies via Reddit.",
      {
        title: "Tech stack",
        subTasks: [
          "Frontend: Flutter, Dart",
          "Backend: Supabase, PostgreSQL",
          "Others: Figma, Cursor AI, App Store, Google Play Store",
        ],
      },
    ],
  },
  {
    position: "Software Development Lead",
    company: "CP Axtra (Lotus’s)",
    from: "2020-02-01",
    to: "2025-04-30",
    responsibilities: [
      "Led a scrum team of 6 engineers, facilitating all Scrum ceremonies (Sprint Planning, Daily Standups, Reviews, Retrospectives).",
      "Partnered with Product Owners to clarify requirements, prioritize features from a customer perspective, and plan project timelines.",
      "Designed system architecture and integration plans, collaborating with Solution Architects and other teams.",
      "Defined engineering standards: API guidelines, Git Flow, CI/CD pipelines, and technology stack.",
      "Conducted code reviews, technical mentoring, and 1:1 sessions to support skill growth and team development.",
      "Interviewed, onboarded, and coached new team members to align with company culture and practices.",
      {
        title: "Tech stack",
        subTasks: [
          "Frontend: Vue 3, Tailwind",
          "Backend: Nodejs, Nestjs, Typescript, Java, Spring Boot, Postgresql, MongoDB, Elasticsearch, Kibana, Kafka, Redis, Cognito, API Gateway, Lambda, AWS CodeBuild, Git, Docker, Kubernetes, Istio, Jenkins",
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
      "Developed and optimized web applications, including implementing caching with IndexedDB to improve performance.",
      "Built and maintained Angular boilerplates to streamline project setup.",
      "Defined coding standards and introduced standard tools to improve code quality and consistency.",
      "Led projects and guided team members within a Scrum environment to ensure timely sprint delivery.",
      "Fostered collaboration and motivated the team to achieve sprint goals.",
      {
        title: "Tech stack",
        subTasks: ["Frontend: Angular 8", "TypeScript", "LESS style"],
      },
    ],
  },
  {
    position: "Full Stack .NET Programmer",
    company: "Brand New Day",
    from: "2018-07-01",
    to: "2019-04-30",
    responsibilities: [
      "Developed and maintained web applications for the Retirement project, contributed to sprint backlog management and team velocity tracking, and occasionally served as Scrum Master to facilitate sprints.",
      {
        title: "Tech stack",
        subTasks: [
          "Frontend: .Net, C#, ASP.NET, MVC",
          "Backend: Entity Framework, SQL Server",
        ],
      },
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
      "Designed and developed web applications for financial projects.",
      "Built and maintained front-end and back-end infrastructure.",
      "Implemented CI/CD pipelines with Jenkins in the development environment.",
      "Introduced MongoDB for centralized API logging.",
      "Collaborated in a Scrum team to deliver high-quality solutions.",
      {
        title: "Tech stack",
        subTasks: [
          "Frontend: Angular 5, SCSS, Bootstrap",
          "Backend: .NET MVC 5, SQL Server, Entity Framework, MongoDB, Jenkins",
        ],
      },
    ],
  },
  {
    position: "Full Stack .NET Programmer",
    company: "Symphony Communication",
    from: "2016-04-01",
    to: "2017-12-31",
    responsibilities: [
      "Developed web applications supporting order and billing systems.",
      "Built Web APIs to support mobile applications.",
      "Created cross-platform mobile applications using IONIC 3.",
      {
        title: "Tech stack",
        subTasks: [
          "Frontend: JQuery, IONIC 3 (Angular 4)",
          "Backend: .NET MVC 5, Oracle",
        ],
      },
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
      "Developed and maintained web applications supporting eCommerce systems and the company’s public websites.",
      {
        title: "Tech stack",
        subTasks: [
          "Frontend: .NET MVC 5, Angular 1.x, WCF",
          "Backend: .NET MVC 5, MSSQL",
        ],
      },
    ],
  },
  {
    position: "Freelance .NET Programmer",
    company: "Home",
    from: "2014-09-01",
    to: "2015-04-30",
    responsibilities: [
      "Designed database and application architecture for AR, Inventory, and eCommerce systems.",
      "Developed web applications, web services, and reports to support business operations.",
      "Implemented Reporting Services for analytical and operational reporting.",
      {
        title: "Tech stack",
        subTasks: [
          "Frontend: AngularJS 1.x, Bootstrap",
          "Backend: .NET MVC 5, SQL Server 2012, Reporting Services",
        ],
      },
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
      "Developed websites, web applications, and APIs supporting SMS systems.",
      "Selected appropriate technologies for projects.",
      "Gathered requirements from users following SA methodology.",
      "Designed system architecture and databases.",
      {
        title: "Tech stack",
        subTasks: ["Frontend: javascript", "Backend: Java, MySQL"],
      },
    ],
  },
  {
    position: "Full Stack .NET Programmer",
    company: "Cigna Insurance",
    from: "2012-11-01",
    to: "2013-09-01",
    responsibilities: [
      "Developed web and Windows applications to support insurance systems, including creating billing reports.",
      {
        title: "Tech stack",
        subTasks: [
          "Frontend: C#, ASP.NET",
          "Backend: C#, ASP.NET, Reporting Services, Crystal Reports",
        ],
      },
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
