import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center flex-wrap">
      <div className="w-full lg:w-2/3 pr-0 lg:pr-10">
        <p className="opacity-50 my-2">Based in Tirana, Albania.</p>
        <p>
          Dedicated to creating valuable products and actively participating in
          the entire development process of web applications. Highly skilled in
          full-stack development, overseeing, and providing technical expertise
          for enterprise-level applications.
        </p>
        <p className="opacity-50 mt-4">Tech Stack</p>
        <p>JavaScript | Next.js | Node.js | C#</p>
        <p className="opacity-50 mt-4">Interested in</p>
        <p> Web3 | Blockchain</p>
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
  );
};
export default Home;
