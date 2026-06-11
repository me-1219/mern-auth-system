import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Check Gmail connection
transporter.verify((error) => {
  if (error) {
    console.log("❌ Email Error:", error.message);
  } else {
    console.log("✅ Email Server Ready");
  }
});

const sendEmail = async (optionsOrEmail, maybeCode = null) => {
  let email;
  let subject = "";
  let heading = "";
  let message = "";
  let code = null;

  if (typeof optionsOrEmail === "string") {
    email = optionsOrEmail;
    code = maybeCode;
    subject = "Your Authentication Code";
    heading = "Authentication Code";
    message = "Use the code below to continue.";
  } else if (optionsOrEmail && typeof optionsOrEmail === "object") {
    ({ email, subject = "Your Authentication Code", heading = "", message = "", code = null } = optionsOrEmail);
  } else {
    throw new Error("Invalid parameters provided to sendEmail");
  }

  if (!email) {
    throw new Error("No recipient email provided");
  }

  try {
    await transporter.sendMail({
      from: `"Auth System" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
          <h2>${heading}</h2>

          <p>${message}</p>

          ${
            code
              ? `
                <div style="
                  background:#f3f4f6;
                  padding:15px;
                  text-align:center;
                  border-radius:8px;
                  margin:20px 0;
                ">
                  <h1 style="color:#2563eb; margin:0;">
                    ${code}
                  </h1>
                </div>
              `
              : ""
          }

          <p>This code expires in 10 minutes.</p>

          <hr />
          <p style="font-size:12px;color:gray;">
            If you didn't request this email, please ignore it.
          </p>
        </div>
      `,
    });

    console.log(`✅ Email sent to ${email}`);
  } catch (error) {
    console.error("❌ Failed to send email:", error.message);
    throw error;
  }
};

export default sendEmail;