import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-[#070B14]/80 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-violet-500" />

          <h1 className="text-xl font-bold text-white">
            SecureAuth
          </h1>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features">Features</a>
          <a href="#security">Security</a>
          <a href="#docs">API Docs</a>
          <a href="#faq">FAQ</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/me-1219/mern-auth-system"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-slate-300 hover:text-white"
          >
            <FaGithub />
            GitHub
          </a>

          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-slate-700 text-white hover:bg-slate-800 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-violet-500 text-white font-medium"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}