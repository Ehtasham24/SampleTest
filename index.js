import express from "express";
import dotenv from "dotenv";
import priceOverridesRoutes from "./src/routes/priceOverrides.routes.js";
import bodyParser from "body-parser";
import authRoutes from "./src/routes/auth.routes.js";
// import cors from "cors";

const server = express();

dotenv.config();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
// server.use(cors());

server.use("/api", authRoutes);
server.use("/api", priceOverridesRoutes);
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
