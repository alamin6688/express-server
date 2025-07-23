import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();

app.use(express.json());

const filePath = path.join(__dirname, "../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To Todos App!");
});

app.get("/todos", (req: Request, res: Response) => {
  console.log("From query",req.query);
  console.log("From paramas",req.params);
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  // console.log(data);
  res.json(data);
});

app.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.json("Hello World!");
});

export default app;
