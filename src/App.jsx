function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-200 to-cyan-300 dark:from-slate-950 dark:via-sky-950 dark:to-blue-950 p-6">
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-white/20 dark:bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col md:flex-row">
            <div className="overflow-hidden md:w-1/2">
              <img
                src="./src/assets/EversupportCoPost.png"
                alt="Ever Support Co"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            <div className="flex flex-col justify-center md:w-1/2 p-8 lg:p-10">
              <span className="mb-3 w-fit rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-700 dark:text-blue-300">
                Company Profile
              </span>

              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
                First Tailwind Css Project!
              </h1>

              <p className="mb-6 leading-8 text-slate-600 dark:text-slate-300">
                This project demonstrates my first steps with Tailwind CSS. I
                focused on building the layout and logic myself while improving
                the visual design with modern utility classes.
              </p>

              <a
                href="https://itsmaedehskh.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-fit rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/40"
              >
                View My Projects
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
