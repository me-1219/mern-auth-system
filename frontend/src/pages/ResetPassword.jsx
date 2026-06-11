import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/authService";
import toast from "react-hot-toast";
import {
  Eye,
  EyeOff,
  Lock,
  ShieldCheck,
} from "lucide-react";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [form, setForm] =
    useState({
      code: "",
      password: "",
      confirmPassword: "",
    });

  if (!email) {
    navigate("/forgot-password");
    return null;
  }

  const getPasswordStrength = (
    password
  ) => {
    if (!password)
      return {
        label: "",
        width: "0%",
        color: "",
      };

    if (password.length < 8)
      return {
        label: "Weak",
        width: "33%",
        color: "bg-red-500",
      };

    if (password.length < 12)
      return {
        label: "Medium",
        width: "66%",
        color: "bg-yellow-500",
      };

    return {
      label: "Strong",
      width: "100%",
      color: "bg-green-500",
    };
  };

  const strength =
    getPasswordStrength(
      form.password
    );

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      if (
        !form.code.match(/^\d{6}$/)
      ) {
        return toast.error(
          "OTP must be exactly 6 digits"
        );
      }

      if (
        form.password.length < 8
      ) {
        return toast.error(
          "Password must be at least 8 characters"
        );
      }

      if (
        form.password !==
        form.confirmPassword
      ) {
        return toast.error(
          "Passwords do not match"
        );
      }

      try {
        setLoading(true);

        await resetPassword({
          email,
          code: form.code,
          newPassword:
            form.password,
        });

        toast.success(
          "Password reset successful"
        );

        navigate("/login");
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Failed to reset password"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
            <ShieldCheck
              className="text-green-600"
              size={32}
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-slate-900">
          Reset Password
        </h1>

        <p className="text-center text-slate-500 mt-2">
          Enter your OTP code and
          choose a new password.
        </p>

        {/* Email Notice */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm text-blue-700">
            Verification code sent
            to:
          </p>

          <p className="font-semibold text-blue-900 break-all">
            {email}
          </p>

          <p className="text-xs mt-2 text-blue-600">
            Can't find the email?
            Check your Spam or Junk
            folder.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6"
        >

          {/* OTP */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              6-Digit OTP Code
            </label>

            <input
              type="text"
              maxLength={6}
              value={form.code}
              placeholder="123456"
              className="w-full border rounded-xl p-3 text-center text-xl tracking-[8px] focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) =>
                setForm({
                  ...form,
                  code:
                    e.target.value.replace(
                      /\D/g,
                      ""
                    ),
                })
              }
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              New Password
            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter new password"
                value={
                  form.password
                }
                className="w-full border rounded-xl p-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) =>
                  setForm({
                    ...form,
                    password:
                      e.target.value,
                  })
                }
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            {/* Strength */}
            <div className="mt-3">
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${strength.color}`}
                  style={{
                    width:
                      strength.width,
                  }}
                />
              </div>

              {strength.label && (
                <p className="text-xs mt-2 text-slate-500">
                  Password
                  Strength:
                  <span className="ml-1 font-medium">
                    {
                      strength.label
                    }
                  </span>
                </p>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm password"
                value={
                  form.confirmPassword
                }
                className="w-full border rounded-xl p-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) =>
                  setForm({
                    ...form,
                    confirmPassword:
                      e.target.value,
                  })
                }
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading
              ? "Resetting..."
              : "Reset Password"}
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Lock size={14} />
            Your password is encrypted
            and securely stored.
          </div>

        </form>
      </div>
    </div>
  );
}