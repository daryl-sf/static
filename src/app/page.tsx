import Header from "@/components/layout/Header";
import Image from "next/image";
import { Mada, Neuton } from "next/font/google";
import Link from "next/link";

const neuton = Neuton({
  subsets: ["latin"],
  weight: "400",
});

const mada = Mada({
  subsets: ["latin"],
  weight: "500",
});

export default function Home() {
  return (
    <>
      <Header color="yellow" title="Let's build something amazing together." />
      <div className="mx-2 sm:mx-auto -translate-y-6 w-full sm:w-11/12 max-w-4xl flex flex-col gap-12">
        <div
          id="profile"
          className="flex gap-12 items-center flex-col sm:flex-row"
        >
          <Image
            src="/images/daryl+darragh.jpg"
            alt="Daryl and Darragh"
            width={222}
            height={222}
            className="rounded-full aspect-square border-8 border-offwhite"
          />
          <div className={`${neuton.className} text-6xl text-center`}>
            Hi! I&apos;m Daryl. I&apos;m a software engineer 👨🏼‍💻
          </div>
        </div>
        <div id="expertise" className="flex flex-col gap-12">
          <section>
            <h4 className={`text-3xl ${mada.className}`}>About Me</h4>
            <div className="flex gap-20">
              <div className="shrink">
                Experienced Full Stack Developer with a proven track record in
                building scalable web and cloud applications. Proficient in
                modern frameworks and databases, with a passion for delivering
                high-quality, test-driven solutions.
              </div>
            </div>
          </section>
          <section>
            <h4 className={`text-3xl ${mada.className}`}>My Expertise</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 gap-y-10 pt-4">
              <div className="shrink grow">
                <h4 className={`text-2xl ${mada.className}`}>📱 Front End</h4>
                <p>
                  My passion is building responsive, accessible web applications
                  using modern frameworks such like React, Remix, NextJS, and
                  TailwindCSS. I have a keen eye for design and strive to create
                  beautiful, intuitive user interfaces.
                </p>
              </div>
              <div className="shrink grow">
                <h4 className={`text-2xl ${mada.className}`}>
                  🧪 QA & Testing
                </h4>
                <p>
                  Experienced in modern testing methodologies, with a strong
                  focus on unit, integration, and end-to-end testing. I leverage
                  modern testing libraries with TDD to create comprehensiv test
                  suites that ensure high-quality and robust code.
                </p>
              </div>
              <div className="shrink grow">
                <h4 className={`text-2xl ${mada.className}`}>🚦 Automation</h4>
                <p>
                  Proficient in building CI/CD pipelines to automate the
                  deployment of applications. I setup continuous integration,
                  automated builds and tests, and continuous deployment to
                  ensure fast and reliable delivery of code. Saving time and
                  effort.
                </p>
              </div>
              <div className="shrink grow">
                <h4 className={`text-2xl ${mada.className}`}>🐳 Devops</h4>
                <p>
                  Skilled in DevOps practices, including serverless
                  architectures for scalability and Dockerization for
                  consistent, containerized environments. I have experience with
                  cloud providers such as AWS, and Netlify.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
  // return (
  //   <div className="relative max-w-5xl mx-auto p-4 bg-white">
  //     <div className="absolute top-[-2rem] bg-whdite mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
  //       <Link
  //         href="/apps"
  //         className="group border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 md:animate-fade-in-down animate-fade-in-left"
  //       >
  //         <h2 className={`mb-3 text-2xl font-semibold`}>Apps</h2>
  //         <p className={`m-0 max-w-[30ch] text-sm text-gray-400`}>
  //           Discover a list of projects I have started. Some are finished. Most
  //           are not. 🏗️ Under construction
  //         </p>
  //       </Link>

  //       <a
  //         href="https://github.com/daryl-sf"
  //         className="group border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 md:animate-fade-in-up animate-fade-in-right"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className={`mb-3 text-2xl font-semibold`}>Github</h2>
  //         <p className={`m-0 max-w-[30ch] text-sm text-gray-400`}>
  //           Find out more about me on Github. I have a few repositories. Some
  //           are finished. Most are not.
  //         </p>
  //       </a>
  //       <Link
  //         href="/cv"
  //         className="group border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 md:animate-fade-in-down animate-fade-in-left"
  //       >
  //         <h2 className={`mb-3 text-2xl font-semibold`}>CV</h2>
  //         <p className={`m-0 max-w-[30ch] text-sm text-gray-400`}>
  //           Explore the path I have taken to get to where I am today. I&apos;ve
  //           had a few jobs. Most are finished. One is not.
  //         </p>
  //       </Link>
  //     </div>
  //   </div>
  // );
}
