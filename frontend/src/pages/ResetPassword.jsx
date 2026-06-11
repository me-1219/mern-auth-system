import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/authService";
import toast from "react-hot-toast";

export default function ResetPassword() {
  const navigate = useNavigate();

  const location = useLocation();

  const email =
    location.state?.email;

  const [form, setForm] =
    useState({
      code: "",
      password: "",
      confirmPassword: "",
    });

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      if (
        form.password !==
        form.confirmPassword
      ) {
        return toast.error(
          "Passwords do not match"
        );
      }

      try {
        await resetPassword({
          email,
          code: form.code,
          newPassword:
            form.password,
        });

        toast.success(
          "Password reset successful"
        );

        navigate("/");
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message
        );
      }
    };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">
          Reset Password
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="OTP Code"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={(e) =>
              setForm({
                ...form,
                code:
                  e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword:
                  e.target.value,
              })
            }
          />

          <button className="w-full mt-4 bg-green-600 text-white p-3 rounded-lg">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}