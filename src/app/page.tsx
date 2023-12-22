import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image
          className="relative"
          src="/logo.svg"
          alt="Next.js Logo"
          width={48}
          height={28}
          priority
        />
        <div className="flex w-full items-end justify-center bg-gradient-to-t lg:static lg:h-auto lg:w-auto lg:bg-none">
          Daryl Findlay
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h4 className="relative z-10 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-sky-900 to-blue-900 dark:from-sky-200 dark:to-blue-200 lg:text-6xl">
          Welcome
        </h4>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="https://app.daryl-findlay.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Apps</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover a list of projects I have started. Some are finished. Most
            are not.
          </p>
        </a>

        <a
          href="https://github.com/daryl-sf"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Github</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find out more about me on Github. I have a few repositories. Some
            are finished. Most are not.
          </p>
        </a>
        <Link
          href="/cv"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>CV</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the path I have taken to get to where I am today. I&apos;ve
            had a few jobs. Most are finished. One is not.
          </p>
        </Link>
      </div>
    </main>
  );
}
