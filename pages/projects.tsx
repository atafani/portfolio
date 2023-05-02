import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
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
      "Web Application replicating the core features of the popular streaming platform using Next.js, React, and other supporting technologies.",
    desc: (
      <p>
        Replicated key features of Netflix, such as browsing movies and TV
        shows, user authentication, and video playback. <br />
        Implemented a responsive design that works well on various devices and
        screen sizes.
        <br />
        Utilized Next.js features like server-side rendering for improved
        performance and SEO.
      </p>
    ),
    tech_stack: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "https://netflix-clone-at.vercel.app/",
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
          <div key={exp.id}>
            <p className="text-primary text-lg">{exp.title}</p>
            <div className="group relative w-fit p-3 my-5 rounded-md">
              <Image
                src={exp.image_url}
                width={400}
                height={160}
                alt={exp.title}
                className="rounded-sm hover:cursor-pointer"
              />
              <div className="w-0 flex flex-col gap-3 justify-center items-center transition-all duration-500 ease-linear overflow-y-hidden absolute top-0 left-0 h-full bg-black/80  z-10  group-hover:w-full text-xs text-white font-bold tracking-[0.4rem]">
                <p
                  className="hover:cursor-pointer"
                  onClick={() => {
                    console.log("clicked", exp.id);
                    setSelectedId(exp.id);
                  }}
                  id="open_modal"
                >
                  details
                </p>
                <Link href={exp.link} target="_blank">
                  view
                </Link>
              </div>
              <div className="absolute left-0 bottom-0 z-20 w-0 transition-all duration-500 ease-in border-0 group-hover:w-full  bg-primary/40 p-0 group-hover:p-[0.5px]"></div>
              <div className="absolute left-0 bottom-0 z-20 h-0 transition-all duration-500 ease-in border-0 group-hover:h-full  bg-primary/40 p-0 group-hover:p-[0.5px]"></div>
              <div className="absolute right-0 top-0 z-20 h-0 transition-all duration-500 ease-in border-0 group-hover:h-full  bg-primary/40 p-0 group-hover:p-[0.5px]"></div>
              <div className="absolute left-0 top-0 z-20 w-0 transition-all duration-500 ease-in border-0 group-hover:w-full  bg-primary/40 p-0 group-hover:p-[0.5px]"></div>
            </div>
            <div
              id="modal"
              className={`${
                selectedId === exp.id ? "left-1/2" : "-left-full"
              } fixed top-1/2 transition-all ease-in-out delay-300  transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white text-slate-900 p-10 rounded-md my-10`}
            >
              <p className="text-xs font-black">{exp.subtitle}</p>
              <p className="text-md my-3">{exp.desc}</p>
              <p className="text-slate-800 font-bold ">Tech Stack</p>
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
          </div>
        );
      })}
    </div>
  );
};
export default Projects;
