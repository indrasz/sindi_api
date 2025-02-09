import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import detectRoute from "./routes/detectRoute";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", detectRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
