import express from "express";
import chalk from "chalk";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import gamesRoutes from "./routes/gamesRoutes.js";
import costumerRoutes from "./routes/costumersRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(categoryRoutes);
app.use(gamesRoutes);
app.use(costumerRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(chalk.bgBlack.cyan(`Server is running in port: ${port}`))
);
