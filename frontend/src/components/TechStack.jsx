import {
  FaReact,
  FaNodeJs,
  FaGoogle,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJsonwebtokens,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Express",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens />,
  },
  {
    name: "Google OAuth",
    icon: <FaGoogle />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
];

export default function TechStack() {
  return (
    <section className="py-28 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-white">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-6 mt-16">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-[#101826] border border-slate-800 rounded-3xl p-8 text-center"
            >
              <div className="text-4xl text-teal-400 flex justify-center mb-4">
                {tech.icon}
              </div>

              <p className="text-white">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}