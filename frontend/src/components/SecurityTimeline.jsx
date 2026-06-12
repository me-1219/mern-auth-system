import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

const securityItems = [
  "Password Hashing (bcrypt)",
  "Email OTP Verification",
  "Google OAuth Login",
  "JWT Authentication",
  "Protected Routes",
  "Refresh Tokens",
];

export default function SecurityTimeline() {
  return (
    <section
      id="security"
      className="py-28 bg-[#070B14]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-white mb-16">
          Security Timeline
        </h2>

        <div className="space-y-10">
          {securityItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ x: 10 }}
              className="flex gap-6 items-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-violet-500 flex items-center justify-center text-white">
                <FaShieldAlt />
              </div>

              <div className="flex-1 bg-[#101826] border border-slate-800 p-6 rounded-2xl">
                <h3 className="text-white text-lg">
                  {item}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}