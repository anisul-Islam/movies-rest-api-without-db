import express from "express";
import bodyParser from "body-parser";
import moviesRouter from "./routes/movies.route.js";
import cors from "cors";
import path from "path";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/movies", moviesRouter);

app.get("/", (req, res) => {
  res.sendFile(path.resolve() + "/views/index.html");
});

app.use((req, res, next) => {
  res.status(404).send({
    message: "resource not found",
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({
    message: "server error",
  });
});

export default app;
