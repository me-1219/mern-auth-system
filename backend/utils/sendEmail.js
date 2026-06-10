import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Check Gmail connection
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Email Error:", error.message);
  } else {
    console.log("✅ Email Server Ready");
  }
});

const sendEmail = async (email, code) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification Code",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Verify Your Account</h2>
          <p>Your verification code is:</p>

          <h1 style="color:#2563eb;">
            ${code}
          </h1>

          <p>This code expires in 10 minutes.</p>
        </div>
      `,
    });

    console.log(`✅ Verification email sent to ${email}`);
  } catch (error) {
    console.error("❌ Failed to send email:", error.message);
    throw error;
  }
};

export default sendEmail;