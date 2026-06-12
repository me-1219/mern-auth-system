import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050912] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white">
              SecureAuth
            </h3>

            <p className="text-slate-400 mt-3 max-w-md">
              Modern MERN Authentication System
              with Email Verification, Google OAuth,
              JWT Security, and Password Recovery.
            </p>
          </div>

          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/me-1219"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mebit-melak-gashaye-31b2b1379/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:melakmebit75@gmail.com"
              className="text-slate-400 hover:text-white"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          © 2026 Mebtu Melak. Built with React, Node.js, MongoDB, JWT, Google OAuth and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}