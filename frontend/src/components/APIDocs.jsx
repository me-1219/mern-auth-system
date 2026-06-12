import { FaCode } from "react-icons/fa";

const endpoints = [
  "POST /api/auth/register",
  "POST /api/auth/verify-email",
  "POST /api/auth/login",
  "POST /api/auth/logout",
  "POST /api/auth/forgot-password",
  "POST /api/auth/reset-password",
  "POST /api/auth/all",
];

export default function APIDocs() {
  return (
    <section id="docs" className="py-28 bg-[#0B1020]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-white">
            API Documentation
          </h2>

          <p className="text-slate-400 mt-4">
            Clean REST API endpoints for authentication.
          </p>
        </div>

        <div className="bg-[#101826] border border-slate-800 rounded-3xl p-8">
          {endpoints.map((endpoint) => (
            <div
              key={endpoint}
              className="flex items-center gap-4 p-4 border-b border-slate-800 last:border-0"
            >
              <FaCode className="text-teal-400" />

              <code className="text-slate-300">
                {endpoint}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}