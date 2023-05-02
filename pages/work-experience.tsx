import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
type Experience = {
  id: number;
  title: string;
  date: string;
  desc: ReactNode;
  tech_stack: string[];
  link?: string;
};
const EXPERIENCE: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer @LocalWeb Srl",
    date: "October 2021 - April 2023",
    desc: (
      <p>
        As a Technical Lead (Front End) and Full Stack Developer, I have been
        responsible for managing a talented team of developers and overseeing
        the design, development, and maintenance of a high-quality web
        application using C# and Next.js. I led a team of developers to deliver
        an online payment web application, ensuring a seamless integration of
        front-end and back-end technologies. I collaborated with
        cross-functional teams, including product managers, designers, and
        quality assurance engineers, to ensure that projects meet business goals
        and user expectations.
        <br />
        <br />I designed and implemented scalable and maintainable web
        applications using C#, .NET Core, Next.js, and other modern web
        development technologies. I implemented API-driven solutions using C#
        and ASP.NET Core, integrating with third-party services and customizing
        as needed. I ensured high-quality user experience by optimizing
        performance, managing state, and handling complex client-side logic
        using Next.js and React. I championed best practices in code quality,
        security, and performance, conducting regular code reviews and mentoring
        junior developers. I drove Agile methodologies, including Scrum, to
        facilitate efficient project management and continuous delivery.
      </p>
    ),
    tech_stack: [
      "TypeScript",
      "Next.js",
      "Material UI",
      "C#",
      ".NET Framework",
      "SQL",
    ],
  },
  {
    id: 2,
    title: "Front End Developer @Henesys Studio",
    date: "October 2021 - January 2022",
    desc: "During this experience I have crafted responsive, interactive, and cross-platform interfaces to deliver excellent user experiences across various devices and browsers. By playing an active role in UX/UI decision-making, I contributed to the creation of visually compelling and user-friendly interfaces that not only met but exceeded client expectations. Leveraging my expertise in Bootstrap and jQuery, I efficiently transformed design mockups into high-quality, production-ready code. This process involved closely collaborating with designers to ensure that the implemented interfaces closely matched the intended designs while maintaining responsiveness and ensuring seamless functionality. Additionally, I focused on optimizing the overall performance of the interfaces, ensuring fast load times and smooth user interactions, resulting in an enhanced user experience that ultimately contributed to the success of the projects.",
    tech_stack: ["JavaScript", "HTML", "Bootstrap"],
  },
  {
    id: 3,
    title: "Freelancer @Fiverr",
    date: "October 2020 -",
    desc: (
      <p>
        As a freelancer, I have consistently delivered high-quality development
        services to clients across a diverse range of projects. By actively
        collaborating with clients, I have gained a thorough understanding of
        their requirements, enabling me to provide tailored and efficient
        solutions that meet their specific needs. Throughout the project
        development process, I have maintained clear and open communication
        channels with clients, ensuring that all parties stay informed and
        aligned on project progress and any adjustments needed.
        <br />
        <br />
        In addition to client communication, I have leveraged my expertise in
        both front-end and back-end technologies to develop robust, scalable,
        and maintainable applications. This has involved working with various
        programming languages, frameworks, and tools to deliver seamless user
        experiences and reliable, high-performance systems.
        <br />
        <br />
        To ensure the success of each project, I have also focused on
        implementing best practices in areas such as code quality, security, and
        performance optimization. By staying up-to-date with the latest industry
        trends and technologies, I have been able to continuously improve my
        skills and adapt my approach to better serve my clients, deliver
        outstanding results and build lasting relationships with my clients.
      </p>
    ),
    tech_stack: [
      "TypeScript",
      "React.js",
      "Chakra UI",
      "Tailwind CSS",
      "Node.js",
      "C#",
      ".NET Framework",
      "SQL",
    ],
    link: "https://www.fiverr.com/anxhelatafani",
  },
];
const WorkExperience: NextPage = () => {
  return (
    <div className="flex flex-col py-10 gap-14">
      {EXPERIENCE.map((exp: Experience) => {
        return (
          <div key={exp.id}>
            <p className="text-primary text-lg">
              {exp.title}
              {exp.link && (
                <Link href={exp.link} target="_blank">
                  <BsBoxArrowUpRight className="inline-block ml-4 text-sm" />
                </Link>
              )}
            </p>
            <p className="text-gray-500 text-sm tracking-wider">{exp.date}</p>
            <p className="text-md my-3">{exp.desc}</p>
            <p className="text-gray-400 ">Tech Stack</p>
            <p className="text-md mt-1">
              {exp.tech_stack.map((stack: string, index: number) => (
                <span key={stack}>
                  {stack}
                  <span className="text-secondary">{`${
                    index < exp.tech_stack.length - 1 ? " | " : ""
                  }`}</span>
                </span>
              ))}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default WorkExperience;
