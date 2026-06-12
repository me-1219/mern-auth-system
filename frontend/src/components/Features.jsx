import { motion } from "framer-motion";
import {
  FaGoogle,
  FaUserShield,
  FaLock,
  FaKey,
  FaEnvelopeOpenText,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: <FaEnvelopeOpenText />,
    title: "Email Verification",
    desc: "Secure OTP-based email verification using Resend.",
  },
  {
    icon: <FaGoogle />,
    title: "Google OAuth",
    desc: "One-click sign in with Google accounts.",
  },
  {
    icon: <FaLock />,
    title: "JWT Security",
    desc: "Protected routes and API access using JWT.",
  },
  {
    icon: <FaKey />,
    title: "Password Recovery",
    desc: "Forgot password and OTP-based reset flow.",
  },
  {
    icon: <FaUserShield />,
    title: "Account Protection",
    desc: "Bcrypt hashing and OTP expiration handling.",
  },
  {
    icon: <FaUsers />,
    title: "User Dashboard",
    desc: "Manage user sessions and profile data.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Powerful Features
          </h2>

          <p className="text-slate-400 mt-4">
            Everything needed for modern authentication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -10 }}
              className="bg-[#101826] border border-slate-800 p-8 rounded-3xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-teal-500 to-violet-500 flex items-center justify-center text-white text-2xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-white text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-3">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}