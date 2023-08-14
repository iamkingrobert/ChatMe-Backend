const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: "https://chat-me-restapi-app-git-master-iamkingrobert.vercel.app",
             methods: ["GET", "POST"], allowedHeaders: ["Content-Type"], credentials: true,
             }));

app.get("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "2e8c46ef-e17c-4283-a00e-ab8c6abba1c4" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(8080);
