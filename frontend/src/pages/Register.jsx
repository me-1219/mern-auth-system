import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Loader2,
  UserPlus,
} from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [acceptedTerms, setAcceptedTerms] =
    useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const getPasswordStrength = (
    password
  ) => {
    if (!password)
      return {
        label: "",
        width: "0%",
        color: "",
      };

    if (password.length < 6)
      return {
        label: "Weak",
        width: "33%",
        color: "bg-red-500",
      };

    if (password.length < 10)
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      toast.error(
        "Please accept Terms & Conditions"
      );
      return;
    }

    try {
      setLoading(true);

      await registerUser(form);

      toast.success(
        "Account created successfully"
      );

      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data
          ?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
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
              <UserPlus size={32} />
            </div>

            <h1 className="text-5xl font-bold leading-tight">
              Create
              <br />
              Account
            </h1>

            <p className="mt-6 text-slate-300 text-lg">
              Join our secure
              authentication platform
              powered by JWT,
              MongoDB and Google
              OAuth.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-green-400">
                  ✓
                </span>
                Secure JWT Authentication
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-400">
                  ✓
                </span>
                Google OAuth Support
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
                Modern User Experience
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-8 lg:p-12">

          <div className="max-w-md mx-auto">

            <h2 className="text-4xl font-bold text-slate-900">
              Create Account
            </h2>

            <p className="mt-2 text-slate-500">
              Register to get
              started
            </p>

            <form
              onSubmit={
                handleSubmit
              }
              className="mt-8 space-y-5"
            >

              {/* USERNAME */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Username
                </label>

                <input
                  type="text"
                  required
                  value={
                    form.username
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      username:
                        e.target
                          .value,
                    })
                  }
                  placeholder="john_doe"
                  className="w-full h-14 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  value={
                    form.email
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email:
                        e.target
                          .value,
                    })
                  }
                  placeholder="john@example.com"
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
                    required
                    value={
                      form.password
                    }
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password:
                          e.target
                            .value,
                      })
                    }
                    placeholder="••••••••"
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

                {/* PASSWORD STRENGTH */}
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
                      <span className="font-medium ml-1">
                        {
                          strength.label
                        }
                      </span>
                    </p>
                  )}
                </div>
              </div>

              {/* TERMS */}
              <div className="flex items-start gap-3">

                <input
                  type="checkbox"
                  checked={
                    acceptedTerms
                  }
                  onChange={(e) =>
                    setAcceptedTerms(
                      e.target
                        .checked
                    )
                  }
                  className="mt-1"
                />

                <p className="text-sm text-slate-600">
                  I agree to the
                  Terms &
                  Conditions and
                  Privacy Policy.
                </p>
              </div>

              {/* SUBMIT */}
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
                    Creating
                    Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* LOGIN */}
            <p className="mt-8 text-center text-slate-600">
              Already have an
              account?{" "}
              <Link
                to="/"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
