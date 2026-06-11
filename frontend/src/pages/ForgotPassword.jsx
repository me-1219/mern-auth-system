import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../services/authService";
import toast from "react-hot-toast";
import {
  Mail,
  ShieldCheck,
  Loader2,
} from "lucide-react";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return toast.error(
        "Email is required"
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return toast.error(
        "Please enter a valid email address"
      );
    }

    try {
      setLoading(true);

      await forgotPassword({
        email,
      });

      toast.success(
        "Verification code sent successfully"
      );

      navigate(
        "/reset-password",
        {
          state: { email },
        }
      );
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Failed to send code"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
            <Mail
              className="text-blue-600"
              size={30}
            />
          </div>
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-slate-900">
          Forgot Password
        </h1>

        <p className="text-center text-slate-500 mt-2">
          Enter your email address and we'll
          send you a 6-digit verification code.
        </p>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm text-blue-700">
            Make sure you enter the email
            associated with your account.
          </p>

          <p className="text-xs mt-2 text-blue-600">
            If you don't receive the email
            within a few minutes, check your
            Spam or Junk folder.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-6"
        >
          <label className="block text-sm font-medium mb-2 text-slate-700">
            Email Address
          </label>

          <div className="relative">

            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              className="w-full border rounded-xl py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition flex justify-center items-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Sending...
              </>
            ) : (
              "Send Verification Code"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
          <ShieldCheck size={16} />
          Secure password recovery process
        </div>

      </div>
    </div>
  );
}