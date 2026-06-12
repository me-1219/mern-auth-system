import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaEnvelope,
  FaSignInAlt,
  FaKey,
  FaUserShield,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Register",
  },
  {
    icon: <FaEnvelope />,
    title: "Verify OTP",
  },
  {
    icon: <FaSignInAlt />,
    title: "Login",
  },
  {
    icon: <FaKey />,
    title: "JWT Token",
  },
  {
    icon: <FaUserShield />,
    title: "Dashboard",
  },
];

export default function AuthFlow() {
  return (
    <section className="py-28 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-white mb-16">
          Authentication Flow
        </h2>

        <div className="grid lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={step.title}
              className="relative bg-[#101826] border border-slate-800 rounded-3xl p-8 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-violet-500 flex items-center justify-center text-white text-xl">
                {step.icon}
              </div>

              <h3 className="mt-5 text-white font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-500">
                Step {index + 1}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}