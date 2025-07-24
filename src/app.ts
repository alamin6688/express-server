import express, { Application, NextFunction, Request, Response } from "express";
import { todosRouter } from "./app/Todos/todos.routes";
const app: Application = express();

app.use(express.json());

const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/users", userRouter);

app.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    console.log({
      url: req.url,
      method: req.method,
      header: req.header,
    });
    next();
  },
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log(something);
      res.send("Welcome To Todos App!");
    } catch (error) {
      next(error);
    }
  }
);

app.get("/error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // console.log(something);
    res.send("Welcome To error er duniya App!");
  } catch (error) {
    next(error);
  }
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: "Route not found",});
});

// Global Error Handler(Ei 4 ta parmeter must dewaa lage)
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.error(error);
    res.status(400).json({
      message: "Something went wrong from global error handler",
      error,
    });
  }
});

export default app;
