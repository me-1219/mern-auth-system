import {
  FaGithub,
  FaBug,
  FaCodeBranch,
  FaLightbulb,
} from "react-icons/fa";

export default function OpenSource() {
  return (
    <section className="py-28 bg-[#070B14]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Open Source & Community Driven
          </h2>

          <p className="text-slate-400 mt-4">
            Contributions and feedback are always welcome.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#101826] p-8 rounded-3xl border border-slate-800">
            <FaBug className="text-3xl text-red-400 mb-4" />
            <h3 className="text-white text-xl font-semibold">
              Report Issues
            </h3>
          </div>

          <div className="bg-[#101826] p-8 rounded-3xl border border-slate-800">
            <FaLightbulb className="text-3xl text-yellow-400 mb-4" />
            <h3 className="text-white text-xl font-semibold">
              Suggest Features
            </h3>
          </div>

          <div className="bg-[#101826] p-8 rounded-3xl border border-slate-800">
            <FaCodeBranch className="text-3xl text-green-400 mb-4" />
            <h3 className="text-white text-xl font-semibold">
              Submit PRs
            </h3>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/me-1219/mern-auth-system"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-violet-500 text-white font-semibold"
          >
            <FaGithub />
            Contribute on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}