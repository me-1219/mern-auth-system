import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Frontend Developer",
    text: "The authentication flow is clean and easy to integrate."
  },
  {
    name: "Backend Engineer",
    text: "Excellent JWT and OTP implementation."
  },
  {
    name: "Startup Founder",
    text: "Perfect starter authentication template."
  }
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-white mb-16">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-[#101826] border border-slate-800 p-8 rounded-3xl"
            >
              <FaQuoteLeft className="text-teal-400 text-2xl mb-4" />

              <p className="text-slate-400">
                {item.text}
              </p>

              <h4 className="text-white font-semibold mt-6">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}