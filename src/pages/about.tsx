export function About() {
  return (
    <div className="w-full lg:w-fit pl-0 lg:pl-30 pt-14 lg:pt-20 mb-40 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-10 lg:mb-16">
        <h2 className="text-3xl lg:text-4xl font-semibold text-white">
          about-me
        </h2>

        <div className="w-full sm:w-40 lg:w-140 h-0.5 bg-[#C778DD]" />
      </div>

      <div>
        <div>
          <div className="space-y-6 lg:space-y-8 text-[#ABB2BF] text-base sm:text-lg lg:text-xl leading-8 lg:leading-10">
            <span>Who am i?</span>
            <p>
              I'm Oussama, a Software Engineer from Morocco with a strong focus
              on backend engineering, artificial intelligence, and building
              practical software systems. I enjoy understanding how things work
              beneath the surface and turning ideas into reliable, maintainable
              applications.
            </p>

            <p>
              My journey into software engineering started with computer science
              and programming fundamentals. I developed a strong foundation in C
              and C++, which helped me understand algorithms, memory management,
              system architecture, and problem-solving at a deeper level.
            </p>

            <p>
              I later expanded my focus toward Python and web development,
              working with technologies such as Django, Flask, and FastAPI for
              backend development, alongside React, TypeScript, and modern web
              technologies for the frontend. This has allowed me to build
              applications from both the system and user perspectives.
            </p>

            <p>
              A significant part of my development as an engineer came through
              project-based learning at 42/1337. Building projects such as a C++
              web server and Docker-based infrastructure taught me how to learn
              independently, debug complex problems, and understand the systems
              behind the abstractions I use every day.
            </p>

            <p>
              More recently, my interests have moved toward artificial
              intelligence and intelligent applications. I've been working with
              LLMs, RAG pipelines, embeddings, vector databases, and AI agents,
              combining these technologies with traditional backend engineering
              to build applications capable of working with real-world data.
            </p>

            <p>
              Some of the projects I've built include an AI-powered RAG
              assistant, a cryptocurrency analysis agent, a C++ web server,
              Docker-based infrastructure, and full-stack applications combining
              React with Python backends. Building these projects has taught me
              that becoming a better engineer is not just about learning more
              technologies, but about understanding trade-offs, designing
              reliable systems, and solving problems effectively.
            </p>

            <p>
              Today, I'm focused on growing as a backend and AI engineer. I'm
              particularly interested in the intersection between software
              engineering and artificial intelligence, while continuing to
              strengthen my knowledge of algorithms, statistics, probability,
              data analysis, and machine learning.
            </p>

            <p>
              My goal is to build software that is technically solid, useful,
              and capable of solving real-world problems.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-10">
            <a
              href="https://jxhrtcjl3epzp802.public.blob.vercel-storage.com/info/Oussama_El-Asri_Resume.pdf"
              download
              target="_blank"
              className="w-full sm:w-35 inline-flex items-center 
          justify-center px-5 py-2 text-sm font-medium 
          text-white border-2 border-[#C778DD] rounded-xl
          transition-all duration-300 hover:bg-[#C778DD] 
          hover:text-[#09090B] hover:shadow-[0_0_20px_rgba(200,120,221,0.35)] 
          active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C778DD] 
          focus:ring-offset-2 focus:ring-offset-[#09090B]"
            >
              Resume
            </a>

            <a
              href="https://jxhrtcjl3epzp802.public.blob.vercel-storage.com/info/Oussama_El-Asri_CV.pdf"
              download
              target="_blank"
              className="w-full sm:w-35 inline-flex items-center 
          justify-center px-5 py-2 text-sm font-medium 
          text-white border-2 border-[#C778DD] rounded-xl
          transition-all duration-300 hover:bg-[#C778DD] 
          hover:text-[#09090B] hover:shadow-[0_0_20px_rgba(200,120,221,0.35)] 
          active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C778DD] 
          focus:ring-offset-2 focus:ring-offset-[#09090B]"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
