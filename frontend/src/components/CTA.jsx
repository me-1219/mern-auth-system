import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-r from-teal-600 to-violet-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-black text-white">
          Ready To Build Secure Apps?
        </h2>

        <p className="text-white/80 mt-6 text-xl">
          Authentication shouldn't take weeks.
          Launch your next project faster.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            to="/register"
            className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold"
          >
            Get Started
          </Link>

          <a
            href="https://github.com/me-1219/mern-auth-system"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border border-white text-white rounded-2xl"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}