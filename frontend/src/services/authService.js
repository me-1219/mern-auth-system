import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const registerUser = (data) =>
  axios.post(`${API}/register`, data);

export const loginUser = (data) =>
  axios.post(`${API}/login`, data);

export const verifyEmail = (data) =>
  axios.post(`${API}/verify-email`, data);
export const forgotPassword = (data) =>
  axios.post(
    "http://localhost:5000/api/auth/forgot-password",
    data
  );

export const resetPassword = (data) =>
  axios.post(
    "http://localhost:5000/api/auth/reset-password",
    data
  );

  export const resendVerification = (data) =>
  axios.post(
    `${API}/resend-verification`,
    data
  );