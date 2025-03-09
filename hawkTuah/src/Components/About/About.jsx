import React from "react";

const AboutAndCTA = () => {
  return (
    <>
      {/* About Section */}
      <section className="pt-24 pb-12 bg-gray-900 text-gray-400">
        <div className="container px-5 mx-auto">
          {/* Header */}
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="text-2xl font-medium sm:text-3xl title-font mb-4 text-white">
              About Us
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Revolutionizing Learning for Students Everywhere
            </p>
          </div>

          {/* Mission */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Our Mission
            </h2>
            <p className="mb-8 text-gray-400 leading-relaxed">
              At DeCram AI, we believe that learning should be fast, effective,
              and stress-free. Our cutting-edge AI platform is designed to help
              students master topics in record time, eliminating the need for
              last-minute cramming. We’re here to empower students with smarter
              tools that adapt to their needs, making education enjoyable and
              efficient.
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
            <div className="cursor-default bg-gray-800 p-6 rounded-lg shadow-md hover:[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.indigo.500)_86%,theme(colors.indigo.300)_90%,theme(colors.indigo.500)_94%,theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border transition-transform duration-300 transform hover:scale-105">
              <h3 className="mb-4 text-xl font-bold text-blue-500">
                Why DeCram AI?
              </h3>
              <p className="text-gray-400">
                Traditional study methods can be overwhelming and
                time-consuming. DeCram AI uses advanced algorithms to break down
                complex topics, deliver personalized learning paths, and
                reinforce understanding—all in a fraction of the time. Say
                goodbye to late-night cramming sessions and hello to confident,
                lasting knowledge.
              </p>
            </div>
            <div className="cursor-default bg-gray-800 p-6 rounded-lg shadow-md hover:[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.indigo.500)_86%,theme(colors.indigo.300)_90%,theme(colors.indigo.500)_94%,theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border transition-transform duration-300 transform hover:scale-105">
              <h3 className="mb-4 text-xl font-bold text-blue-500">
                Who We Are
              </h3>
              <p className="text-gray-400">
                We’re a team of innovators, educators, and tech enthusiasts
                passionate about transforming education. Founded with the vision
                of making learning accessible and efficient, DeCram AI combines
                artificial intelligence with a deep understanding of how
                students learn best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-white bg-indigo-950 opacity-90">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-semibold">
            Ready to Learn Smarter?
          </h2>
          <p className="mb-6 text-lg">
            Join thousands of students who’ve given up on cramming for good,
            with DeCram AI.
          </p>
          <a href="/signup">
            <button className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-indigo-500 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10">
                <span>Lets get started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutAndCTA;
