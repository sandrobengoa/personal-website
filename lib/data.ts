import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import mcKinsey from "@public/mckinseyLogo.png";
import wescon from "@public/wesconLogo.png";
import yoyo from "@public/yoyoLogo.png";
import vertice from "@public/verticeLogo.png";
import cambioPeru from "@public/cambioperuLogo.png";

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
      "Developing web app to monetize song queues at parties using upvote and downvote system",
    tags: ["React", "TypeScript", "Next.js", "ChakraUI", "Spotfiy API"],
    imageUrl: "@public/yoyoLogo.png",
  },
  {
    title: "Monowheel - ME1670",
    description:
      "Collaboratively designed a monowheel concept for Computer Aided Design Class",
    tags: ["Sketching", "SolidWorks", "KeyShot"],
    imageUrl: "@public/monowheel.44.mp4",
  },
  {
    title: "Scrappy Doo to the Rescue",
    description:
      "Fully autonomous robot that completes a set of tasks for Mechanical Engineering Creative Decisions & Design",
    tags: ["Arduino", "SolidWorks", "C++"],
  },
  {
    title: "TecniKo App",
    description:
      "Developed an Web App MVP to connect a network of technicians with clients, fighting unemployment crisis in Lima, Peru.",
    tags: [
      "Product Management",
      "Business Operations",
      "Marketing",
      "Graphic Design",
    ],
    imageUrl: "@public/tecnikoLogo.png",
  },
];
