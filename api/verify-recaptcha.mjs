import express from "express";
import cors from "cors";
import serverless from "serverless-http";

const app = express();
app.use(express.json());
app.use(cors());

const SERVER_SECRET = "6Lf-j3ErAAAAAMm0gieSgBwJbPPb4sMU4Vm7FokD";

app.post("/verify-recaptcha", async (req, res) => {
  try {
    const { token } = req.body;

    const params = new URLSearchParams();
    params.append("secret", SERVER_SECRET);
    params.append("response", token);

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      }
    );

    const data = await response.json();

    if (!data.success) {
      return res.status(400).json({ error: "Invalid reCAPTCHA", ...data });
    }

    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Verification failed", details: error.message });
  }
});

export default serverless(app);
