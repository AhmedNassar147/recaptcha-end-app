import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const SERVER_SECRET = "6Lf-j3ErAAAAAMm0gieSgBwJbPPb4sMU4Vm7FokD";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/verify-recaptcha", async (req, res) => {
  try {
    const { token } = req.body;

    // const token =
    //   "03AFcWeA7G3X-LgBFQFy2hk5AVxO1jlnL6xQ0N02C527lGN74AejWtriFhVC9v6tkai2a9KMX2aano6YlJ3Qs_H3bJNBOhOl83U9wk9MNRDcp179K7Yvt6dqoOEjJzeSWGUhQG6o3V_I-y4Jq-yMmjrvnOd3iQPosME74E70hn0P8GK7QDRJfFST94cq2C3KjAoOMxv0AtVhuc4k0d49hsWJDfZAijtJ1VPNNmQL1dYiwM3XyNSs5rMnroNvBc513PBcx3ZISXWjBbZXi4ybyBTI4ACbV0XcfKoo4C2NRlFzYEqYIaHEXY_MUcEzkiRdwbZWkVtRqr0qltZMJebffjoDLNlcNoosdKp3xbySbmFQv7rIqE5FxuE-4FOOqwrGtRBAsV7E4A5KUstsrAIoj7ZDcDTFfulaM401zDlPnrzNeCyipRckjJnriR9LDW-jjvN1VIUt4P8IYs4hkTrzG_AvGq3YeZWlfgAtS3x5rB_ZevU6RZWLoLgyiWrrwFHmaCmtqZu1xxe4iQPa9ukQb11U-ARe88vSQ6zAVJuMuQ5m2NHYe3K9YtrAaF2xBq6IGwADxGGSkrf2bAp-Q1RKCzyPLS5d6YDUo6bsnFkPhYx62iCyKXPClZdEMBIxLDkvaL7WAUdvef_RMxEyXMn3VGoNyUytJ_J01CB0y5BOG1o_4kPn1mgtxLpVjImvPMc-iuU3_-Pw5gA_djdppqtm2Y84RTozdB-lWC9WwO8TKP8ncJxRaXu7EQDH__3W9EH_juxGdQQKTAHIaScVjvyddpbyWT12IUyIG3ftOxmspGc52ZMN4KL9ijkC94rtjqzvgbdHCi7U8KRVjhKMwXiCImnIvzcuHJL50T_5L-gURb4aX_vB-XUpJwHcekANAot6A_y8Gd08J0tGeYZf1ifTDoCtejUzH7VhAqL0Ae3I7cajqX2SAG6XYr5N1B7hzXjSC-YyKuQJ6SDKZdFlZRDFV2lURJjFxHm_rz9wO4BdqGiLycSN9S56eFmkVNhWbGOB-OXaRtHSwIY_Jci-hdTyn5TIROqMsnCLPK8IN6QdbQ8X0aI1Fg1TQZg5plVhS0gH5g9npirZICfl7Kf6UP_Q2aZ7_IRIP7z-XxZQtrlX6z0q2D0xGOk_66kjPs2o1hZrbYfx2JwHqfSdYgbRRyrfs2ERDjArtwIHOrBdNejAruYVzAXSqdnATIIpRcrgrY-9Czo7CDu7i7TFqr1-Gx1HD1xGZO6BZgQuY5WF2umkVjJDQIOX_SXKzXfAKYdZwUu7w2wtvl-0Ffl7EFhWrtU91EUu5Ux-2Q6Si_nzCBw63qgJ2t4_18f0dsXJ1S1ohxr-Laqz9S4xNFdo5yVEcK0JKovCI_soQcrkCTgLKKPUdYmhejR6tlSViwyoLxdgdF9y1D6WFLyq_Ir6K9Z2EC4X8ShH4YB2rE6r9WM1ge9gQ24HfwLosQzeKzTleHp_8ML1XikXN2p51fjtPP5QUnZLxfAMoF8awN80M23t_2Pli3q1Ve81123DMCijsXaYHh9lOd12K8t8g3TIotBFuH6GEZ5gl4u99Sqx5wx3PG0qYizrnOR8SRlvIS2avS9FRReailcouUiZhNFUx7NzB0bFD5nOV9dE5zKxTYqRiGpUlfagtg8MGwRy-rgGAo8CCHXc95V4_kw8kqDXInL4XVqSG1DCFNu5uL6zN-5IHkZH0pOrKXFEVCcV0m7wkGQub-ivocTnpwxCm4qAuZUipVqYqUHp7adXWoGSZrff-G9IsKcHmv8pYS4oSuIuh-6gyoYEsrpNk36s8VWmgt7RIdqoGso8CFM3bbMPeIB2FniWGbEExNKL6ZizfPGOlCNRYLlddaJRyDCyXnShslkX6r87PI05cjhUpUPZmrJxzM2S9_Ax7benV7NQ1ZexhdlRMs_URHhzCtfmuozHljtcDITgWnJLZ13s63qNyuVtlBggfEAuxo04Ahs8zKaJb65t1rZ1WhIk829s5JVLOm6xDcKExkwZysAvJ7r2PAwOYvfgRV_gL00rPL1un-yGzYHyHEZ-N9XtHSqNejN2b8_EyL0FfZE2NSEsP6A2qimFbeY24SQ4OBABDQXiA48leXy0TSoEpT9kj4ucXUbrd0Wxm1N7agdOS_mPLGbP3DGk1BotJRgyIgTu1ssgJPQ5cUO9Ach-oBMVBW6qr1kw6-";

    console.log("req.ip", req.ip);

    const params = new URLSearchParams();
    params.append("secret", SERVER_SECRET);
    params.append("response", token);
    // params.append("remoteip", req.ip); // optional

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
    console.log("error", error);
    res
      .status(500)
      .json({ error: "Verification failed", details: error.message });
  }
});

app.listen(4000, () => console.log("Server running on port 4000"));
