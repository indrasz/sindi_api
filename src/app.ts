import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import detectRoute from "./routes/detectRoute";

const app = express();

// Konfigurasi CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Izinkan permintaan dari frontend
    methods: "GET,POST,PUT,DELETE", // Izinkan metode HTTP tertentu
    credentials: true, // Izinkan pengiriman cookie atau header otentikasi
  })
);

app.use(bodyParser.json());
app.use("/api", detectRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});