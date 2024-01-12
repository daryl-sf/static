export default function Apps() {
  return (
    <>
      <section className="relative flex flex-col gap-8 w-full max-w-5xl">
        <h2 className="relative z-10 text-3xl font-bold lg:text-4xl bg-gradient-to-l from-sky-300 to-indigo-600 bg-clip-text text-transparent animate-fade-in-right">
          Apps
        </h2>
        <p>
          This is a list of apps I have started. As always time is limited
          outside of working hours so some apps will be in partly working order.
          Dont worry though, I will get to them eventually.
        </p>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          <a
            href="https://app.daryl-findlay.com"
            target="_blank"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 md:animate-fade-in-down animate-fade-in-left"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Note App</h2>
            <p className={`m-0 max-w-[30ch] text-sm text-gray-400`}>
              This is a simple note taking app built with Remix and hosted on
              AWS. It uses a serverless architecture and is built with React.
              <a
                href="https://github.com/daryl-sf/daryl-findlay.com"
                rel="noopener noreferrer"
                target="_blank"
                className="block visited:text-blue-600 underline text-white hover:text-purple-600"
              >
                GitHub
              </a>
            </p>
          </a>
        </div>
      </section>
    </>
  );
}
