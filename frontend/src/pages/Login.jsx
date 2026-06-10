
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Loader2,
  ShieldCheck,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      identifier: "",
      password: "",
    });

  // Google OAuth Redirect
  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);

      toast.success(
        "Logged in successfully"
      );

      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      toast.success(
        "Login successful"
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin =
    () => {
      window.location.href =
        "http://localhost:5000/api/auth/google";
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 flex items-center justify-center p-6">

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
      >

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center p-12 text-white relative">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />

          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
              <ShieldCheck size={32} />
            </div>

            <h1 className="text-5xl font-bold leading-tight">
              Welcome
              <br />
              Back
            </h1>

            <p className="mt-6 text-slate-300 text-lg">
              Secure authentication
              with Email, Username,
              JWT and Google OAuth.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-green-400">
                  ✓
                </span>
                Secure JWT Tokens
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-400">
                  ✓
                </span>
                Google OAuth Login
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-400">
                  ✓
                </span>
                Protected Dashboard
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-400">
                  ✓
                </span>
                MongoDB User Storage
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-8 lg:p-12">

          <div className="max-w-md mx-auto">

            <h2 className="text-4xl font-bold text-slate-900">
              Sign In
            </h2>

            <p className="mt-2 text-slate-500">
              Login to continue
            </p>

            {/* FORM */}
            <form
              onSubmit={
                handleLogin
              }
              className="mt-8 space-y-5"
            >

              {/* EMAIL / USERNAME */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Email or Username
                </label>

                <input
                  type="text"
                  name="identifier"
                  value={
                    formData.identifier
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="john@example.com"
                  required
                  className="w-full h-14 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={
                      formData.password
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="••••••••"
                    required
                    className="w-full h-14 px-4 pr-12 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                  >
                    {showPassword ? (
                      <EyeOff
                        size={20}
                      />
                    ) : (
                      <Eye
                        size={20}
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* REMEMBER */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input
                    type="checkbox"
                    className="rounded"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Forgot Password?
                </button>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                disabled={
                  loading
                }
                className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={20}
                      className="animate-spin"
                    />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* DIVIDER */}
            <div className="flex items-center my-8">
              <div className="flex-1 border-t border-slate-200" />
              <span className="px-4 text-sm text-slate-400">
                OR CONTINUE WITH
              </span>
              <div className="flex-1 border-t border-slate-200" />
            </div>

            {/* GOOGLE */}
            <button
              onClick={
                handleGoogleLogin
              }
              className="w-full h-14 border border-slate-200 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5"
              />

              <span className="font-medium">
                Continue with Google
              </span>
            </button>

            {/* REGISTER */}
            <p className="mt-8 text-center text-slate-600">
              Don't have an
              account?{" "}
              <Link
                to="/register"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

