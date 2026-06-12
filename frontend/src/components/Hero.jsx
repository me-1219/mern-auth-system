import { motion } from "framer-motion";
import {
  FaGithub,
  FaGoogle,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJsonwebtokens,
} from "react-icons/si";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#070B14] py-28">
      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-teal-500/20 blur-[120px]" />

        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-violet-500/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-400 text-sm">
              🔐 Enterprise Authentication System
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-white">
              Secure Authentication

              <span className="block bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
                For Modern Apps
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-400 max-w-xl leading-relaxed">
              Complete MERN authentication system with Email OTP
              Verification, Google OAuth, JWT Security,
              Password Recovery, Protected Routes, and User
              Management.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/register"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-violet-500 text-white flex items-center gap-2 font-semibold hover:scale-105 transition"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <a
                href="#"
                className="px-8 py-4 rounded-2xl border border-slate-700 text-white hover:bg-slate-800 transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/me-1219/mern-auth-system"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl border border-slate-700 text-white flex items-center gap-2 hover:bg-slate-800 transition"
              >
                <FaGithub />
                GitHub
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14">
              <div>
                <h3 className="text-3xl font-bold text-teal-400">
                  JWT
                </h3>
                <p className="text-slate-500 text-sm">
                  Secure Tokens
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-violet-400">
                  OTP
                </h3>
                <p className="text-slate-500 text-sm">
                  Email Verification
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-amber-400">
                  OAuth
                </h3>
                <p className="text-slate-500 text-sm">
                  Google Login
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-[#101826]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-white">
                  Authentication Status
                </h3>

                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                {[
                  "Email Verified",
                  "Google Connected",
                  "JWT Generated",
                  "Protected Session",
                  "Password Secured",
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#151F32] rounded-2xl p-4 text-slate-300"
                  >
                    ✓ {item}
                  </motion.div>
                ))}
              </div>

              {/* Tech Icons */}
              <div className="grid grid-cols-5 gap-4 mt-8">
                <div className="text-3xl text-cyan-400 flex justify-center">
                  <FaReact />
                </div>

                <div className="text-3xl text-green-500 flex justify-center">
                  <FaNodeJs />
                </div>

                <div className="text-3xl text-green-400 flex justify-center">
                  <SiMongodb />
                </div>

                <div className="text-3xl text-yellow-400 flex justify-center">
                  <FaGoogle />
                </div>

                <div className="text-3xl text-violet-400 flex justify-center">
                  <SiJsonwebtokens />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}