import { FaGithub, FaStar } from "react-icons/fa";

export default function GitHubShowcase() {
  return (
    <section className="py-28 bg-[#070B14]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#101826] border border-slate-800 rounded-3xl p-10">
          <div className="flex items-center gap-3 mb-6">
            <FaGithub className="text-3xl text-white" />

            <h2 className="text-4xl font-bold text-white">
              GitHub Repository
            </h2>
          </div>

          <p className="text-slate-400 mb-8">
            Open source MERN Authentication System
            with Google OAuth, Email Verification,
            JWT Authentication, Protected Routes,
            and Password Recovery.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-[#151F32] p-4 rounded-xl text-slate-300">
              ✓ Email Verification
            </div>

            <div className="bg-[#151F32] p-4 rounded-xl text-slate-300">
              ✓ Google OAuth
            </div>

            <div className="bg-[#151F32] p-4 rounded-xl text-slate-300">
              ✓ JWT Authentication
            </div>

            <div className="bg-[#151F32] p-4 rounded-xl text-slate-300">
              ✓ Password Recovery
            </div>
          </div>

          <a
            href="https://github.com/me-1219/mern-auth-system"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-violet-500 text-white font-semibold"
          >
            <FaStar />
            View Repository
          </a>
        </div>
      </div>
    </section>
  );
}