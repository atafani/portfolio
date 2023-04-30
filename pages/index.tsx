import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Home() {
  return (
    <main
      className={`min-h-screen px-10 lg:px-40 py-20 flex flex-col justify-center  `}
    >
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="uppercase text-primary font-medium text-2xl lg:text-3xl">
            Anxhela Tafani
          </p>
          <p className="text-secondary text-xs lg:text-sm tracking-[0.25rem] lg:tracking-[0.35rem]">
            Software Developer
          </p>
        </div>
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
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center flex-wrap">
        <div className="w-full lg:w-2/3 pr-0 lg:pr-10">
          <p className="opacity-50 my-2">Based in Tirana, Albania.</p>
          <p>
            Dedicated to creating valuable products and actively participating
            in the entire development process of web applications. Highly
            skilled in full-stack development, overseeing, and providing
            technical expertise for enterprise-level applications.
          </p>
          <p className="opacity-50 mt-4">Tech Stack</p>
          <p>JavaScript | React | Next | Node | C#</p>
          <p className="opacity-50 mt-4">Interested in</p>
          <p> Web3 | Solidity</p>
        </div>
        <div className="relative flex place-items-center w-full lg:w-1/3 my-10 lg:my-0">
          <div className="border rounded-sm p-4 border-primary border-opacity-20 w-full sm:w-1/2 lg:w-full mx-auto">
            <div className="border rounded-sm p-4  border-primary border-opacity-40">
              <div className="border rounded-sm p-4  border-primary border-opacity-60">
                <Image
                  className="rounded-sm"
                  src="/images/profile.png"
                  alt="Next.js Logo"
                  width={1200}
                  height={600}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-primary mt-10">
        <p className="lowercase inline-block mr-5">work experience</p>
        <p className="lowercase inline-block">projects</p>
      </div>
    </main>
  );
}
