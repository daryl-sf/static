import Link from "next/link";
import Image from "next/image";

export default function CV() {
  return (
    <>
      <section className="relative flex flex-col gap-8 w-full max-w-5xl">
        <h2 className="relative z-10 text-3xl font-bold lg:text-4xl bg-gradient-to-l from-sky-300 to-indigo-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="group rounded-lg border px-5 py-4 border-neutral-700 bg-neutral-800/30">
          <div className="flex gap-10 mb-4 items-center flex-wrap">
            <Image
              src="/images/daryl.jpeg"
              alt="Picture of the author"
              width={200}
              height={200}
              className="rounded-full mx-auto md:mx-0"
            />
            <div>
              <h3 className={`mb-3 text-2xl font-semibold text-[#bae6fd]`}>
                Daryl Findlay
              </h3>
              <p className={`font-semibold opacity-50 mb-2`}>
                Software Engineer
              </p>
              <p className={`font-semibold opacity-50 mb-2`}>Derry, UK</p>
              <p
                className={`font-semibold opacity-80 mb-2 flex gap-4 flex-wrap`}
              >
                <a
                  href="https://www.linkedin.com/in/daryl-findlay-3b08238a/"
                  className=" text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
                <span className="opacity-80 hidden sm:block">|</span>
                <a
                  href="mailto:darylfindlay@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  darylfindlay@gmail.com
                </a>
              </p>
            </div>
          </div>
          <p className={`mb-6`}>
            I am a Senior Software Engineer with over 10 years of experience
            building web applications. I have a passion for building
            user-friendly, performant and accessible web applications. I am
            currently working as a Senior Software Engineer at Songtradr.
          </p>
          <p className={`mb-6`}>
            I am a Full Stack Senior Software Developer with extensive
            experience in developing cloud and web applications. My expertise
            lies in test-driven development and I have proficiency in various
            programming languages such as JavaScript, TypeScript, and Ruby on
            Rails. I am adept at working with popular frameworks and libraries
            such as NodeJS, ExpressJS, React, NextJS, Remix, and Vite. My
            knowledge of SQL and no SQL databases including Postgres, MySql and
            Dynamodb allows me to design and develop efficient data structures.
            I am well-versed in RESTful web services and GraphQL, and have
            experience working with testing frameworks such as Jest, Vitest,
            Enzyme, RSpec, Cypress, Playwright and React Testing Library. I also
            have experience with containerization using Docker. I hold a
            Bachelor of Science in Computer Science from the University of
            Ulster.
          </p>
          <p className={`mb-6`}>
            I am a big fan of React, TypeScript, Remix, Next.js, Tailwind CSS
            and GraphQL.
          </p>
        </div>
      </section>

      <section className="relative flex flex-col gap-8 w-full max-w-5xl">
        <h2 className="relative z-10 text-3xl font-bold lg:text-4xl bg-gradient-to-l from-sky-300 to-indigo-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="group rounded-lg border px-5 py-4 border-neutral-700 bg-neutral-800/30">
          <h3 className={`mb-3 text-2xl font-semibold text-[#bae6fd]`}>
            Songtradr
          </h3>
          <p className={`font-semibold opacity-50 mb-2`}>
            Senior Software Engineer | 2023 - Present
          </p>
          <p>
            I am currently working as a Senior Software Engineer at Songtradr. I
            am working on the Design Systems team building out data
            visualisations and Songtradr Component Library.
          </p>
        </div>
        <div className="group rounded-lg border px-5 py-4 border-neutral-700 bg-neutral-800/30">
          <h3 className={`mb-3 text-2xl font-semibold text-[#bae6fd]`}>
            SquareFoot
          </h3>
          <p className={`font-semibold opacity-50 mb-2`}>
            Senior Software Engineer | 2020 - 2023
          </p>
          <p className={`mb-6`}>
            In my recent role, I spearheaded several key initiatives that
            significantly enhanced our technological capabilities and user
            experience. Notably, I implemented Twilio chat functionality, a
            strategic move that substantially improved client handoff processes.
            I also redesigned and developed a new search system, utilizing
            Elastic Search, which optimized search efficiency and accuracy. A
            major project was the &lsquo;Geoboundable&rsquo; initiative, where I
            revamped geobound search functionality by setting precise boundaries
            for all our markets and subdivisions, improving location-specific
            search results. Additionally, I led the migration of our legacy
            React application to a Next.js framework, streamlining performance
            and scalability. I undertook the redesign of critical SEO pages,
            including URL modifications, to boost our online visibility. Lastly,
            I integrated TypeScript into all applicable projects, enhancing code
            reliability and maintainability. These contributions have been
            instrumental in elevating our platform&apos;s overall performance
            and user satisfaction.
          </p>
          <p className={`font-semibold opacity-50 mb-2`}>
            Software Engineer | 2018 - 2020
          </p>
          <p>
            I joined SquareFoot as a front end focused full stack engineer.
            Working tech a tech stack of React front end that integrated with a
            Ruby on Rails backend using GraphQL interface.
          </p>
        </div>
        <div className="group rounded-lg border px-5 py-4 border-neutral-700 bg-neutral-800/30">
          <h3 className={`mb-3 text-2xl font-semibold text-[#bae6fd]`}>
            Allstate
          </h3>
          <p className={`font-semibold opacity-50 mb-2`}>
            Senior Agile Software Engineer | 2017 - 2018
          </p>
          <p className={`mb-6`}>
            In my role at the Belfast lab, I initially contributed to the
            SmartServe project, where I honed a range of valuable technical
            skills. Building on this experience, I transitioned to a leading
            position in the Mimic project, quickly establishing myself as a
            cornerstone of the team. In this capacity, I led the adoption of
            unit-tested React components, markedly enhancing the project&apos;s
            code quality and coverage. My commitment to mentorship was a key
            aspect of my leadership, as I dedicated myself to guiding all team
            members, with a special focus on nurturing the development of
            assigned students. Further bolstering my leadership capabilities, I
            underwent specialized communication training, which has been
            instrumental in effectively engaging with my team and stakeholders.
            My journey from SmartServe to Mimic exemplifies my growth in
            technical expertise and my evolution into a mentor and skilled
            communicator, pivotal in driving project success and team
            development.
          </p>
          <p className={`font-semibold opacity-50 mb-2`}>
            Software Engineer | 2014 - 2017
          </p>
          <p className={`mb-6`}>
            I joined the Enterprise Orchestration Platform team to develop the
            Orchestration Operations Web Portal, Server Provisioning Dashboard
            and ANI Invoicing Tool.
          </p>
          <p className={`font-semibold opacity-50 mb-2`}>
            Infrastructure Engineer | 2013 - 2014
          </p>
          <p>
            The main responsibilities in this role was to build, enhance and
            update accurate reports and scorecards, to analyse and consult on
            business data.
          </p>
        </div>
      </section>
    </>
  );
}
