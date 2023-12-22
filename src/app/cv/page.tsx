import Link from "next/link";
import Image from "next/image";

export default function CV() {
  return (
    <>
      <section className="relative flex flex-col gap-8 w-full max-w-5xl before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <h2 className="relative z-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-900 to-blue-900 dark:from-sky-200 dark:to-blue-200 lg:text-4xl">
          Experience
        </h2>
        <div className="group rounded-lg border px-5 py-4 border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
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
        <div className="group rounded-lg border px-5 py-4 border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
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
        <div className="group rounded-lg border px-5 py-4 border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
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
