import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { GoPrimitiveSquare } from "react-icons/go";
type Project = {
  id: number;
  image_url: string;
  title: string;
  subtitle: string;
  desc: ReactNode;
  tech_stack: string[];
  link: string;
};
const PROJECTS: Project[] = [
  {
    id: 1,
    image_url: "/images/netflix-clone.png",
    title: "Netflix Clone ",
    subtitle:
      "Web application replicating the core features of the popular streaming platform using Next.js, Tailwind CSS, and MongoDB, to showcase my technical skills, understanding of UX/Ui, and the ability to create a complex and feature-rich system.",
    desc: (
      <ul>
        <li className="flex flex-row gap-2 items-center my-1">
          <GoPrimitiveSquare className="text-xs text-secondary" /> Implemented
          the user authentication flow using next/auth.
        </li>
        <li className="flex flex-row gap-2 items-center my-1">
          <GoPrimitiveSquare className="text-xs text-secondary" /> Developed a
          responsive design that works well on various devices and screen sizes.
        </li>
      </ul>
    ),
    tech_stack: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "https://netflix-clone-at.vercel.app/",
  },
  {
    id: 2,
    image_url: "/images/jumping-horse.png",
    title: "Jumping Horse Game",
    subtitle:
      "A simple JavaScript game featuring a horse moving from left to right, encountering fences that the player must help the horse avoid by making it jump.",
    desc: (
      <ul>
        <li className="flex flex-row gap-2 items-center my-1">
          <GoPrimitiveSquare className="text-xs text-secondary" />{" "}
          {`Implemented
          the complexity of player interactions and game dynamics using
          JavaScript's classes.`}
        </li>
        <li className="flex flex-row gap-2 items-center my-1">
          <GoPrimitiveSquare className="text-xs text-secondary" /> Utilized
          local storage to handle user sessions.
        </li>
      </ul>
    ),
    tech_stack: ["JavaScript", "CSS"],
    link: "https://jumping-horse.netlify.app/",
  },
];
const Projects: NextPage = () => {
  const [selectedId, setSelectedId] = useState<number | undefined>();

  const handleResetId = (event: any) => {
    event.target.id !== "modal" &&
      event.target.id !== "open_modal" &&
      setSelectedId(undefined);
  };

  useEffect(() => {
    window.addEventListener("click", handleResetId);
    return () => window.removeEventListener("click", handleResetId);
  }, []);

  return (
    <div className="flex flex-col py-10 gap-14">
      {PROJECTS.map((exp: Project) => {
        return (
          <div
            key={exp.id}
            className="grid lg:grid-cols-3 lg:flex-row items-center gap-10"
          >
            <div className="group relative w-fit p-3 my-5 rounded-md">
              <Image
                src={exp.image_url}
                width={400}
                height={160}
                alt={exp.title}
                className="rounded-sm hover:cursor-pointer"
              />
              <div className="flex flex-col gap-3 justify-center items-center transition-all duration-500 ease-linear overflow-y-hidden absolute top-0 left-0 h-full bg-black/30 group-hover:bg-black/80 w-full z-10 text-xs text-white font-bold tracking-[0.4rem]">
                <Link
                  href={exp.link}
                  target="_blank"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-150"
                >
                  view
                </Link>
              </div>
              <div className="absolute left-0 bottom-0 z-20 w-0 transition-all duration-500 ease-in border-0 group-hover:w-full  bg-primary/40 p-0 group-hover:p-[0.5px]"></div>
              <div className="absolute left-0 bottom-0 z-20 h-0 transition-all duration-500 ease-in border-0 group-hover:h-full  bg-primary/40 p-0 group-hover:p-[0.5px]"></div>
              <div className="absolute right-0 top-0 z-20 h-0 transition-all duration-500 ease-in border-0 group-hover:h-full  bg-primary/40 p-0 group-hover:p-[0.5px]"></div>
              <div className="absolute left-0 top-0 z-20 w-0 transition-all duration-500 ease-in border-0 group-hover:w-full  bg-primary/40 p-0 group-hover:p-[0.5px]"></div>
            </div>
            <div className="lg:col-span-2">
              <p className="text-primary text-xl">{exp.title}</p>
              <p className="text-xs font-black my-3 opacity-80">
                {exp.subtitle}
              </p>
              <p className="text-md my-4">{exp.desc}</p>
              <p className="opacity-50 font-bold">Tech Stack</p>
              <p className="text-sm mt-1">
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
          </div>
        );
      })}
    </div>
  );
};
export default Projects;
