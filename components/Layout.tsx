import { ReactNode, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

type LayoutProps = {
  children: ReactNode;
};
export const Layout = (props: LayoutProps) => {
  const { children } = props;
  const router = useRouter();
  useEffect(() => {
    console.log(router, router.pathname.includes("work-experience"));
  }, []);
  return (
    <main
      className={`min-h-screen px-10 lg:px-40 py-10 flex flex-col justify-center relative`}
    >
      <div className="flex flex-row justify-between items-center sticky top-0 py-10 bg-black z-40">
        <Link href="/">
          <p className="uppercase text-primary font-medium text-2xl lg:text-3xl">
            Anxhela Tafani
          </p>
          <p className="text-secondary text-xs lg:text-sm tracking-[0.25rem] lg:tracking-[0.35rem]">
            Software Developer
          </p>
        </Link>
        <div className="bg-none lg:bg-gradient-to-tl from-primary/20 animate-bg-gradient rounded-sm lg:p-[0.8px] lg:fixed left-0 top-1/2 transform lg:-translate-y-1/2 z-30 lg:pl-0 ">
          <div className="lg:p-3 lg:pl-0 bg-black">
            <div className="bg-none rounded-sm lg:p-[0.8px]  lg:bg-gradient-to-tl from-primary/60 animate-bg-gradient  lg:pl-0">
              <div className="lg:p-3 lg:pl-0 bg-black">
                <div className="bg-none rounded-sm lg:p-[0.8px] lg:pl-0 lg:bg-gradient-to-tl from-primary animate-bg-gradient">
                  <div className="lg:p-3 bg-black  flex flex-row lg:flex-col gap-3">
                    <a
                      href="https://github.com/atafani"
                      className="block text-primary"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tafanianxhela/"
                      className="block text-primary"
                      target="_blank"
                    >
                      <AiFillLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}

      <div className="mt-10 sticky bottom-0 py-10 bg-black z-40">
        <Link href="/work-experience">
          <p
            className={`lowercase inline-block mr-5 ${
              router.pathname.includes("work-experience")
                ? "text-primary"
                : "text-secondary"
            }`}
          >
            work experience
          </p>
        </Link>
        <Link href="/projects">
          <p
            className={`lowercase inline-block ${
              router.pathname.includes("projects")
                ? "text-primary"
                : "text-secondary"
            }`}
          >
            projects
          </p>
        </Link>
      </div>
    </main>
  );
};
