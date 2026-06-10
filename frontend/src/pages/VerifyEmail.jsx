import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyEmail } from "../services/authService";
import { Mail, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";

export default function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (code.length !== 6) {
      return toast.error("Please enter a valid 6-digit code");
    }

    try {
      setLoading(true);

      await verifyEmail({
        email,
        code,
      });

      toast.success("Email verified successfully");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Verification failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
              <Mail className="w-10 h-10 text-blue-600" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-800">
              Verify Your Email
            </h1>

            <p className="text-slate-500 mt-3">
              We've sent a verification code to
            </p>

            <p className="font-semibold text-blue-600 mt-1 break-all">
              {email}
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleVerify}
            className="mt-8"
          >
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Verification Code
            </label>

            <input
              type="text"
              maxLength={6}
              value={code}
              onChange={(e) =>
                setCode(
                  e.target.value.replace(/\D/g, "")
                )
              }
              placeholder="Enter 6-digit code"
              className="w-full h-14 text-center text-xl tracking-[0.5em] border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 h-14 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-semibold transition-all duration-300"
            >
              {loading ? (
                "Verifying..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <ShieldCheck size={20} />
                  Verify Email
                </span>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Didn't receive the code?
            </p>

            <button
              type="button"
              className="mt-1 text-blue-600 hover:text-blue-700 font-medium"
            >
              Resend Code
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Secure email verification powered by OTP authentication
        </p>
      </div>
    </div>
  );
}