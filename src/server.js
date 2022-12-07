import express from "express";
import chalk from "chalk";
import cors from "cors"
import categoryRoutes from "./routes/categoryRoutes.js"

const app = express();
app.use(cors())
app.use(express.json())

app.use(categoryRoutes)

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(chalk.bgBlack.cyan(`Server is running in port: ${port}`))
);
