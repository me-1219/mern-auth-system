import {
  ShieldCheck,
  MailCheck,
  KeyRound,
  Lock,
  Users,
  ArrowRight,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const features = [
    {
      icon: <MailCheck size={32} />,
      title: "Email Verification",
      desc: "Verify users securely with OTP-based email confirmation.",
    },
    {
      icon: <Globe size={32} />,
      title: "Google OAuth",
      desc: "One-click authentication with Google accounts.",
    },
    {
      icon: <Lock size={32} />,
      title: "JWT Security",
      desc: "Protected routes powered by secure JWT authentication.",
    },
    {
      icon: <KeyRound size={32} />,
      title: "Password Recovery",
      desc: "Forgot password and reset password via OTP.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Account Protection",
      desc: "OTP expiration and secure password hashing with bcrypt.",
    },
    {
      icon: <Users size={32} />,
      title: "User Dashboard",
      desc: "Manage authenticated user sessions and profile data.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">
            SecureAuth
          </h1>

          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-5 py-2 rounded-lg border hover:bg-slate-100 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Enterprise Authentication Platform
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-6 leading-tight">
              MERN Authentication System

            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Complete authentication solution featuring Email OTP
              Verification, Google OAuth, JWT Authentication,
              Password Recovery, Protected Routes, and Secure User
              Management.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-2 transition"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/login"
                className="border px-8 py-4 rounded-xl hover:bg-white transition"
              >
                Login
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  100%
                </h3>
                <p className="text-slate-500 text-sm">
                  Secure Login
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  JWT
                </h3>
                <p className="text-slate-500 text-sm">
                  Protected APIs
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  OTP
                </h3>
                <p className="text-slate-500 text-sm">
                  Email Verification
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-xl">
                  Account Status
                </h3>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                {[
                  "Email Verified",
                  "Google Connected",
                  "JWT Active",
                  "Protected Session",
                  "Password Secured",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
                  >
                    <ShieldCheck
                      className="text-green-500"
                      size={20}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Powerful Authentication Features
          </h2>

          <p className="text-slate-600 mt-4">
            Everything you need to build a secure user
            authentication system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
            >
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Authentication Flow */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Authentication Flow
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Register",
              "Verify Email",
              "Login",
              "JWT Token",
              "Dashboard",
            ].map((step, index) => (
              <div
                key={step}
                className="bg-blue-50 rounded-2xl p-6 text-center"
              >
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center mb-4">
                  {index + 1}
                </div>

                <h3 className="font-semibold">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Built With Modern Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              "React",
              "Vite",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JWT",
              "Passport.js",
              "Google OAuth",
              "Nodemailer",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-white shadow px-5 py-3 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">
            Ready to Get Started?
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Experience a complete authentication workflow
            with enterprise-grade security features.
          </p>

          <Link
            to="/register"
            className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Create Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-white text-xl font-bold">
            SecureAuth
          </h3>

          <p className="mt-2">
            MERN Authentication System with OTP Verification,
            Google OAuth, JWT Authentication, and Password
            Recovery.
          </p>

          <p className="mt-4 text-sm">
            © 2026 Mebtu Melak. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}