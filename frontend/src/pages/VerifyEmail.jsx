import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  verifyEmail,
  resendVerification,
} from "../services/authService";
import toast from "react-hot-toast";
import {
  Mail,
  ShieldCheck,
  Loader2,
  RefreshCcw,
} from "lucide-react";

export default function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const [code, setCode] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [
    resendLoading,
    setResendLoading,
  ] = useState(false);

  const [countdown, setCountdown] =
    useState(60);

  useEffect(() => {
    if (!email) {
      navigate("/register");
      return;
    }

    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () =>
      clearInterval(timer);
  }, [countdown, email, navigate]);

  if (!email) return null;

  const handleResend = async () => {
    if (countdown > 0) return;

    try {
      setResendLoading(true);

      await resendVerification({
        email,
      });

      toast.success(
        "Verification code sent again"
      );

      setCountdown(60);
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Failed to resend code"
      );
    } finally {
      setResendLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    if (
      !code.match(/^\d{6}$/)
    ) {
      return toast.error(
        "Please enter a valid 6-digit code"
      );
    }

    try {
      setLoading(true);

      await verifyEmail({
        email,
        code,
      });

      toast.success(
        "Email verified successfully"
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Verification failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
            <Mail
              className="text-blue-600"
              size={30}
            />
          </div>
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-slate-900">
          Verify Email
        </h1>

        <p className="text-center text-slate-500 mt-2">
          Enter the 6-digit code sent
          to your email.
        </p>

        {/* Email Info */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">

          <p className="text-sm text-blue-700">
            Verification code sent to:
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

        {/* Form */}
        <form
          onSubmit={handleVerify}
          className="mt-6"
        >

          <label className="block text-sm font-medium mb-2 text-slate-700">
            Verification Code
          </label>

          <input
            type="text"
            maxLength={6}
            value={code}
            onChange={(e) =>
              setCode(
                e.target.value.replace(
                  /\D/g,
                  ""
                )
              )
            }
            placeholder="123456"
            className="w-full h-14 text-center text-xl tracking-[8px] border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Verifying...
              </>
            ) : (
              <>
                <ShieldCheck
                  size={18}
                />
                Verify Email
              </>
            )}
          </button>

        </form>

        {/* Resend */}
        <div className="mt-6 text-center">

          <p className="text-sm text-slate-500">
            Didn't receive the code?
          </p>

          <button
            type="button"
            onClick={handleResend}
            disabled={
              countdown > 0 ||
              resendLoading
            }
            className="mt-2 text-blue-600 hover:text-blue-700 font-medium disabled:text-slate-400 flex items-center justify-center gap-2 mx-auto"
          >
            {resendLoading ? (
              <>
                <Loader2
                  size={16}
                  className="animate-spin"
                />
                Sending...
              </>
            ) : (
              <>
                <RefreshCcw
                  size={16}
                />
                {countdown > 0
                  ? `Resend in ${countdown}s`
                  : "Resend Code"}
              </>
            )}
          </button>

        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
          <ShieldCheck size={16} />
          Secure OTP Verification
        </div>

      </div>
    </div>
  );
}