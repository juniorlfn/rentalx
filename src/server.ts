import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { healthCheckRoutes } from "./routes/health-check.routes";

const port: number = 3333;

const app = express();
app.use(express.json());

// Routes
app.use("/", healthCheckRoutes);
app.use("/categories", categoriesRoutes);

app.listen(port, () => console.log(`Server is listening port ${port}!`));
