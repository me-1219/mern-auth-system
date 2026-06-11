import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../services/authService";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await forgotPassword({
        email,
      });

      toast.success(
        "OTP sent successfully"
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
          ?.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">
          Forgot Password
        </h1>

        <p className="text-gray-500 mb-6">
          Enter your email address to receive a reset code.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <button
            className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg"
          >
            {loading
              ? "Sending..."
              : "Send Reset Code"}
          </button>
        </form>
      </div>
    </div>
  );
}