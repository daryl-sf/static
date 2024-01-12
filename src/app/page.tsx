import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-21rem)] flex-col items-center justify-around">
      <div className="relative flex place-items-center h-80 w-full bg-slate-900  rounded-xl items-center bg-transparent">
        <h4 className="relative z-10 text-4xl font-bold text-center lg:text-6xl mx-auto bg-gradient-to-l from-sky-300 to-indigo-600 bg-clip-text text-transparent animate-fade-in-down">
          Welcome
        </h4>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <Link
          href="/apps"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 md:animate-fade-in-down animate-fade-in-left"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Apps</h2>
          <p className={`m-0 max-w-[30ch] text-sm text-gray-400`}>
            Discover a list of projects I have started. Some are finished. Most
            are not. 🏗️ Under construction
          </p>
        </Link>

        <a
          href="https://github.com/daryl-sf"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 md:animate-fade-in-up animate-fade-in-right"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Github</h2>
          <p className={`m-0 max-w-[30ch] text-sm text-gray-400`}>
            Find out more about me on Github. I have a few repositories. Some
            are finished. Most are not.
          </p>
        </a>
        <Link
          href="/cv"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 md:animate-fade-in-down animate-fade-in-left"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>CV</h2>
          <p className={`m-0 max-w-[30ch] text-sm text-gray-400`}>
            Explore the path I have taken to get to where I am today. I&apos;ve
            had a few jobs. Most are finished. One is not.
          </p>
        </Link>
      </div>
    </div>
  );
}
