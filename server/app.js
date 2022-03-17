import "dotenv/config";
import express, { urlencoded } from "express";
import cors from "cors";
import mainRoutes from "./routes/userRoutes.js";
import connectTMADb from "./config/connectDb.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));

connectTMADb();

app.use(mainRoutes);

app.listen(port, () => {
  console.log(`Server is up and running in port ${port}`);
});
