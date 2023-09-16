import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experienceData = [
  {
    title: "Associate Software Engineer @ Vertice AI",
    location: "Atlanta, GA",
    description:
      "Developing Frontend for a Saas platform of predictive data analytics for the credit union industry. Specifically refactoring the solution for maintaining a single codebase for multiple clients.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Present",
  },
  {
    title: "Business Analyst Intern @ McKinsey & Company",
    location: "Austin, TX",
    description:
      "Analyzed expert interviews and sales data from over five companies to identify $85B tech market trends and collaborated with data scientists to devise Python-based pricing models, unlocking $250M in opportunities for manufacturers and tech firms.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - July 2022",
  },
  {
    title: "Co-Founder @ CambioPeru",
    location: "Lima, Peru",
    description:
      "Co-founded an NGO devoted to improving the quality of life of domestically abused women by empowering them with the necessary tools to become financially independent.",
    icon: React.createElement(FaReact),
    date: "May 2017 - Present",
  },
  {
    title: "Development and Construction Intern @ Wescon Grupo Inmobiliario",
    location: "Lima, Peru",
    description:
      "Conducted market research and assisted in the purchase of land for residential development projects, generated cost estimates and optimized interior design for residential projects.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021- July 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Yoyo",
    description:
      "Designed and developed an interactive web application to monetize and prioritize song queues at social events via a user-driven upvote and downvote mechanism, integrating with the Spotify API.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Chakra UI",
      "Spotfiy API",
      "Figma",
    ],
    imageUrl: "https://d30m9zq0h8yaq.cloudfront.net/yoyo.png",
  },
  {
    title: "Scrappy Doo to the Rescue",
    description:
      "Engineered a fully autonomous robotic system capable of executing predefined tasks, employing Arduino technologies and C++ programming, as part of an advanced Mechanical Engineering design project.",
    tags: ["Arduino", "SolidWorks", "C++"],
    imageUrl: "https://d30m9zq0h8yaq.cloudfront.net/scrappydoo.png",
  },
  {
    title: "Monowheel - ME1670",
    description:
      "Collaborated on the conceptualization and design of an innovative monowheel, leveraging advanced CAD tools such as SolidWorks and KeyShot for a specialized design course.",
    tags: ["Sketching", "SolidWorks", "KeyShot"],
    imageUrl: "https://d30m9zq0h8yaq.cloudfront.net/monowheel.png",
  },

  {
    title: "TecniKo App",
    description:
      "Spearheaded the development of a Web App MVP to bridge the gap between skilled technicians and potential clients, addressing the unemployment crisis in Lima, Peru. Oversaw product management, business operations, marketing strategies, and graphic design elements.",
    tags: ["Product Management", "Business Operations", "Graphic Design"],
    imageUrl: "https://d30m9zq0h8yaq.cloudfront.net/Tecniko.png",
  },
] as const;

export const skillsData = [
  "MATLAB",
  "TypeScript",
  "Next.js",
  "Chakra UI",
  "Figma",
  "Python",
  "C++",
  "SolidWorks",
  "MongoDB",
  "AWS",
  "Git",
] as const;

export const languagesData = [
  {
    name: "English",
    level: 10,
    flagImage: "https://d30m9zq0h8yaq.cloudfront.net/uk.png",
  },
  {
    name: "Spanish",
    level: 10,
    flagImage: "https://d30m9zq0h8yaq.cloudfront.net/spain.png",
  },
  {
    name: "French",
    level: 5,
    flagImage: "https://d30m9zq0h8yaq.cloudfront.net/france.png",
  },
] as const;
